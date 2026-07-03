// ═══════════════════════════════════════════════════════════════════
//  LEADWEB — Google Sheets Webhook Service
//  Sends lead data to the Google Apps Script Web App.
// ═══════════════════════════════════════════════════════════════════

import type { LeadData } from "./email-service";

// ── Types ────────────────────────────────────────────────────────

interface GoogleSheetPayload {
  secret: string;
  source: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  website: string;
  message: string;
  timeline: string;
  submittedAt: string;
}

interface WebhookResponse {
  success: boolean;
  row?: number;
  error?: string;
}

// ── Configuration ────────────────────────────────────────────────

function getWebhookConfig() {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const webhookSecret = process.env.WEBHOOK_SECRET;

  if (!webhookUrl) throw new Error("GOOGLE_SHEETS_WEBHOOK_URL is not configured");
  if (!webhookSecret) throw new Error("WEBHOOK_SECRET is not configured");

  return { webhookUrl, webhookSecret };
}

// ── Webhook Call ─────────────────────────────────────────────────

/**
 * Sends lead data to the Google Apps Script webhook for storage in Google Sheets.
 * Returns the webhook response on success, or throws on failure.
 */
export async function saveToGoogleSheet(lead: LeadData): Promise<WebhookResponse> {
  const config = getWebhookConfig();

  const payload: GoogleSheetPayload = {
    secret: config.webhookSecret,
    source: lead.source,
    name: lead.name,
    email: lead.email,
    phone: lead.phone || "",
    company: lead.company || lead.business || "",
    service: lead.service || "",
    budget: lead.budget || "",
    website: lead.website || "",
    message: lead.message || "",
    timeline: lead.timeline || "",
    submittedAt: new Date().toISOString(),
  };

  const response = await fetch(config.webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Google Sheets webhook HTTP error (${response.status}): ${errorText}`);
  }

  const result: WebhookResponse = await response.json();

  if (!result.success) {
    throw new Error(`Google Sheets webhook rejected: ${result.error || "Unknown error"}`);
  }

  return result;
}
