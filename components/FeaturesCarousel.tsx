'use client'

import { useState, useRef, useCallback, ReactNode } from 'react'
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
  demo: ReactNode
}

const slides: Slide[] = [
  {
    number: '01',
    badge: 'PHOTO STUDIO',
    title: 'Decode Any Ad in One Click',
    description: 'Capture any ad directly from your browser. FoxAdBox instantly analyzes the creative strategy, emotional triggers, and audience positioning.',
    tags: ['AI Analysis', 'Visual Hook', 'Psychology', 'One-Click'],
    highlighted: false,
    demo: <PhotoStudioDemo />,
  },
  {
    number: '02',
    badge: 'VIDEO STUDIO',
    title: 'Uncover Every Secret Inside a Video Ad',
    description: 'Frame-by-frame AI analysis reveals hook structure, pacing breakdown, persuasion techniques and full script reconstruction.',
    tags: ['Frame Analysis', 'Hook Detection', 'Storytelling', 'Script'],
    highlighted: false,
    demo: <VideoStudioDemo />,
  },
  {
    number: '03',
    badge: 'SPY MODE',
    title: 'Turn Their Ads Into Your Content',
    description: 'Generate Midjourney prompts, video scripts, UGC briefs and complete creative briefs — all adapted to YOUR product.',
    tags: ['Midjourney', 'UGC Script', 'Creative Brief', 'AI Remix'],
    highlighted: true,
    demo: <SpyModeDemo />,
  },
  {
    number: '04',
    badge: 'LIBRARY',
    title: 'Your Organized Swipe File, Finally',
    description: 'Save unlimited analyses, organize by collections, and export everything to Notion with one click.',
    tags: ['Unlimited Saves', 'Collections', 'Notion Export', 'History'],
    highlighted: false,
    demo: <LibraryDemo />,
  },
  {
    number: '05',
    badge: 'AD TRACKER',
    title: 'Monitor Competitors on Autopilot',
    description: 'Track multiple competitors at once. Get alerted when they launch new ads, change creatives or test new hooks.',
    tags: ['Live Alerts', 'Multi-Brand', 'Auto-Sync', 'Competitive Intel'],
    highlighted: false,
    demo: <AdTrackerDemo />,
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

  const slide = slides[active]

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
          {/* Slides */}
          {slides.map((s, i) => (
            <div
              key={i}
              className="transition-all duration-400 ease-in-out"
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
                transitionDuration: '400ms',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8 lg:gap-12 items-center">
                {/* Text */}
                <div className="space-y-5">
                  {/* Numbered pill */}
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

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {s.description}
                  </p>

                  {/* Tags */}
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

                  {/* CTA */}
                  <div className="pt-2">
                    <a
                      href="https://chromewebstore.google.com/detail/foxadbox-ai-marketing-ass/fibdbjcgmdhjiaddkdhhakjpingbmakh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-block"
                    >
                      Try for Free
                    </a>
                  </div>
                </div>

                {/* Demo */}
                <div className="relative">
                  {s.demo}
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
          {/* Left arrow */}
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
            aria-label="Previous slide"
          >
            &lsaquo;
          </button>

          {/* Dots */}
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
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Right arrow */}
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
            aria-label="Next slide"
          >
            &rsaquo;
          </button>
        </div>
      </div>
    </section>
  )
}
