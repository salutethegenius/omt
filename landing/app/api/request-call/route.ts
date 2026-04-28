import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const webhookUrl = process.env.REQUEST_CALL_WEBHOOK_URL

    if (!webhookUrl) {
      console.error("REQUEST_CALL_WEBHOOK_URL is not configured.")
      return NextResponse.json(
        {
          ok: false,
          message: "Form delivery is not configured yet. Please try again soon.",
        },
        { status: 500 },
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
      console.error("Failed to deliver request-call submission:", body)
      throw new Error("Unable to deliver form submission.")
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Error handling Request a Call submission:", error)
    return NextResponse.json(
      { ok: false, message: "Unable to process request." },
      { status: 500 },
    )
  }
}

