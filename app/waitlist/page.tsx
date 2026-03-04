'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'

export default function WaitlistPage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'already' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setStatus('success')
      } else if (res.status === 409) {
        setStatus('already')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div style={{ backgroundColor: '#0d0e1a', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      {/* Navbar */}
      <nav
        style={{
          borderBottom: '1px solid rgba(0,245,212,0.15)',
          padding: '16px 0',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <span style={{ fontSize: '24px' }}>&#129418;</span>
            <span style={{ color: '#ffffff', fontSize: '18px', fontWeight: 700 }}>FoxAdBox</span>
          </Link>
          <Link
            href="/"
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: '14px',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
          >
            &#8592; Retour au site
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ maxWidth: '720px', margin: '0 auto', padding: '64px 24px 48px' }}>
        {/* Badge */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(0,245,212,0.1)',
              border: '1px solid rgba(0,245,212,0.3)',
              borderRadius: '50px',
              padding: '8px 20px',
              fontSize: '13px',
              color: '#00F5D4',
              fontWeight: 500,
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#00F5D4',
                display: 'inline-block',
                animation: 'pulse 2s infinite',
              }}
            />
            Bientôt disponible sur Chrome Web Store
          </span>
        </div>

        {/* Heading */}
        <h1
          style={{
            color: '#ffffff',
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 800,
            textAlign: 'center',
            lineHeight: 1.2,
            margin: '0 0 16px 0',
          }}
        >
          L&apos;outil que tu as vu sur TikTok.{' '}
          <span style={{ color: '#00F5D4' }}>Réserve ta place.</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: '17px',
            textAlign: 'center',
            lineHeight: 1.6,
            margin: '0 auto 24px',
            maxWidth: '520px',
          }}
        >
          FoxAdBox analyse les pubs de tes concurrents et génère des prompts Midjourney,
          scripts vidéo et briefs créatifs adaptés à TON produit.
        </p>

        {/* Counter */}
        <p
          style={{
            textAlign: 'center',
            fontSize: '15px',
            color: '#ffffff',
            margin: '0 0 40px 0',
          }}
        >
          &#128293; <strong>247</strong> marketers déjà sur la liste
        </p>

        {/* Form or Success State */}
        {status === 'success' ? (
          <div
            style={{
              backgroundColor: 'rgba(0,245,212,0.08)',
              border: '1px solid rgba(0,245,212,0.25)',
              borderRadius: '16px',
              padding: '32px 24px',
              textAlign: 'center',
              marginBottom: '48px',
            }}
          >
            <p style={{ fontSize: '32px', margin: '0 0 12px 0' }}>&#127881;</p>
            <p style={{ color: '#00F5D4', fontSize: '18px', fontWeight: 700, margin: '0 0 8px 0' }}>
              Tu es sur la liste !
            </p>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', margin: 0 }}>
              Check ta boîte mail pour la confirmation.
            </p>
          </div>
        ) : (
          <div style={{ marginBottom: '48px' }}>
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                gap: '12px',
                maxWidth: '480px',
                margin: '0 auto',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <input
                type="email"
                placeholder="ton@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  flex: '1 1 260px',
                  minWidth: '0',
                  padding: '14px 18px',
                  backgroundColor: 'rgba(42,45,100,0.5)',
                  border: '1px solid rgba(0,245,212,0.15)',
                  borderRadius: '10px',
                  color: '#ffffff',
                  fontSize: '15px',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                  flex: '0 0 auto',
                  padding: '14px 28px',
                  backgroundColor: status === 'loading' ? '#00d4b8' : '#00F5D4',
                  color: '#0d0e1a',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: status === 'loading' ? 'wait' : 'pointer',
                  transition: 'background-color 0.2s, transform 0.2s',
                  whiteSpace: 'nowrap',
                }}
              >
                {status === 'loading' ? 'Inscription...' : 'Rejoindre la liste →'}
              </button>
            </form>

            {/* Status messages */}
            {status === 'already' && (
              <p style={{ textAlign: 'center', color: '#00F5D4', fontSize: '14px', marginTop: '12px' }}>
                Tu es déjà sur la liste &#128064;
              </p>
            )}
            {status === 'error' && (
              <p style={{ textAlign: 'center', color: '#ef4444', fontSize: '14px', marginTop: '12px' }}>
                Une erreur est survenue. Réessaie.
              </p>
            )}
          </div>
        )}

        {/* Perks Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginBottom: '64px',
          }}
        >
          <div style={perkCard}>
            <p style={{ fontSize: '28px', margin: '0 0 12px 0' }}>&#9889;</p>
            <p style={perkTitle}>Accès early bird</p>
            <p style={perkDesc}>30% de réduction à vie sur tous les plans</p>
          </div>
          <div style={perkCard}>
            <p style={{ fontSize: '28px', margin: '0 0 12px 0' }}>&#127919;</p>
            <p style={perkTitle}>Accès prioritaire</p>
            <p style={perkDesc}>Sois parmi les premiers à tester FoxAdBox</p>
          </div>
          <div style={perkCard}>
            <p style={{ fontSize: '28px', margin: '0 0 12px 0' }}>&#129309;</p>
            <p style={perkTitle}>Influence le produit</p>
            <p style={perkDesc}>Tes retours façonnent les prochaines features</p>
          </div>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '48px',
            flexWrap: 'wrap',
            marginBottom: '64px',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#00F5D4', fontSize: '28px', fontWeight: 800, margin: '0 0 4px 0' }}>+1,500</p>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', margin: 0 }}>Pubs analysées cette semaine</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#00F5D4', fontSize: '28px', fontWeight: 800, margin: '0 0 4px 0' }}>+200</p>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', margin: 0 }}>Nouveaux utilisateurs ce mois</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#00F5D4', fontSize: '28px', fontWeight: 800, margin: '0 0 4px 0' }}>5</p>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', margin: 0 }}>Studios IA intégrés</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid rgba(0,245,212,0.15)',
          padding: '32px 24px',
          textAlign: 'center',
        }}
      >
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', marginBottom: '12px' }}>
          <span style={{ fontSize: '20px' }}>&#129418;</span>
          <span style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700 }}>FoxAdBox</span>
        </Link>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', margin: '12px 0 0 0' }}>
          &copy; 2025 FoxAdBox. Tous droits réservés.
        </p>
      </footer>

      {/* Pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        input::placeholder {
          color: rgba(255,255,255,0.3);
        }
        input:focus {
          border-color: #00F5D4 !important;
        }
      `}</style>
    </div>
  )
}

const perkCard: React.CSSProperties = {
  backgroundColor: 'rgba(42,45,100,0.3)',
  border: '1px solid rgba(0,245,212,0.1)',
  borderRadius: '16px',
  padding: '24px',
  textAlign: 'center',
}

const perkTitle: React.CSSProperties = {
  color: '#ffffff',
  fontSize: '15px',
  fontWeight: 600,
  margin: '0 0 6px 0',
}

const perkDesc: React.CSSProperties = {
  color: 'rgba(255,255,255,0.55)',
  fontSize: '13px',
  lineHeight: 1.5,
  margin: 0,
}
