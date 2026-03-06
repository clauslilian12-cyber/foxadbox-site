'use client'

import { useRef, useEffect, useState } from 'react'

const bubbles = [
  {
    label: 'VISUAL HOOK',
    detail: 'Curiosity',
    emoji: '🎯',
    color: '#00F5D4',
    top: '12%',
    left: '58%',
    delay: 600,
  },
  {
    label: 'VALUE PROP',
    detail: 'Immediate results',
    emoji: '💡',
    color: '#f59e0b',
    top: '52%',
    left: '62%',
    delay: 1100,
  },
  {
    label: 'STRONG CTA',
    detail: 'Urgency + Social proof',
    emoji: '⚡',
    color: '#22c55e',
    top: '78%',
    left: '55%',
    delay: 1600,
  },
]

export default function PhotoStudioDemo() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [showScore, setShowScore] = useState(false)

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
    const timer = setTimeout(() => setShowScore(true), 2200)
    return () => clearTimeout(timer)
  }, [visible])

  return (
    <div ref={ref} className="rounded-xl overflow-hidden border border-dark-400 relative" style={{ background: '#f0f2f5' }}>
      {/* Brightness overlay on analysis */}
      <div
        className="absolute inset-0 rounded-xl transition-all duration-1000 pointer-events-none z-10"
        style={{
          background: visible ? 'rgba(0,245,212,0.03)' : 'transparent',
        }}
      />

      {/* Fake social feed */}
      <div className="p-3">
        {/* Feed header bar */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg mb-2" style={{ background: '#ffffff' }}>
          <div className="w-2 h-2 rounded-full" style={{ background: '#1877F2' }} />
          <span className="text-[11px] font-semibold text-gray-400">Sponsored</span>
        </div>

        {/* Ad card */}
        <div
          className="rounded-lg overflow-hidden transition-all duration-700"
          style={{
            background: '#ffffff',
            filter: visible ? 'brightness(1.02)' : 'brightness(1)',
            boxShadow: visible ? '0 0 30px rgba(0,245,212,0.08)' : 'none',
          }}
        >
          {/* Brand header */}
          <div className="flex items-center gap-2.5 px-3 py-2.5">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>
              NS
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-800">NovaSkin</div>
              <div className="text-[10px] text-gray-400">Sponsored</div>
            </div>
          </div>

          {/* Ad image area */}
          <div className="relative" style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg, #fce4ec, #f3e5f5, #e8eaf6)' }}>
            {/* Fake product visual */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-20 mx-auto rounded-lg mb-2" style={{ background: 'linear-gradient(180deg, #e1bee7, #ce93d8)', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
                <div className="text-[10px] font-bold text-gray-600 tracking-wide">GLOW SERUM</div>
                <div className="text-[8px] text-gray-400 mt-0.5">Visible results in 7 days</div>
              </div>
            </div>

            {/* Analysis bubbles */}
            {bubbles.map((b, i) => (
              <div
                key={i}
                className="absolute z-20 transition-all duration-500"
                style={{
                  top: b.top,
                  left: b.left,
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'scale(1)' : 'scale(0.5)',
                  transitionDelay: `${b.delay}ms`,
                }}
              >
                {/* Dashed line connector */}
                <svg
                  className="absolute"
                  style={{
                    top: '50%',
                    left: '-20px',
                    width: '20px',
                    height: '2px',
                    overflow: 'visible',
                  }}
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="18"
                    y2="0"
                    stroke={b.color}
                    strokeWidth="1.5"
                    strokeDasharray="3 2"
                    opacity="0.6"
                  />
                </svg>

                <div
                  className="flex items-center gap-1.5 px-2 py-1 rounded-md whitespace-nowrap"
                  style={{
                    background: `${b.color}18`,
                    border: `1px solid ${b.color}40`,
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span className="text-[10px]">{b.emoji}</span>
                  <span className="text-[9px] font-bold" style={{ color: b.color }}>{b.label}</span>
                  <span className="text-[9px] text-gray-500">— {b.detail}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Ad text */}
          <div className="px-3 py-2.5">
            <p className="text-[11px] text-gray-700 leading-relaxed">
              Your skin deserves better. Try our bestselling Glow Serum — visible results in just 7 days. Join 50,000+ happy customers.
            </p>
          </div>

          {/* CTA button */}
          <div className="px-3 pb-3">
            <div className="w-full py-1.5 rounded text-center text-[11px] font-semibold text-white" style={{ background: '#1877F2' }}>
              Shop Now — Limited Offer
            </div>
          </div>
        </div>
      </div>

      {/* Score badge */}
      <div
        className="absolute bottom-4 right-4 z-30 flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-500"
        style={{
          background: 'rgba(10,12,30,0.9)',
          border: '1px solid rgba(0,245,212,0.3)',
          opacity: showScore ? 1 : 0,
          transform: showScore ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.9)',
        }}
      >
        <span className="text-[10px] text-gray-400 font-medium">Ad Score</span>
        <span className="text-lg font-bold" style={{ color: '#00F5D4' }}>8/10</span>
      </div>
    </div>
  )
}
