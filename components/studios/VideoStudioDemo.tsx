'use client'

import { useRef, useEffect, useState } from 'react'

const markers = [
  { position: 15, emoji: '🎣', label: 'Hook detected', detail: 'Curiosity', color: '#f59e0b' },
  { position: 40, emoji: '💜', label: 'Emotional peak', detail: 'Before/After', color: '#8b5cf6' },
  { position: 75, emoji: '📢', label: 'Re-hook', detail: 'Social proof', color: '#ef4444' },
  { position: 90, emoji: '🎯', label: 'CTA', detail: 'Urgency', color: '#00F5D4' },
]

export default function VideoStudioDemo() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showSummary, setShowSummary] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    let current = 0
    const interval = setInterval(() => {
      current += 0.4
      setProgress(current)
      if (current >= 100) {
        clearInterval(interval)
        setTimeout(() => setShowSummary(true), 400)
      }
    }, 30)
    return () => clearInterval(interval)
  }, [visible])

  const formatTime = (pct: number) => {
    const seconds = Math.floor((pct / 100) * 30)
    return `0:${String(seconds).padStart(2, '0')}`
  }

  return (
    <div ref={ref} className="rounded-xl overflow-hidden border border-dark-400 relative" style={{ background: '#0a0c1e' }}>
      <div className="flex">
        {/* Player area */}
        <div className="flex-1">
          {/* Video viewport */}
          <div className="relative" style={{ aspectRatio: '9/14', maxHeight: '360px', background: '#000' }}>
            {/* Fake video content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div
                  className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #1e2450, #2a2d64)',
                    border: '2px solid #2a2d64',
                  }}
                >
                  <div className="w-0 h-0 ml-1" style={{ borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderLeft: '12px solid #8892b0' }} />
                </div>
                <div className="text-[10px] text-gray-600 uppercase tracking-wider">Video playing</div>
                <div className="text-sm font-mono text-gray-500 mt-1">{formatTime(progress)} / 0:30</div>
              </div>
            </div>

            {/* Scan line effect */}
            {visible && progress < 100 && (
              <div
                className="absolute left-0 right-0 h-px pointer-events-none"
                style={{
                  top: `${(progress % 50) * 2}%`,
                  background: 'linear-gradient(90deg, transparent, rgba(0,245,212,0.15), transparent)',
                }}
              />
            )}

            {/* TikTok-style side icons */}
            <div className="absolute right-3 bottom-20 flex flex-col gap-4 items-center">
              {['\u2665', '\uD83D\uDCAC', '\u2197'].map((icon, i) => (
                <div key={i} className="text-center">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ background: 'rgba(255,255,255,0.1)' }}>
                    {icon}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline / progress bar area */}
          <div className="relative px-4 pt-10 pb-4">
            {/* Markers above timeline */}
            <div className="relative h-8 mb-2">
              {markers.map((m, i) => (
                <div
                  key={i}
                  className="absolute bottom-0 transition-all duration-500"
                  style={{
                    left: `${m.position}%`,
                    transform: 'translateX(-50%)',
                    opacity: progress >= m.position ? 1 : 0,
                  }}
                >
                  <div
                    className="flex items-center gap-1 px-2 py-1 rounded-md whitespace-nowrap"
                    style={{
                      background: `${m.color}15`,
                      border: `1px solid ${m.color}30`,
                    }}
                  >
                    <span className="text-[10px]">{m.emoji}</span>
                    <span className="text-[9px] font-semibold" style={{ color: m.color }}>{m.label}</span>
                    <span className="text-[9px] text-gray-500">— {m.detail}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="relative h-1.5 rounded-full overflow-hidden" style={{ background: '#1e2450' }}>
              <div
                className="h-full rounded-full transition-all duration-75"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #00F5D4, #8b5cf6)',
                }}
              />
            </div>

            {/* Marker dots on timeline */}
            {markers.map((m, i) => (
              <div
                key={`dot-${i}`}
                className="absolute transition-all duration-500"
                style={{
                  left: `calc(1rem + (100% - 2rem) * ${m.position / 100})`,
                  bottom: '14px',
                  transform: 'translateX(-50%)',
                  opacity: progress >= m.position ? 1 : 0,
                }}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    background: m.color,
                    boxShadow: `0 0 6px ${m.color}60`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Summary slide-in */}
        <div
          className="flex flex-col justify-center px-4 py-6 transition-all duration-700"
          style={{
            width: showSummary ? '160px' : '0px',
            opacity: showSummary ? 1 : 0,
            overflow: 'hidden',
            borderLeft: showSummary ? '1px solid #1e2450' : 'none',
          }}
        >
          <div className="space-y-3 whitespace-nowrap">
            <div>
              <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Techniques</div>
              <div className="text-white font-bold text-lg">4 identified</div>
            </div>
            <div>
              <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Score</div>
              <div className="font-bold text-lg" style={{ color: '#00F5D4' }}>8/10</div>
            </div>
            <div>
              <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Hook</div>
              <div className="text-white font-semibold text-sm">Strong</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
