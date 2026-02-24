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
    <div className={`grid ${reverse ? 'lg:grid-cols-[7fr_5fr]' : 'lg:grid-cols-[5fr_7fr]'} gap-8 lg:gap-12 items-center py-16 lg:py-24`}>
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
          <a
            href="https://chromewebstore.google.com/detail/foxadbox-ai-marketing-ass/fibdbjcgmdhjiaddkdhhakjpingbmakh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Essai Gratuit
          </a>
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

      {/* Image */}
      <div className={`relative my-8 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="relative overflow-hidden rounded-xl" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
          {imageSrc ? (
            <div className={`rounded-xl overflow-hidden border ${
              highlighted ? 'border-accent/30' : 'border-dark-400'
            }`}>
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto object-contain"
              />
            </div>
          ) : (
            <div className={`aspect-video rounded-xl bg-gradient-to-br from-dark-200 via-dark-300 to-dark-200 flex flex-col items-center justify-center border-2 border-dashed ${
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
