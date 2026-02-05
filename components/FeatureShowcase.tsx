'use client'

import { ImageIcon } from 'lucide-react'

interface FeatureShowcaseProps {
  badge: string
  title: string
  description?: string
  points: string[]
  imageSrc?: string
  imageAlt: string
  reverse?: boolean
  highlighted?: boolean
}

export default function FeatureShowcase({
  badge,
  title,
  points,
  imageSrc,
  imageAlt,
  reverse = false,
  highlighted = false,
}: FeatureShowcaseProps) {
  return (
    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16 lg:py-24 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      {/* Text Content */}
      <div className={`space-y-6 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
        {/* Badge */}
        <span className={`inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full ${
          highlighted
            ? 'bg-accent/20 text-accent border border-accent/30'
            : 'bg-dark-300 text-gray-400 border border-dark-400'
        }`}>
          {badge}
        </span>

        {/* Title */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          {title}
        </h3>

        {/* CTA Button */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="btn-primary"
          >
            Essai Gratuit
          </button>
        </div>

        {/* Points */}
        <ul className="space-y-3 pt-4">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                highlighted ? 'bg-accent' : 'bg-accent/60'
              }`} />
              <span className="text-gray-300">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image Placeholder */}
      <div className={`relative ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className={`relative overflow-hidden ${
          highlighted ? 'shadow-lg shadow-accent/10' : ''
        }`}>
          {imageSrc ? (
            <div className={`rounded-2xl overflow-hidden border ${
              highlighted ? 'border-accent/30' : 'border-dark-400'
            }`}>
              <div className="aspect-video">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ) : (
            <div className={`aspect-video rounded-2xl bg-gradient-to-br from-dark-200 via-dark-300 to-dark-200 flex flex-col items-center justify-center border-2 border-dashed ${
              highlighted ? 'border-accent/40' : 'border-dark-400'
            }`}>
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                highlighted ? 'bg-accent/10' : 'bg-dark-400/50'
              }`}>
                <ImageIcon className={`w-8 h-8 ${highlighted ? 'text-accent/60' : 'text-gray-500'}`} />
              </div>
              <p className={`text-sm font-medium ${highlighted ? 'text-accent/80' : 'text-gray-400'}`}>
                Coming soon
              </p>
            </div>
          )}
        </div>

        {/* Decorative glow effect for highlighted items */}
        {highlighted && (
          <div className="absolute -inset-4 bg-accent/5 rounded-3xl blur-2xl -z-10" />
        )}
      </div>
    </div>
  )
}
