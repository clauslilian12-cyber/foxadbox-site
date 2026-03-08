'use client'

import { useRef, useEffect, useState } from 'react'

const tags = [
  { label: 'Visual Hook', color: '#00e5be', x: '8%', y: '10%', lineToX: '28%', lineToY: '25%', delay: 400 },
  { label: 'Value Prop', color: '#f59e0b', x: '55%', y: '62%', lineToX: '45%', lineToY: '68%', delay: 700 },
  { label: 'Strong CTA', color: '#22c55e', x: '58%', y: '85%', lineToX: '45%', lineToY: '88%', delay: 1000 },
]

export default function PhotoStudioDemo({ isActive }: { isActive: boolean }) {
  const hasPlayed = useRef(false)
  const [started, setStarted] = useState(false)
  const [showScore, setShowScore] = useState(false)

  useEffect(() => {
    if (isActive && !hasPlayed.current) {
      hasPlayed.current = true
      const t = setTimeout(() => setStarted(true), 200)
      return () => clearTimeout(t)
    }
  }, [isActive])

  useEffect(() => {
    if (!started) return
    const t = setTimeout(() => setShowScore(true), 1500)
    return () => clearTimeout(t)
  }, [started])

  return (
    <div
      className="rounded-[20px] overflow-hidden relative"
      style={{
        background: '#0d1035',
        border: '1px solid #1e2758',
        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
        padding: '24px',
      }}
    >
      {/* Fake ad card */}
      <div
        className="rounded-xl overflow-hidden relative transition-all duration-700"
        style={{
          background: '#fff',
          boxShadow: started ? '0 0 0 2px rgba(0,229,190,0.3), 0 8px 32px rgba(0,0,0,0.2)' : '0 4px 16px rgba(0,0,0,0.15)',
          filter: started ? 'brightness(1.05)' : 'brightness(1)',
        }}
      >
        {/* Brand header */}
        <div className="flex items-center gap-2.5 px-4 py-3" style={{ borderBottom: '1px solid #f0f0f0' }}>
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>
            NS
          </div>
          <div>
            <div className="text-[11px] font-semibold text-gray-800">NovaSkin</div>
            <div className="text-[9px] text-gray-400">Sponsored</div>
          </div>
        </div>

        {/* Ad image */}
        <div className="relative" style={{ aspectRatio: '16/10', background: 'linear-gradient(135deg, #1a2257, #0d1035)' }}>
          {/* Cyan glow behind bottle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div style={{ width: 140, height: 140, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,229,190,0.08) 0%, transparent 70%)' }} />
          </div>

          {/* Sparkles */}
          <div className="absolute" style={{ top: '18%', left: '30%', width: 3, height: 3, borderRadius: '50%', background: '#00e5be', opacity: 0.6 }} />
          <div className="absolute" style={{ top: '35%', right: '28%', width: 2, height: 2, borderRadius: '50%', background: '#00e5be', opacity: 0.4 }} />
          <div className="absolute" style={{ bottom: '25%', left: '35%', width: 3, height: 3, borderRadius: '50%', background: '#00e5be', opacity: 0.5 }} />

          {/* Serum bottle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative" style={{ width: 52 }}>
              {/* Pump stem */}
              <div className="mx-auto" style={{ width: 2, height: 10, background: '#1a1a1a' }} />
              {/* Pump cap */}
              <div className="mx-auto" style={{ width: 20, height: 18, background: '#2a2a2a', borderRadius: '4px 4px 2px 2px' }} />
              {/* Bottle body */}
              <div
                className="relative overflow-hidden"
                style={{
                  width: 52,
                  height: 110,
                  background: 'linear-gradient(135deg, #f5f2ee, #e8e4df)',
                  borderRadius: '12px 12px 6px 6px',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.25), 0 4px 8px rgba(0,0,0,0.1)',
                }}
              >
                {/* Glass reflection */}
                <div
                  className="absolute"
                  style={{
                    top: 8,
                    left: 8,
                    width: 8,
                    height: 80,
                    background: 'rgba(255,255,255,0.4)',
                    borderRadius: 4,
                  }}
                />
                {/* Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div style={{ fontSize: 6, fontWeight: 800, letterSpacing: 2, color: '#1a2257', lineHeight: 1.3 }}>
                    SÉRUM
                  </div>
                  <div style={{ fontSize: 5, color: '#7985b0', marginTop: 2 }}>
                    No.01
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Analysis tags overlay */}
          {tags.map((tag, i) => (
            <div key={i} className="absolute z-10" style={{ left: tag.x, top: tag.y }}>
              {/* Dashed line */}
              <svg className="absolute" style={{ width: 60, height: 30, top: '50%', left: '100%', overflow: 'visible' }}>
                <line
                  x1="0" y1="0" x2="20" y2="8"
                  stroke={tag.color}
                  strokeWidth="1"
                  strokeDasharray="3 3"
                  opacity={started ? 0.5 : 0}
                  style={{ transition: `opacity 400ms ${tag.delay}ms` }}
                />
              </svg>

              {/* Tag pill */}
              <div
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md whitespace-nowrap transition-all"
                style={{
                  background: `${tag.color}18`,
                  border: `1px solid ${tag.color}40`,
                  backdropFilter: 'blur(8px)',
                  opacity: started ? 1 : 0,
                  transform: started ? 'scale(1) translateY(0)' : 'scale(0.7) translateY(8px)',
                  transitionDuration: '500ms',
                  transitionDelay: `${tag.delay}ms`,
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: tag.color }} />
                <span className="text-[10px] font-semibold" style={{ color: tag.color }}>{tag.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Ad text */}
        <div className="px-4 py-3">
          <p className="text-[11px] text-gray-700 leading-relaxed">
            Your skin deserves better. Try our bestselling Glow Serum — visible results in just 7 days.
          </p>
        </div>

        {/* CTA */}
        <div className="px-4 pb-3">
          <div className="w-full py-2 rounded-lg text-center text-[11px] font-semibold text-white" style={{ background: '#1877F2' }}>
            Shop Now
          </div>
        </div>
      </div>

      {/* Score badge */}
      <div
        className="absolute bottom-6 right-6 z-20 flex items-center gap-2 px-4 py-2 rounded-xl transition-all"
        style={{
          background: '#00e5be',
          boxShadow: '0 4px 20px rgba(0,229,190,0.3)',
          opacity: showScore ? 1 : 0,
          transform: showScore ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.9)',
          transitionDuration: '500ms',
        }}
      >
        <span className="text-xl font-bold" style={{ color: '#0d1035', fontFamily: 'Syne, sans-serif' }}>8 / 10</span>
      </div>
    </div>
  )
}
