import { Resend } from "resend"

import {
  buildRequestCallConfirmationHtml,
  buildRequestCallEmailHtml,
  type RequestCallPayload,
} from "@/lib/email/request-call"

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return null
  return new Resend(apiKey)
}

function getFromAddress() {
  return (
    process.env.RESEND_FROM_EMAIL ??
    "Orlando MaxTax <bookings@orlandomaxtax.com>"
  )
}

function getTeamInbox() {
  return process.env.RESEND_TO_EMAIL ?? "orlandomaxtax@gmail.com"
}

export async function sendRequestCallEmails(payload: RequestCallPayload) {
  const resend = getResendClient()
  if (!resend) {
    throw new Error("RESEND_API_KEY is not configured.")
  }

  const from = getFromAddress()
  const to = getTeamInbox()
  const subject = `New appointment request — ${payload.fullName}`

  const teamEmail = await resend.emails.send({
    from,
    to: [to],
    replyTo: payload.email,
    subject,
    html: buildRequestCallEmailHtml(payload),
  })

  if (teamEmail.error) {
    throw new Error(teamEmail.error.message)
  }

  const sendConfirmation =
    process.env.RESEND_SEND_CONFIRMATION !== "false"

  if (sendConfirmation) {
    const confirmationEmail = await resend.emails.send({
      from,
      to: [payload.email],
      replyTo: to,
      subject: "We received your Orlando MaxTax request",
      html: buildRequestCallConfirmationHtml(payload.fullName),
    })

    if (confirmationEmail.error) {
      console.error(
        "Failed to send request-call confirmation email:",
        confirmationEmail.error.message,
      )
    }
  }

  return teamEmail.data
}

export async function sendRequestCallWebhook(payload: Record<string, unknown>) {
  const webhookUrl = process.env.REQUEST_CALL_WEBHOOK_URL
  if (!webhookUrl) return

  const webhookResponse = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  })

  if (!webhookResponse.ok) {
    const body = await webhookResponse.text()
    console.error("Failed to deliver request-call webhook:", body)
  }
}
