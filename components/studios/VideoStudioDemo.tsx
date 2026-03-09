'use client'

import { useRef, useEffect, useState } from 'react'

const markers = [
  { position: 15, label: 'Hook', color: '#f59e0b' },
  { position: 38, label: 'Emotion', color: '#7c5cfc' },
  { position: 65, label: 'Re-hook', color: '#ef4444' },
  { position: 80, label: 'CTA', color: '#00e5be' },
]

export default function VideoStudioDemo({ isActive }: { isActive: boolean }) {
  const hasPlayed = useRef(false)
  const [progress, setProgress] = useState(0)
  const [showSummary, setShowSummary] = useState(false)

  useEffect(() => {
    if (isActive && !hasPlayed.current) {
      hasPlayed.current = true
      let current = 0
      const interval = setInterval(() => {
        current += 0.4
        setProgress(current)
        if (current >= 80) {
          clearInterval(interval)
          setTimeout(() => setShowSummary(true), 400)
        }
      }, 25)
      return () => clearInterval(interval)
    }
  }, [isActive])

  const formatTime = (pct: number) => {
    const s = Math.floor((pct / 100) * 30)
    return `0:${String(s).padStart(2, '0')}`
  }

  return (
    <div
      className="rounded-[20px] overflow-hidden relative"
      style={{
        background: '#0d1035',
        border: '1px solid #1e2758',
        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
      }}
    >
      <div className="flex">
        {/* Player */}
        <div className="flex-1">
          {/* Video area */}
          <div className="relative" style={{ aspectRatio: '16/9', background: '#080b1a' }}>
            <img src="/images/rhode-video.png" alt="Rhode video" className="absolute inset-0 w-full h-full object-cover object-center" style={{ opacity: 0.85 }} />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 100%)' }} />
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="text-center">
                {/* Play button */}
                <div
                  className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  <div className="w-0 h-0 ml-1" style={{ borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderLeft: '13px solid rgba(255,255,255,0.6)' }} />
                </div>
                <div className="text-[10px] font-mono" style={{ color: '#7985b0' }}>
                  {formatTime(progress)} / 0:30
                </div>
              </div>
            </div>

            {/* Scan line */}
            {progress > 0 && progress < 80 && (
              <div
                className="absolute left-0 right-0 h-px pointer-events-none"
                style={{
                  top: `${(progress % 40) * 2.5}%`,
                  background: 'linear-gradient(90deg, transparent, rgba(0,229,190,0.1), transparent)',
                }}
              />
            )}
          </div>

          {/* Timeline area */}
          <div className="relative px-5 pt-8 pb-5">
            {/* Marker pills above timeline */}
            <div className="relative h-7 mb-2">
              {markers.map((m, i) => (
                <div
                  key={i}
                  className="absolute bottom-0 transition-all"
                  style={{
                    left: `${m.position}%`,
                    transform: 'translateX(-50%)',
                    opacity: progress >= m.position ? 1 : 0,
                    transitionDuration: '400ms',
                  }}
                >
                  <div
                    className="px-2.5 py-1 rounded-md whitespace-nowrap transition-transform"
                    style={{
                      background: `${m.color}15`,
                      border: `1px solid ${m.color}30`,
                      transform: progress >= m.position ? 'scale(1)' : 'scale(0.8)',
                      transitionDuration: '300ms',
                    }}
                  >
                    <span className="text-[10px] font-semibold" style={{ color: m.color }}>{m.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: '#1e2758' }}>
              <div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #00e5be, #7c5cfc)',
                  transition: 'width 25ms linear',
                }}
              />
            </div>

            {/* Dots on timeline */}
            {markers.map((m, i) => (
              <div
                key={`d${i}`}
                className="absolute transition-opacity"
                style={{
                  left: `calc(1.25rem + (100% - 2.5rem) * ${m.position / 100})`,
                  bottom: '18px',
                  transform: 'translateX(-50%)',
                  opacity: progress >= m.position ? 1 : 0,
                  transitionDuration: '300ms',
                }}
              >
                <div className="w-2 h-2 rounded-full" style={{ background: m.color, boxShadow: `0 0 6px ${m.color}50` }} />
              </div>
            ))}
          </div>
        </div>

        {/* Summary panel */}
        <div
          className="flex flex-col justify-center py-6 transition-all overflow-hidden hidden md:flex"
          style={{
            width: showSummary ? 170 : 0,
            paddingLeft: showSummary ? 20 : 0,
            paddingRight: showSummary ? 20 : 0,
            opacity: showSummary ? 1 : 0,
            borderLeft: showSummary ? '1px solid #1e2758' : 'none',
            transitionDuration: '600ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <div className="space-y-3 whitespace-nowrap">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#00e5be' }} />
              <span className="text-[11px]" style={{ color: '#eef1ff' }}>4 techniques</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#f59e0b' }} />
              <span className="text-[11px]" style={{ color: '#eef1ff' }}>Score 8/10</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#7c5cfc' }} />
              <span className="text-[11px]" style={{ color: '#eef1ff' }}>Hook fort</span>
            </div>
          </div>
        </div>
      </div>

      {/* Studio label */}
      <div className="text-center px-5 pb-4">
        <span className="text-[12px] uppercase" style={{ letterSpacing: 2, fontFamily: 'Syne, sans-serif' }}>
          <span className="font-bold" style={{ color: '#00e5be' }}>02</span>
          <span style={{ color: '#7985b0' }}> — STUDIO MEDIA · VIDEO ANALYSIS</span>
        </span>
      </div>
    </div>
  )
}
