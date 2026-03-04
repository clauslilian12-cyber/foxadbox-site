import { Resend } from "resend"
import { NextResponse } from "next/server"
import WaitlistConfirmation from "@/emails/waitlist-confirmation"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 })
    }

    // 1. Ajouter le contact dans Resend
    const contactResult = await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
      unsubscribed: false,
    })
    console.log("Contact create result:", JSON.stringify(contactResult))

    // 2. Envoyer l'email de confirmation au user
    await resend.emails.send({
      from: "FoxAdBox <noreply@foxadbox.com>",
      to: email,
      subject: "Tu es sur la liste — FoxAdBox arrive bientôt 🦊",
      react: WaitlistConfirmation({ email }),
      headers: {
        "X-Entity-Ref-ID": crypto.randomUUID(),
        "Precedence": "bulk",
        "X-Auto-Response-Suppress": "OOF, DR, RN, NRN, AutoReply",
        "List-Unsubscribe": "<mailto:unsubscribe@foxadbox.com>",
      },
    })

    // 3. Notifier l'admin
    try {
      const adminResult = await resend.emails.send({
        from: "FoxAdBox Waitlist <noreply@foxadbox.com>",
        to: "claus.lilian12@gmail.com",
        subject: "Nouvelle inscription waitlist FoxAdBox",
        html: `<p>Nouvelle inscription waitlist :</p><p><strong>${email}</strong></p><p>${new Date().toISOString()}</p>`,
      })
      console.log("Admin notif sent:", JSON.stringify(adminResult))
    } catch (adminError) {
      console.error("Admin notif failed:", adminError)
    }

    return NextResponse.json({ success: true })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : ""

    // Si email déjà inscrit
    if (message.includes("already exists")) {
      return NextResponse.json({ error: "already_subscribed" }, { status: 409 })
    }

    console.error("Waitlist error:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
