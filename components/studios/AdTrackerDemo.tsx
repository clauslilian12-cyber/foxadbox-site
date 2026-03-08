'use client'

import { useRef, useEffect, useState } from 'react'

const notifications = [
  {
    dotColor: '#ef4444',
    brand: 'RHODE',
    text: '3 new ads',
    platform: 'Facebook',
    time: '2 min ago',
    delay: 400,
  },
  {
    dotColor: '#f59e0b',
    brand: '900.care',
    text: 'New main creative',
    platform: 'Instagram',
    time: '15 min ago',
    delay: 800,
  },
  {
    dotColor: '#22c55e',
    brand: 'Glossier',
    text: 'New video hook',
    platform: 'TikTok',
    time: '1 hour ago',
    delay: 1200,
  },
]

const stats = [
  { value: '3', label: 'brands tracked' },
  { value: '24', label: 'active ads' },
  { value: '2', label: 'new' },
]

export default function AdTrackerDemo({ isActive }: { isActive: boolean }) {
  const hasPlayed = useRef(false)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (isActive && !hasPlayed.current) {
      hasPlayed.current = true
      setTimeout(() => setStarted(true), 200)
    }
  }, [isActive])

  return (
    <div
      className="rounded-[20px] overflow-hidden"
      style={{
        background: '#0d1035',
        border: '1px solid #1e2758',
        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
        padding: '24px',
      }}
    >
      {/* Notification cards */}
      <div className="space-y-3 mb-5">
        {notifications.map((n, i) => (
          <div
            key={i}
            className="rounded-xl p-4 transition-all"
            style={{
              background: '#141838',
              border: '1px solid #1e2758',
              opacity: started ? 1 : 0,
              transform: started ? 'translateY(0)' : 'translateY(-16px)',
              transitionDuration: '500ms',
              transitionDelay: `${n.delay}ms`,
            }}
          >
            <div className="flex items-start gap-3">
              {/* Animated dot */}
              <div className="pt-1 flex-shrink-0">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    background: n.dotColor,
                    boxShadow: `0 0 8px ${n.dotColor}50`,
                    animation: started && i === 0 ? 'tracker-dot 2s infinite' : 'none',
                  }}
                />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-[12px] leading-relaxed" style={{ color: '#eef1ff' }}>
                  <span className="font-semibold">{n.brand}</span>
                  <span style={{ color: '#7985b0' }}> — {n.text}</span>
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[9px]" style={{ color: '#7985b0' }}>{n.platform}</span>
                  <span className="text-[9px]" style={{ color: '#4a5578' }}>&middot;</span>
                  <span className="text-[9px]" style={{ color: '#7985b0' }}>{n.time}</span>
                </div>
              </div>

              {/* Ghost CTA */}
              <button
                className="text-[9px] font-medium whitespace-nowrap px-2.5 py-1 rounded-lg flex-shrink-0"
                style={{
                  color: '#00e5be',
                  background: 'rgba(0,229,190,0.06)',
                  border: '1px solid rgba(0,229,190,0.12)',
                }}
              >
                View &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Stats bar */}
      <div
        className="pt-4 transition-all"
        style={{
          borderTop: '1px solid #1e2758',
          opacity: started ? 1 : 0,
          transform: started ? 'translateY(0)' : 'translateY(8px)',
          transitionDuration: '500ms',
          transitionDelay: '1700ms',
        }}
      >
        <div className="flex items-center justify-center gap-6">
          {stats.map((s, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span className="text-sm font-bold" style={{ color: '#eef1ff' }}>{s.value}</span>
              <span className="text-[10px]" style={{ color: '#7985b0' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes tracker-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
      `}</style>
    </div>
  )
}
