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
        <div className="relative" style={{ aspectRatio: '16/10', background: 'linear-gradient(135deg, #fce4ec, #f3e5f5, #e8eaf6)' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-14 h-18 mx-auto rounded-lg mb-2" style={{ width: 56, height: 72, background: 'linear-gradient(180deg, #e1bee7, #ce93d8)', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
              <div className="text-[10px] font-bold text-gray-600 tracking-wider">GLOW SERUM</div>
              <div className="text-[8px] text-gray-400 mt-0.5">Results in 7 days</div>
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
