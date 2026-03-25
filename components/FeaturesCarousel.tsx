'use client'

import { useState, useRef, useCallback, ComponentType } from 'react'
import PhotoStudioDemo from '@/components/studios/PhotoStudioDemo'
import VideoStudioDemo from '@/components/studios/VideoStudioDemo'
import SpyModeDemo from '@/components/studios/SpyModeDemo'
import LibraryDemo from '@/components/studios/LibraryDemo'
import AdTrackerDemo from '@/components/studios/AdTrackerDemo'

interface Slide {
  number: string
  badge: string
  title: string
  description: string
  tags: string[]
  highlighted: boolean
  Demo: ComponentType<{ isActive: boolean }>
}

const slides: Slide[] = [
  {
    number: '01',
    badge: 'PHOTO STUDIO',
    title: 'Décryptez n\u2019importe quelle pub en un clic',
    description: 'Capturez une pub directement depuis votre navigateur. FoxAdBox analyse instantanément la stratégie créative, les déclencheurs émotionnels et le positionnement audience.',
    tags: ['Analyse IA', 'Hook visuel', 'Psychologie', 'Un clic'],
    highlighted: false,
    Demo: PhotoStudioDemo,
  },
  {
    number: '02',
    badge: 'VIDEO STUDIO',
    title: 'Révélez tous les secrets d\u2019une pub vidéo',
    description: 'L\u2019analyse IA image par image révèle la structure du hook, le rythme, les techniques de persuasion et reconstruit le script complet.',
    tags: ['Analyse image', 'Détection hook', 'Storytelling', 'Script'],
    highlighted: false,
    Demo: VideoStudioDemo,
  },
  {
    number: '03',
    badge: 'SPY MODE',
    title: 'Transformez leurs pubs en votre contenu',
    description: 'Générez des prompts Midjourney, des scripts vidéo, des briefs UGC et des briefs créatifs complets — le tout adapté à VOTRE produit.',
    tags: ['Midjourney', 'Script UGC', 'Brief créatif', 'Remix IA'],
    highlighted: true,
    Demo: SpyModeDemo,
  },
  {
    number: '04',
    badge: 'LIBRARY',
    title: 'Votre swipe file organisé, enfin',
    description: 'Sauvegardez des analyses illimitées, organisez-les par collections et exportez tout vers Notion en un clic.',
    tags: ['Sauvegardes illimitées', 'Collections', 'Export Notion', 'Historique'],
    highlighted: false,
    Demo: LibraryDemo,
  },
  {
    number: '05',
    badge: 'AD TRACKER',
    title: 'Comprenez la stratégie pub de vos concurrents',
    description: 'Analysez les campagnes concurrentes pour identifier les hooks, les créas et les angles qui convertissent. Prenez de meilleures décisions avant de lancer vos pubs.',
    tags: ['Analyse stratégique', 'Veille publicitaire', 'Détection de hooks', 'Benchmark créatif'],
    highlighted: false,
    Demo: AdTrackerDemo,
  },
]

export default function FeaturesCarousel() {
  const [active, setActive] = useState(0)
  const touchStartX = useRef(0)

  const goTo = useCallback((index: number) => {
    if (index < 0 || index >= slides.length) return
    setActive(index)
  }, [])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }, [])

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0 && active < slides.length - 1) setActive(prev => prev + 1)
      else if (diff < 0 && active > 0) setActive(prev => prev - 1)
    }
  }, [active])

  return (
    <section id="features" className="bg-dark-100" style={{ borderTop: '1px solid #1e2758', borderBottom: '1px solid #1e2758' }}>
      <div className="container-custom py-16 lg:py-24">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-4 bg-accent/10 text-accent border border-accent/20">
            5 Studios &middot; Tout-en-un
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Tout ce dont tu as besoin pour{' '}
            <span className="text-accent">reverse-engineer</span> n&apos;importe quelle pub
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Chaque studio gère une étape de ton workflow — de la capture à la création.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="overflow-hidden relative"
          style={{ minHeight: 520 }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((s, i) => (
            <div
              key={i}
              style={{
                position: i === active ? 'relative' : 'absolute',
                top: 0,
                left: 0,
                right: 0,
                opacity: i === active ? 1 : 0,
                transform: i === active
                  ? 'translateX(0)'
                  : i < active
                    ? 'translateX(-60px)'
                    : 'translateX(60px)',
                pointerEvents: i === active ? 'auto' : 'none',
                transitionProperty: 'opacity, transform',
                transitionDuration: '400ms',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8 lg:gap-12 items-center">
                {/* Text */}
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-[11px] font-bold px-2.5 py-1 rounded-full"
                      style={{
                        background: s.highlighted ? 'rgba(0,229,190,0.15)' : 'rgba(30,39,88,0.8)',
                        color: s.highlighted ? '#00e5be' : '#7985b0',
                        border: s.highlighted ? '1px solid rgba(0,229,190,0.3)' : '1px solid #1e2758',
                      }}
                    >
                      {s.number}
                    </span>
                    <span
                      className="text-[11px] font-semibold tracking-wider uppercase"
                      style={{ color: s.highlighted ? '#00e5be' : '#7985b0' }}
                    >
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {s.title}
                  </h3>

                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {s.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {s.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-[10px] font-medium px-2.5 py-1 rounded-full"
                        style={{
                          background: 'rgba(30,39,88,0.6)',
                          color: '#7985b0',
                          border: '1px solid #1e2758',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://chromewebstore.google.com/detail/foxadbox-ai-marketing-ass/oinffmhjjhgihpgpibegdlmelcoohlih"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-block"
                    >
                      Essayer gratuitement
                    </a>
                  </div>
                </div>

                {/* Demo */}
                <div className="relative">
                  <s.Demo isActive={i === active} />
                  {s.highlighted && (
                    <div className="absolute -inset-4 bg-accent/5 rounded-3xl blur-2xl -z-10" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => goTo(active - 1)}
            className="w-12 h-12 rounded-full flex items-center justify-center text-lg transition-all duration-200"
            style={{
              background: 'rgba(30,39,88,0.6)',
              border: '1px solid rgba(0,229,190,0.2)',
              color: '#7985b0',
              opacity: active === 0 ? 0.3 : 1,
              cursor: active === 0 ? 'default' : 'pointer',
            }}
            disabled={active === 0}
            aria-label="Slide précédent"
          >
            &lsaquo;
          </button>

          <div className="flex items-center gap-2.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: 8,
                  height: 8,
                  background: i === active ? '#00e5be' : 'transparent',
                  border: i === active ? '2px solid #00e5be' : '2px solid rgba(0,229,190,0.3)',
                  transform: i === active ? 'scale(1.3)' : 'scale(1)',
                }}
                aria-label={`Aller au slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(active + 1)}
            className="w-12 h-12 rounded-full flex items-center justify-center text-lg transition-all duration-200"
            style={{
              background: 'rgba(30,39,88,0.6)',
              border: '1px solid rgba(0,229,190,0.2)',
              color: '#7985b0',
              opacity: active === slides.length - 1 ? 0.3 : 1,
              cursor: active === slides.length - 1 ? 'default' : 'pointer',
            }}
            disabled={active === slides.length - 1}
            aria-label="Slide suivant"
          >
            &rsaquo;
          </button>
        </div>
      </div>
    </section>
  )
}
