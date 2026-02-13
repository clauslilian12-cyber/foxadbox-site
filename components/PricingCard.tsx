'use client'

import { Check } from 'lucide-react'

interface PricingCardProps {
  name: string
  price: string
  features: string[]
  cta: string
  popular?: boolean
}

export default function PricingCard({ name, price, features, cta, popular = false }: PricingCardProps) {
  return (
    <div
      className={`relative card ${
        popular
          ? 'border-accent bg-gradient-to-b from-dark-200 to-dark-300 scale-105'
          : 'card-hover'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-accent text-dark text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
            Populaire
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold text-white">{price}</span>
          <span className="text-gray-500">/mois</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check
              size={18}
              className={`flex-shrink-0 mt-0.5 ${popular ? 'text-accent' : 'text-accent/70'}`}
            />
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="https://chromewebstore.google.com/detail/foxadbox-ai-marketing-ass/fibdbjcgmdhjiaddkdhhakjpingbmakh"
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 text-center block ${
          popular
            ? 'bg-accent text-dark hover:bg-accent-400 hover:scale-105'
            : 'bg-dark-400 text-white hover:bg-dark-500 border border-dark-500'
        }`}
      >
        {cta}
      </a>
    </div>
  )
}
