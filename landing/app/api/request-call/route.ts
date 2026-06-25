import { NextResponse } from "next/server"
import { z } from "zod"

import {
  sendRequestCallEmails,
  sendRequestCallWebhook,
} from "@/lib/email/send-request-call"

const requestCallSchema = z.object({
  fullName: z.string().trim().min(2),
  businessName: z.string().trim().min(2),
  email: z.string().trim().email(),
  phone: z.string().trim().min(7),
  role: z.string().trim().min(1),
  revenueRange: z.string().trim().min(1),
  services: z
    .union([z.array(z.string()), z.string()])
    .transform((value) => {
      if (Array.isArray(value)) {
        return value.map((item) => item.trim()).filter(Boolean)
      }
      return value.trim() ? [value.trim()] : []
    })
    .refine((value) => value.length > 0, "Please select a service."),
  description: z.string().trim().min(10),
  preferredDays: z.array(z.string()).optional(),
  bestTimeWindow: z.string().trim().optional(),
  relationshipType: z.string().trim().min(1),
  turnstileToken: z.string().min(1, "Verification token required."),
})

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured.")
      return NextResponse.json(
        {
          ok: false,
          message:
            "Email delivery is not configured yet. Please try again soon.",
        },
        { status: 503 },
      )
    }

    const body = await request.json()
    const data = requestCallSchema.parse(body)

    // Verify Turnstile token to ensure human submission
    const turnstileRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: data.turnstileToken,
        }),
      },
    )
    const turnstileResult: { success: boolean } = await turnstileRes.json()
    if (!turnstileResult.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Verification failed. Please try again.",
        },
        { status: 400 },
      )
    }

    const payload = {
      source: "orlandomaxtax.com",
      submittedAt: new Date().toISOString(),
      inquiryType: "book-appointment",
      contact: {
        fullName: data.fullName,
        businessName: data.businessName,
        email: data.email,
        phone: data.phone,
      },
      businessProfile: {
        role: data.role,
        revenueRange: data.revenueRange,
        services: data.services,
        relationshipType: data.relationshipType,
      },
      request: {
        description: data.description,
        preferredDays: data.preferredDays ?? [],
        bestTimeWindow: data.bestTimeWindow ?? "",
      },
      raw: data,
    }

    await sendRequestCallEmails(data)
    await sendRequestCallWebhook(payload)

    return NextResponse.json({ ok: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          ok: false,
          message:
            error.issues[0]?.message ?? "Please check the form and try again.",
        },
        { status: 400 },
      )
    }

    const message =
      error instanceof Error ? error.message : "Unable to process request."

    console.error("Error handling Request a Call submission:", error)
    return NextResponse.json({ ok: false, message }, { status: 500 })
  }
}
