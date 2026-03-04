import { NextResponse } from "next/server"

export async function GET() {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ error: "Not available in production" }, { status: 403 })
  }

  const tests = []

  // Test 1 : Variables d'environnement présentes
  const envVars = ["RESEND_API_KEY", "RESEND_AUDIENCE_ID", "NOTIFY_EMAIL"]
  const missingEnv = envVars.filter((v) => !process.env[v])
  tests.push({
    name: "Variables d'environnement",
    status:
      missingEnv.length === 0
        ? "✅ OK"
        : `❌ Manquantes: ${missingEnv.join(", ")}`,
  })

  // Test 2 : Connexion Resend
  try {
    const { Resend } = await import("resend")
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.audiences.get(process.env.RESEND_AUDIENCE_ID!)
    tests.push({ name: "Connexion Resend + Audience", status: "✅ OK" })
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e)
    tests.push({
      name: "Connexion Resend + Audience",
      status: `❌ ${msg}`,
    })
  }

  // Test 3 : Envoi email test
  try {
    const { Resend } = await import("resend")
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: "FoxAdBox <noreply@foxadbox.com>",
      to: process.env.NOTIFY_EMAIL!,
      subject: "🧪 [TEST] Système waitlist FoxAdBox — OK",
      html: "<p>✅ Le système d'email waitlist fonctionne correctement.</p><p>Envoyé depuis la route de test.</p>",
    })
    tests.push({
      name: "Envoi email test",
      status: `✅ Email envoyé à ${process.env.NOTIFY_EMAIL}`,
    })
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e)
    tests.push({ name: "Envoi email test", status: `❌ ${msg}` })
  }

  const allOk = tests.every((t) => t.status.startsWith("✅"))

  return NextResponse.json(
    {
      overall: allOk
        ? "✅ Tout est opérationnel"
        : "❌ Certains tests ont échoué",
      tests,
      next_steps: allOk
        ? [
            "Visite /waitlist pour tester le formulaire",
            "Inscris un email test et vérifie ta boîte",
          ]
        : ["Corrige les erreurs ci-dessus et relance /api/waitlist/test"],
    },
    { status: allOk ? 200 : 500 }
  )
}
