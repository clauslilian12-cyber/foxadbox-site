'use client'

import { useState } from 'react'
import PricingCard from '@/components/PricingCard'
import { CheckCircle } from 'lucide-react'

const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/foxadbox-ai-marketing-ass/fibdbjcgmdhjiaddkdhhakjpingbmakh'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)

  const guarantees = [
    'Annulation à tout moment',
    '14 jours satisfait ou remboursé',
    "Pas d'engagement",
  ]

  return (
    <section id="pricing" className="section-padding bg-dark-100">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-medium mb-4 block">Pricing</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Un plan adapté à chaque besoin
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Que vous soyez freelance ou agence, trouvez le plan parfait pour booster votre veille concurrentielle.
          </p>

          {/* Toggle Mensuel / Annuel */}
          <div className="flex justify-center" style={{ margin: '40px auto 0' }}>
            <div
              style={{
                background: '#f1f5f9',
                borderRadius: '50px',
                padding: '4px',
                display: 'inline-flex',
              }}
            >
              <button
                onClick={() => setIsAnnual(false)}
                style={{
                  background: !isAnnual ? '#2A2D64' : 'transparent',
                  color: !isAnnual ? 'white' : '#64748b',
                  borderRadius: '50px',
                  padding: '8px 24px',
                  fontSize: '14px',
                  fontWeight: !isAnnual ? 600 : 500,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
              >
                Mensuel
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                style={{
                  background: isAnnual ? '#2A2D64' : 'transparent',
                  color: isAnnual ? 'white' : '#64748b',
                  borderRadius: '50px',
                  padding: '8px 24px',
                  fontSize: '14px',
                  fontWeight: isAnnual ? 600 : 500,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                Annuel
                <span
                  style={{
                    background: '#00F5D4',
                    color: '#2A2D64',
                    borderRadius: '20px',
                    padding: '2px 10px',
                    fontSize: '12px',
                    fontWeight: 700,
                  }}
                >
                  -20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 max-w-6xl mx-auto items-start">
          {/* Free */}
          <PricingCard
            name="FREE"
            price="0€"
            features={[
              '5 analyses photo',
              '3 analyses video',
              '2 prompts Midjourney',
              '1 script video',
            ]}
            cta="Commencer gratuitement"
            ctaLink={CHROME_STORE_URL}
          />

          {/* Starter */}
          <PricingCard
            name="STARTER"
            price={isAnnual ? '9.99€' : '12.99€'}
            oldPrice={isAnnual ? '12.99€' : undefined}
            billedText={isAnnual ? 'Facturé 119.88€/an' : undefined}
            showDiscount={isAnnual}
            features={[
              '150 analyses photo',
              '100 analyses video',
              '70 prompts Midjourney',
              '40 scripts video',
            ]}
            cta="Choisir Starter"
            ctaLink={CHROME_STORE_URL}
          />

          {/* Pro */}
          <PricingCard
            name="PRO"
            price={isAnnual ? '39.99€' : '49.99€'}
            oldPrice={isAnnual ? '49.99€' : undefined}
            billedText={isAnnual ? 'Facturé 479.88€/an' : undefined}
            showDiscount={isAnnual}
            features={[
              '450 analyses photo',
              '350 analyses video',
              '250 prompts Midjourney',
              '120 scripts video',
              'Support prioritaire',
            ]}
            cta="Choisir Pro"
            ctaLink={CHROME_STORE_URL}
            popular
          />

          {/* Agency */}
          <PricingCard
            name="AGENCY"
            price={isAnnual ? '99.99€' : '119.99€'}
            oldPrice={isAnnual ? '119.99€' : undefined}
            billedText={isAnnual ? 'Facturé 1199.88€/an' : undefined}
            showDiscount={isAnnual}
            features={[
              '900 analyses photo',
              '700 analyses video',
              '300 prompts Midjourney',
              '240 scripts video',
              'Support dedie',
            ]}
            cta="Choisir Agency"
            ctaLink={CHROME_STORE_URL}
          />
        </div>

        {/* Guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-gray-500">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle size={16} className="text-accent" />
              <span>{guarantee}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
