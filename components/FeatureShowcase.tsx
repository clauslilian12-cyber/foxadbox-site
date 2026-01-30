'use client'

interface FeatureShowcaseProps {
  badge: string
  title: string
  description: string
  points: string[]
  imageSrc: string
  imageAlt: string
  reverse?: boolean
  highlighted?: boolean
}

export default function FeatureShowcase({
  badge,
  title,
  description,
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

      {/* Image */}
      <div className={`relative ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className={`relative rounded-2xl overflow-hidden border ${
          highlighted ? 'border-accent/30 shadow-lg shadow-accent/10' : 'border-dark-400'
        }`}>
          {/* Placeholder gradient background for missing images */}
          <div className="aspect-[4/3] bg-gradient-to-br from-dark-300 via-dark-400 to-dark-300 flex items-center justify-center">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center p-8">
                <div className="text-6xl mb-4 opacity-50">🖼️</div>
                <p className="text-gray-500 text-sm">Screenshot de l'extension</p>
                <p className="text-gray-600 text-xs mt-1">{imageAlt}</p>
              </div>
            )}
          </div>
        </div>

        {/* Decorative glow effect for highlighted items */}
        {highlighted && (
          <div className="absolute -inset-4 bg-accent/5 rounded-3xl blur-2xl -z-10" />
        )}
      </div>
    </div>
  )
}
