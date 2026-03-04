import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"

interface WaitlistConfirmationProps {
  email: string
}

export default function WaitlistConfirmation({ email }: WaitlistConfirmationProps) {
  return (
    <Html>
      <Head />
      <Preview>Tu es sur la liste FoxAdBox — accès early bird confirmé</Preview>
      <Body style={body}>
        <Container style={container}>
          {/* Logo */}
          <Section style={logoSection}>
            <Text style={logoText}>
              <span style={{ fontSize: "32px" }}>&#129418;</span>
            </Text>
            <Text style={brandText}>FoxAdBox</Text>
          </Section>

          <Hr style={hr} />

          {/* Title */}
          <Heading style={heading}>
            Tu es sur la liste &#127881;
          </Heading>

          {/* Body */}
          <Text style={paragraph}>
            FoxAdBox arrive bientôt. Tu seras parmi les premiers à être notifié
            — et tu bénéficies d'un <strong style={{ color: "#f97316" }}>accès early bird
            avec 30% de réduction à vie</strong>.
          </Text>

          {/* Perks */}
          <Section style={perksSection}>
            <Text style={perkItem}>&#9889; <strong>Accès prioritaire</strong> — Sois parmi les premiers à tester</Text>
            <Text style={perkItem}>&#127919; <strong>Réduction early bird</strong> — 30% off à vie sur tous les plans</Text>
            <Text style={perkItem}>&#129309; <strong>Influence le produit</strong> — Tes retours façonnent FoxAdBox</Text>
          </Section>

          {/* CTA */}
          <Section style={ctaSection}>
            <Link href="https://foxadbox.com" style={ctaButton}>
              Voir ce que FoxAdBox peut faire &#8594;
            </Link>
          </Section>

          <Hr style={hr} />

          {/* Footer */}
          <Text style={footerText}>
            Cet email a été envoyé à {email}.
          </Text>
          <Text style={footerText}>
            Pas de spam. Désabonnement en 1 clic.
          </Text>
          <Text style={footerLink}>
            <Link href="https://foxadbox.com/unsubscribe" style={{ color: "#737373", textDecoration: "underline" }}>
              Se désabonner
            </Link>
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const body: React.CSSProperties = {
  backgroundColor: "#09090b",
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  margin: "0",
  padding: "0",
}

const container: React.CSSProperties = {
  backgroundColor: "#09090b",
  maxWidth: "560px",
  margin: "0 auto",
  padding: "40px 24px",
}

const logoSection: React.CSSProperties = {
  textAlign: "center" as const,
  marginBottom: "8px",
}

const logoText: React.CSSProperties = {
  fontSize: "32px",
  margin: "0",
  lineHeight: "1",
}

const brandText: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "20px",
  fontWeight: "700",
  margin: "4px 0 0 0",
  textAlign: "center" as const,
}

const hr: React.CSSProperties = {
  borderColor: "rgba(255,255,255,0.1)",
  margin: "24px 0",
}

const heading: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "0 0 16px 0",
  lineHeight: "1.3",
}

const paragraph: React.CSSProperties = {
  color: "#a1a1aa",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: "0 0 24px 0",
  textAlign: "center" as const,
}

const perksSection: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.06)",
  padding: "20px 24px",
  margin: "0 0 24px 0",
}

const perkItem: React.CSSProperties = {
  color: "#d4d4d8",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0 0 12px 0",
}

const ctaSection: React.CSSProperties = {
  textAlign: "center" as const,
  margin: "8px 0 0 0",
}

const ctaButton: React.CSSProperties = {
  backgroundColor: "#f97316",
  color: "#ffffff",
  fontSize: "15px",
  fontWeight: "600",
  textDecoration: "none",
  borderRadius: "8px",
  padding: "12px 32px",
  display: "inline-block",
}

const footerText: React.CSSProperties = {
  color: "#737373",
  fontSize: "12px",
  textAlign: "center" as const,
  margin: "0 0 4px 0",
  lineHeight: "1.5",
}

const footerLink: React.CSSProperties = {
  textAlign: "center" as const,
  margin: "8px 0 0 0",
  fontSize: "12px",
}
