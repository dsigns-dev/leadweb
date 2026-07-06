// ═══════════════════════════════════════════════════════════════════
//  LEADWEB — Lead Submission API Route
//  POST /api/leads
//
//  Receives form data, validates it, then fires off the Brevo email
//  AND the Google Sheets webhook in parallel.  Each call is isolated
//  so a failure in one doesn't break the other.
// ═══════════════════════════════════════════════════════════════════

import { NextResponse } from "next/server";
import { sendLeadEmail, type LeadData } from "@/lib/email-service";
import { saveToGoogleSheet } from "@/lib/sheets-service";

// ── Validation ───────────────────────────────────────────────────

interface ValidationResult {
  valid: true;
  data: LeadData;
}

interface ValidationError {
  valid: false;
  message: string;
}

function validateLeadPayload(body: unknown): ValidationResult | ValidationError {
  if (!body || typeof body !== "object") {
    return { valid: false, message: "Request body is required" };
  }

  const data = body as Record<string, unknown>;

  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";

  if (!name) return { valid: false, message: "Name is required" };
  if (!email) return { valid: false, message: "Email is required" };

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { valid: false, message: "Invalid email address" };
  }

  return {
    valid: true,
    data: {
      source: typeof data.source === "string" ? data.source.trim() : "website",
      name,
      email,
      phone: typeof data.phone === "string" ? data.phone.trim() : undefined,
      company: typeof data.company === "string" ? data.company.trim() : undefined,
      business: typeof data.business === "string" ? data.business.trim() : undefined,
      service: typeof data.service === "string" ? data.service.trim() : undefined,
      budget: typeof data.budget === "string" ? data.budget.trim() : undefined,
      website: typeof data.website === "string" ? data.website.trim() : undefined,
      message: typeof data.message === "string" ? data.message.trim() : undefined,
      timeline: typeof data.timeline === "string" ? data.timeline.trim() : undefined,
      utmSource: typeof data.utmSource === "string" ? data.utmSource.trim() : undefined,
      utmMedium: typeof data.utmMedium === "string" ? data.utmMedium.trim() : undefined,
      utmCampaign: typeof data.utmCampaign === "string" ? data.utmCampaign.trim() : undefined,
      utmTerm: typeof data.utmTerm === "string" ? data.utmTerm.trim() : undefined,
      utmContent: typeof data.utmContent === "string" ? data.utmContent.trim() : undefined,
      referer: typeof data.referer === "string" ? data.referer.trim() : undefined,
    },
  };
}

// ── Helpers ──────────────────────────────────────────────────────

/**
 * Extracts the client IP address from request headers.
 * Works on Vercel, Cloudflare, and standard reverse proxies.
 */
function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    // x-forwarded-for can contain multiple IPs; the first is the client
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") || "";
}

// ── Route Handler ────────────────────────────────────────────────

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // ── Validate input ─────────────────────────────────────────
    const validation = validateLeadPayload(body);
    if (!validation.valid) {
      return NextResponse.json({ success: false, message: validation.message }, { status: 400 });
    }

    const lead = validation.data;

    // ── Attach server-side metadata ────────────────────────────
    lead.ipAddress = getClientIp(request);

    // ── Fire both services in parallel ─────────────────────────
    //    Each is wrapped in its own try/catch so one failure
    //    does not prevent the other from completing.

    const [emailResult, sheetResult] = await Promise.allSettled([
      sendLeadEmail(lead),
      saveToGoogleSheet(lead),
    ]);

    // ── Log results (server-side only) ─────────────────────────
    const errors: string[] = [];

    if (emailResult.status === "rejected") {
      console.error("[Lead API] Brevo email failed:", emailResult.reason);
      errors.push("Email notification failed");
    } else {
      console.log("[Lead API] Brevo email sent successfully");
    }

    if (sheetResult.status === "rejected") {
      console.error("[Lead API] Google Sheets webhook failed:", sheetResult.reason);
      errors.push("Google Sheets save failed");
    } else {
      console.log("[Lead API] Google Sheets updated successfully");
    }

    // ── Both failed → 500 ──────────────────────────────────────
    if (emailResult.status === "rejected" && sheetResult.status === "rejected") {
      return NextResponse.json(
        {
          success: false,
          message: "Lead processing failed. Both services encountered errors.",
          errors,
        },
        { status: 500 },
      );
    }

    // ── Partial or full success → 200 ──────────────────────────
    return NextResponse.json({
      success: true,
      message: "Lead processed successfully",
      ...(errors.length > 0 && { warnings: errors }),
    });
  } catch (error) {
    console.error("[Lead API] Unexpected error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
