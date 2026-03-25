import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FoxAdBox - Transformez les pubs concurrentes en votre prochaine campagne gagnante',
  description: 'FoxAdBox décortique n\u2019importe quelle pub photo ou vidéo que vous voyez en ligne. Il révèle la psychologie cachée, les secrets créatifs et les techniques exactes qui font convertir — puis adapte tout à VOTRE produit.',
  keywords: 'analyse pub, IA, extension chrome, marketing, espionnage pub, concurrent, midjourney, script vidéo, UGC',
  openGraph: {
    title: 'FoxAdBox - Analyse de pubs par IA',
    description: 'Transformez les pubs concurrentes en votre prochaine campagne gagnante',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" translate="no">
      <head>
        <meta name="google" content="notranslate" />
        <meta httpEquiv="Content-Language" content="fr" />
      </head>
      <body className="notranslate min-h-screen bg-dark">
        {children}
      </body>
    </html>
  )
}
