// ═══════════════════════════════════════════════════════════════════
//  LEADWEB — Email Service (Brevo Transactional API)
//  Handles building and sending beautiful HTML lead notifications.
// ═══════════════════════════════════════════════════════════════════

// ── Types ────────────────────────────────────────────────────────

export interface LeadData {
  source: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  business?: string;
  service?: string;
  budget?: string;
  website?: string;
  message?: string;
  timeline?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  ipAddress?: string;
  referer?: string;
  pageUrl?: string;
}

interface BrevoRecipient {
  email: string;
  name?: string;
}

interface BrevoEmailPayload {
  sender: BrevoRecipient;
  to: BrevoRecipient[];
  bcc?: BrevoRecipient[];
  replyTo: BrevoRecipient;
  subject: string;
  htmlContent: string;
}

// ── Configuration ────────────────────────────────────────────────

const BREVO_API_ENDPOINT = "https://api.brevo.com/v3/smtp/email";

function getBrevoConfig() {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) throw new Error("BREVO_API_KEY is not configured");

  return {
    apiKey,
    senderEmail: process.env.BREVO_SENDER_EMAIL || "noreply@leadweb.com.au",
    senderName: process.env.BREVO_SENDER_NAME || "Leadweb",
    primaryRecipient: process.env.BREVO_PRIMARY_RECIPIENT || "team@leadweb.com.au",
    bccRecipients: parseBccRecipients(process.env.BREVO_BCC_RECIPIENTS),
  };
}

function parseBccRecipients(bccEnv?: string): BrevoRecipient[] {
  if (!bccEnv) return [];
  return bccEnv
    .split(",")
    .map((e) => e.trim())
    .filter(Boolean)
    .map((email) => ({ email }));
}

// ── HTML Escaping ────────────────────────────────────────────────

