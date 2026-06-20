export type RequestCallPayload = {
  fullName: string
  businessName: string
  email: string
  phone: string
  role: string
  revenueRange: string
  services: string[] | string
  description: string
  preferredDays?: string[]
  bestTimeWindow?: string
  relationshipType: string
}

function formatList(value: string[] | string | undefined) {
  if (!value) return "—"
  if (Array.isArray(value)) return value.filter(Boolean).join(", ") || "—"
  return value || "—"
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
}

export function buildRequestCallEmailHtml(payload: RequestCallPayload) {
  const rows = [
    ["Name", payload.fullName],
    ["Business", payload.businessName],
    ["Email", payload.email],
    ["Phone", payload.phone],
    ["Role", payload.role],
    ["Annual revenue", payload.revenueRange],
    ["Primary service", formatList(payload.services)],
    ["Support type", payload.relationshipType],
    ["Best time", payload.bestTimeWindow || "—"],
    ["Preferred days", formatList(payload.preferredDays)],
    ["Description", payload.description],
  ]

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:13px;width:160px;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;color:#0a2563;font-size:14px;">${escapeHtml(value)}</td></tr>`,
    )
    .join("")

  return `
    <div style="font-family:Arial,sans-serif;background:#f8f7f4;padding:24px;">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
        <div style="background:#0a2563;color:#ffffff;padding:20px 24px;">
          <h1 style="margin:0;font-size:20px;">New appointment request</h1>
          <p style="margin:8px 0 0;font-size:14px;opacity:0.9;">Orlando MaxTax website booking form</p>
        </div>
        <table style="width:100%;border-collapse:collapse;">${tableRows}</table>
      </div>
    </div>
  `
}

export function buildRequestCallConfirmationHtml(fullName: string) {
  return `
    <div style="font-family:Arial,sans-serif;background:#f8f7f4;padding:24px;">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:24px;">
        <h1 style="margin:0 0 12px;color:#0a2563;font-size:22px;">We received your request</h1>
        <p style="margin:0 0 16px;color:#334155;line-height:1.6;">
          Hi ${escapeHtml(fullName)}, thank you for contacting Orlando MaxTax. We review every request personally and will follow up within one business day.
        </p>
        <p style="margin:0;color:#64748b;font-size:14px;line-height:1.6;">
          If you need immediate help, call (689) 239-1510.
        </p>
      </div>
    </div>
  `
}
