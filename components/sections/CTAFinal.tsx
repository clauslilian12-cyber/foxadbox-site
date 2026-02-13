'use client'

import { Chrome, Clock, X } from 'lucide-react'

export default function CTAFinal() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="relative bg-gradient-to-br from-dark-200 via-dark-300 to-dark-200 border border-dark-400 rounded-3xl p-8 md:p-12 lg:p-16 text-center overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Fox emoji */}
            <span className="text-6xl mb-6 block">🦊</span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Prêt à comprendre les secrets de vos concurrents ?
            </h2>

            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Installez FoxAdBox et générez votre premier script adapté en moins de 5 minutes.
            </p>

            {/* CTA Button */}
            <a
              href="https://chromewebstore.google.com/detail/foxadbox-ai-marketing-ass/fibdbjcgmdhjiaddkdhhakjpingbmakh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-10 py-4 gap-2 mb-8 animate-glow"
            >
              <Chrome size={20} />
              Installer l'extension
            </a>

            {/* Reassurance */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-accent" />
                <span>Installation en 30 secondes</span>
              </div>
              <div className="flex items-center gap-2">
                <X size={16} className="text-accent" />
                <span>Annulation à tout moment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