function escapeHtml(value: string): string {
  return (value || "")
    .toString()
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// ── Email Template ───────────────────────────────────────────────

function buildEmailHtml(lead: LeadData): string {
  const safe = {
    source: escapeHtml(lead.source),
    name: escapeHtml(lead.name),
    email: escapeHtml(lead.email),
    phone: escapeHtml(lead.phone || "—"),
    company: escapeHtml(lead.company || lead.business || "—"),
    service: escapeHtml(lead.service || "—"),
    budget: escapeHtml(lead.budget || "—"),
    website: escapeHtml(lead.website || "—"),
    timeline: escapeHtml(lead.timeline || "—"),
    message: escapeHtml(lead.message || "—").replace(/\n/g, "<br />"),
  };

  const rows = [
    { label: "Name", value: safe.name },
    {
      label: "Email",
      value: `<a href="mailto:${safe.email}" style="color:#0F172A;text-decoration:none;font-weight:600;">${safe.email}</a>`,
    },
    {
      label: "Phone",
      value: `<a href="tel:${safe.phone}" style="color:#111827;text-decoration:none;">${safe.phone}</a>`,
    },
    { label: "Business", value: safe.company },
    { label: "Service Interest", value: safe.service },
    { label: "Budget", value: safe.budget },
    { label: "Website", value: safe.website },
    { label: "Timeline", value: safe.timeline },
    { label: "Message", value: safe.message, isLast: true },
  ];

  const tableRows = rows
    .map(
      (r) => `
      <tr>
        <td style="width:160px;padding:14px 16px;${r.isLast ? "" : "border-bottom:1px solid #F3F4F6;"}color:#6B7280;font-weight:700;font-size:13px;vertical-align:top;">${r.label}</td>
        <td style="padding:14px 16px;${r.isLast ? "" : "border-bottom:1px solid #F3F4F6;"}color:#111827;font-size:14px;line-height:1.6;">${r.value}</td>
      </tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light">
  <meta name="supported-color-schemes" content="light">
  <style>
    /* Gmail iOS Dark Mode text color inversion fix */
    u + .body .gmail-blend-screen {
      background: #000000 !important;
      mix-blend-mode: screen !important;
    }
    u + .body .gmail-blend-difference {
      background: #000000 !important;
      mix-blend-mode: difference !important;
    }
  </style>
</head>
<body class="body" style="margin:0;padding:0;background:#F8FAFC;font-family:'Segoe UI',Arial,Helvetica,sans-serif;color:#1F2937;-webkit-font-smoothing:antialiased;">

  <div style="max-width:680px;margin:0 auto;padding:32px 16px;">

    <!-- Main Card -->
    <div style="background:#FFFFFF;border-radius:16px;overflow:hidden;border:1px solid #E5E7EB;box-shadow:0 4px 24px rgba(0,0,0,0.06);">

      <!-- Header Banner -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td bgcolor="#0F172A" style="background-color:#0F172A;background-image:linear-gradient(135deg,#0F172A 0%,#1E293B 100%);padding:28px 32px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="vertical-align:middle;">
                  <p style="margin:0 0 8px;font-size:11px;text-transform:uppercase;letter-spacing:2.8px;color:#F59E0B;font-weight:800;">
                    Leadweb
                  </p>
                  <span class="gmail-blend-screen" style="display:inline-block;">
                    <span class="gmail-blend-difference" style="display:inline-block;">
                      <span style="color:#FFFFFF !important;font-size:24px;line-height:1.3;font-weight:700;display:inline-block;">
                        New Lead Submission
                      </span>
                    </span>
                  </span>
                </td>
                <td style="vertical-align:middle;text-align:right;">
                  <div style="display:inline-block;background:rgba(245,158,11,0.15);border-radius:8px;padding:8px 14px;">
                    <span style="color:#F59E0B;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">${safe.source}</span>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <!-- Body -->
      <div style="padding:28px 32px;">
        <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#6B7280;">
          A new lead has been submitted from the <strong style="color:#1F2937;">${safe.source}</strong> form. Details below:
        </p>

        <!-- Detail Table -->
        <table style="width:100%;border-collapse:collapse;border-radius:12px;overflow:hidden;border:1px solid #F3F4F6;">
          ${tableRows}
        </table>

        <!-- Action Tip -->
        <div style="margin-top:24px;padding:16px 20px;background:#FFFBEB;border-radius:12px;border:1px solid #FDE68A;">
          <p style="margin:0;font-size:13px;line-height:1.6;color:#92400E;">
            💡 <strong>Tip:</strong> Reply directly to this email to contact <strong>${safe.name}</strong> — the reply-to is set to their email address.
          </p>
        </div>
      </div>

      <!-- Footer -->
      <div style="padding:16px 32px;background:#F9FAFB;border-top:1px solid #F3F4F6;">
        <p style="margin:0;font-size:12px;color:#9CA3AF;text-align:center;">
          This is an automated notification from the Leadweb website. Do not forward externally.
        </p>
      </div>

    </div>
  </div>
</body>
</html>`;
}

// ── Brevo API Call ───────────────────────────────────────────────

/**
 * Sends a transactional lead notification email via the Brevo API.
 * Returns the Brevo messageId on success, or throws on failure.
 */
export async function sendLeadEmail(lead: LeadData): Promise<{ messageId: string }> {
  const config = getBrevoConfig();

  const payload: BrevoEmailPayload = {
    sender: {
      name: config.senderName,
      email: config.senderEmail,
    },
    to: [{ email: config.primaryRecipient }],
    replyTo: {
      email: lead.email,
      name: lead.name,
    },
    subject: `New Lead: ${lead.name} — ${lead.source}`,
    htmlContent: buildEmailHtml(lead),
  };

  if (config.bccRecipients.length > 0) {
    payload.bcc = config.bccRecipients;
  }

  const response = await fetch(BREVO_API_ENDPOINT, {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": config.apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Brevo API error (${response.status}): ${errorText}`);
  }

  return response.json();
}
