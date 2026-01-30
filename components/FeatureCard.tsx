'use client'

import { ReactNode } from 'react'

interface FeatureCardProps {
  icon: string
  title: string
  subtitle: string
  points: string[]
  tagline: string
  highlighted?: boolean
}

export default function FeatureCard({
  icon,
  title,
  subtitle,
  points,
  tagline,
  highlighted = false,
}: FeatureCardProps) {
  return (
    <div
      className={`card p-8 ${
        highlighted
          ? 'border-accent/50 bg-gradient-to-br from-dark-200 via-dark-300 to-dark-200 relative overflow-hidden'
          : 'card-hover'
      }`}
    >
      {highlighted && (
        <div className="absolute top-0 right-0 bg-accent text-dark text-xs font-bold px-3 py-1 rounded-bl-lg">
          STAR FEATURE
        </div>
      )}

      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{icon}</span>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>

      <p className="text-gray-400 mb-6">{subtitle}</p>

      <ul className="space-y-3 mb-6">
        {points.map((point, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className={`w-1.5 h-1.5 rounded-full ${highlighted ? 'bg-accent' : 'bg-accent/60'}`} />
            <span className="text-gray-300 text-sm">{point}</span>
          </li>
        ))}
      </ul>

      <p className={`text-sm italic ${highlighted ? 'text-accent' : 'text-gray-500'}`}>
        "{tagline}"
      </p>
    </div>
  )
}
