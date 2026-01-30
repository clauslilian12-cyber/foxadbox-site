import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FoxAdBox - Transformez les pubs de vos concurrents en campagnes gagnantes',
  description: 'FoxAdBox analyse les publicités photos et vidéos de vos concurrents, génère des prompts Midjourney et des scripts vidéo adaptés à VOTRE produit.',
  keywords: 'analyse publicitaire, IA, extension chrome, marketing, spy ads, concurrent, midjourney, script video',
  openGraph: {
    title: 'FoxAdBox - Analyse publicitaire avec IA',
    description: 'Transformez les pubs de vos concurrents en votre prochaine campagne gagnante',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-dark">
        {children}
      </body>
    </html>
  )
}
