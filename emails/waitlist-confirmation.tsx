import {
  Body,
  Container,
  Head,
  Html,
  Link,
  Preview,
  Text,
} from "@react-email/components"

interface WaitlistConfirmationProps {
  email: string
}

export default function WaitlistConfirmation({ email }: WaitlistConfirmationProps) {
  return (
    <Html>
      <Head />
      <Preview>Bienvenue sur la liste FoxAdBox</Preview>
      <Body style={body}>
        <Container style={container}>
          <Text style={brand}>FoxAdBox</Text>

          <Text style={paragraph}>Bonjour,</Text>

          <Text style={paragraph}>
            Merci pour ton inscription. Tu es bien sur la liste d&apos;attente FoxAdBox.
          </Text>

          <Text style={paragraph}>
            Je te contacterai personnellement dès que l&apos;extension sera disponible
            sur le Chrome Web Store.
          </Text>

          <Text style={paragraph}>
            En attendant, tu bénéficies d&apos;un accès prioritaire et de 30% de réduction
            sur ta première année.
          </Text>

          <Text style={paragraph}>
            <Link href="https://foxadbox.com" style={ctaLink}>
              Découvrir FoxAdBox
            </Link>
          </Text>

          <Text style={paragraph}>
            À très bientôt,{"\n"}
            Lilian — FoxAdBox
          </Text>

          <Text style={footer}>
            Envoyé à {email} —{" "}
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
  backgroundColor: "#f9f9f9",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  margin: "0",
  padding: "0",
}

const container: React.CSSProperties = {
  backgroundColor: "#ffffff",
  maxWidth: "560px",
  margin: "0 auto",
  padding: "40px 32px",
}

const brand: React.CSSProperties = {
  color: "#1a1a1a",
  fontSize: "18px",
  fontWeight: "700",
  margin: "0 0 24px 0",
}

const paragraph: React.CSSProperties = {
  color: "#1a1a1a",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: "0 0 16px 0",
}

const ctaLink: React.CSSProperties = {
  color: "#1a73e8",
  textDecoration: "underline",
  fontSize: "15px",
}

const footer: React.CSSProperties = {
  color: "#999999",
  fontSize: "12px",
  marginTop: "32px",
  lineHeight: "1.5",
}

const unsubLink: React.CSSProperties = {
  color: "#999999",
  textDecoration: "underline",
}
