'use client'

import PricingCard from '@/components/PricingCard'
import { CheckCircle } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'STARTER',
      price: '12.99€',
      features: [
        '150 analyses photo',
        '100 analyses video',
        '70 prompts Midjourney',
        '40 scripts video',
        '50 sauvegardes',
      ],
      cta: 'Choisir Starter',
      popular: false,
    },
    {
      name: 'PRO',
      price: '49.99€',
      features: [
        '450 analyses photo',
        '350 analyses video',
        '250 prompts Midjourney',
        '120 scripts video',
        '200 sauvegardes',
        'Support prioritaire',
      ],
      cta: 'Choisir Pro',
      popular: true,
    },
    {
      name: 'AGENCY',
      price: '119.99€',
      features: [
        '900 analyses photo',
        '700 analyses video',
        '300 prompts Midjourney',
        '240 scripts video',
        'Sauvegardes illimitees',
        'Support dedie',
      ],
      cta: 'Choisir Agency',
      popular: false,
    },
  ]

  const guarantees = [
    'Annulation à tout moment',
    '14 jours satisfait ou remboursé',
    'Pas d\'engagement',
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
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
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
