import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FoxAdBox - Turn Competitor Ads Into Your Next Winning Campaign',
  description: 'FoxAdBox reverse-engineers any photo or video ad you see online. It reveals the hidden psychology, creative secrets, and exact techniques that make it convert — then adapts everything to YOUR product.',
  keywords: 'ad analysis, AI, chrome extension, marketing, spy ads, competitor, midjourney, video script, UGC',
  openGraph: {
    title: 'FoxAdBox - AI-Powered Ad Analysis',
    description: 'Turn competitor ads into your next winning campaign',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-dark">
        {children}
      </body>
    </html>
  )
}
