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

interface WaitlistNotifyAdminProps {
  email: string
  date: string
}

export default function WaitlistNotifyAdmin({ email, date }: WaitlistNotifyAdminProps) {
  return (
    <Html>
      <Head />
      <Preview>Nouvelle inscription waitlist : {email}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Heading style={heading}>
            &#129418; Nouvelle inscription waitlist
          </Heading>

          <Text style={paragraph}>
            Un nouveau marketer vient de rejoindre la waitlist FoxAdBox.
          </Text>

          <Section style={emailCard}>
            <Text style={emailLabel}>Email inscrit</Text>
            <Text style={emailValue}>{email}</Text>
          </Section>

          <Text style={timestamp}>
            Date : {date}
          </Text>

          <Hr style={hr} />

          <Section style={{ textAlign: "center" as const }}>
            <Link href="https://resend.com/audiences" style={dashboardLink}>
              Voir le dashboard Resend &#8594;
            </Link>
          </Section>
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
  maxWidth: "480px",
  margin: "0 auto",
  padding: "40px 24px",
}

const heading: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "0 0 16px 0",
}

const paragraph: React.CSSProperties = {
  color: "#a1a1aa",
  fontSize: "15px",
  lineHeight: "1.6",
  textAlign: "center" as const,
  margin: "0 0 24px 0",
}

const emailCard: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.06)",
  padding: "20px",
  textAlign: "center" as const,
  margin: "0 0 16px 0",
}

const emailLabel: React.CSSProperties = {
  color: "#737373",
  fontSize: "12px",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
  margin: "0 0 8px 0",
}

const emailValue: React.CSSProperties = {
  color: "#f97316",
  fontSize: "20px",
  fontWeight: "700",
  margin: "0",
}

const timestamp: React.CSSProperties = {
  color: "#737373",
  fontSize: "13px",
  textAlign: "center" as const,
  margin: "0 0 24px 0",
}

const hr: React.CSSProperties = {
  borderColor: "rgba(255,255,255,0.1)",
  margin: "0 0 24px 0",
}

const dashboardLink: React.CSSProperties = {
  color: "#f97316",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
}
