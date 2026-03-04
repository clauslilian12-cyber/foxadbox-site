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
          {/* Header */}
          <Section style={headerSection}>
            <Text style={logoText}>&#129418;</Text>
            <Text style={brandText}>FoxAdBox</Text>
          </Section>

          <Hr style={hr} />

          {/* Title */}
          <Heading style={heading}>
            Tu es sur la liste &#127881;
          </Heading>

          {/* Body */}
          <Text style={paragraph}>
            FoxAdBox arrive bientôt. Tu seras parmi les premiers notifiés et tu
            bénéficies de <strong style={{ color: "#00F5D4" }}>30% de réduction sur
            ta première année d&apos;abonnement</strong>.
          </Text>

          {/* Perks */}
          <Section style={perksSection}>
            <Text style={perkItem}>&#9889; <strong>Accès prioritaire</strong> — Sois parmi les premiers à tester</Text>
            <Text style={perkItem}>&#127919; <strong>Réduction early bird</strong> — 30% sur ta première année</Text>
            <Text style={perkItemLast}>&#129309; <strong>Influence le produit</strong> — Tes retours façonnent FoxAdBox</Text>
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
            Envoyé à {email}
          </Text>
          <Text style={footerText}>
            <Link href="https://foxadbox.com/unsubscribe" style={unsubLink}>
              Se désabonner
            </Link>
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const body: React.CSSProperties = {
  backgroundColor: "#0d0e1a",
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  margin: "0",
  padding: "0",
}

const container: React.CSSProperties = {
  backgroundColor: "#1a1d4a",
  maxWidth: "560px",
  margin: "0 auto",
  padding: "40px 32px",
  borderRadius: "12px",
}

const headerSection: React.CSSProperties = {
  textAlign: "center" as const,
  marginBottom: "8px",
}

const logoText: React.CSSProperties = {
  fontSize: "36px",
  margin: "0",
  lineHeight: "1",
  textAlign: "center" as const,
}

const brandText: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "20px",
  fontWeight: "700",
  margin: "4px 0 0 0",
  textAlign: "center" as const,
}

const hr: React.CSSProperties = {
  borderColor: "rgba(0,245,212,0.2)",
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
  color: "rgba(255,255,255,0.7)",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: "0 0 24px 0",
  textAlign: "center" as const,
}

const perksSection: React.CSSProperties = {
  backgroundColor: "rgba(0,245,212,0.05)",
  borderRadius: "10px",
  border: "1px solid rgba(0,245,212,0.2)",
  padding: "20px 24px",
  margin: "0 0 28px 0",
}

const perkItem: React.CSSProperties = {
  color: "rgba(255,255,255,0.7)",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0 0 12px 0",
}

const perkItemLast: React.CSSProperties = {
  color: "rgba(255,255,255,0.7)",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0",
}

const ctaSection: React.CSSProperties = {
  textAlign: "center" as const,
  margin: "0 0 8px 0",
}

const ctaButton: React.CSSProperties = {
  backgroundColor: "#00F5D4",
  color: "#0d0e1a",
  fontSize: "15px",
  fontWeight: "600",
  textDecoration: "none",
  borderRadius: "8px",
  padding: "12px 32px",
  display: "inline-block",
}

const footerText: React.CSSProperties = {
  color: "rgba(255,255,255,0.35)",
  fontSize: "12px",
  textAlign: "center" as const,
  margin: "0 0 4px 0",
  lineHeight: "1.5",
}

const unsubLink: React.CSSProperties = {
  color: "rgba(255,255,255,0.35)",
  textDecoration: "underline",
}
