'use client'

import { useRef, useEffect, useState } from 'react'

const navIcons = ['🖼️', '🎬', '🕵️', '📚', '🎯']

const competitors = [
  { name: 'RHODE', color: '#e53e6d', badge: '🌐 Multi-plateforme', badgeBg: '#dbeafe', badgeColor: '#2563eb', count: 3, delay: 400 },
  { name: '900.care', color: '#00d4b4', badge: '', badgeBg: '', badgeColor: '', count: 5, delay: 600 },
  { name: 'Sephora', color: '#f59e0b', badge: '', badgeBg: '', badgeColor: '', count: 12, delay: 800 },
  { name: 'Glossier', color: '#7c5cfc', badge: '', badgeBg: '', badgeColor: '', count: 8, delay: 1000 },
]

export default function AdTrackerDemo() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

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
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.98)',
      }}
    >
      <div className="rounded-2xl overflow-hidden relative" style={{ height: 480, background: '#080b1a', border: '1px solid #1e2758' }}>
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #00e5be, transparent)' }} />

        {/* Chrome bar */}
        <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: '#10142e' }}>
          <div className="flex gap-1.5">
            <div className="w-[10px] h-[10px] rounded-full" style={{ background: '#ff5f57' }} />
            <div className="w-[10px] h-[10px] rounded-full" style={{ background: '#febc2e' }} />
            <div className="w-[10px] h-[10px] rounded-full" style={{ background: '#28c840' }} />
          </div>
          <div className="flex-1 mx-4 px-3 py-1 rounded-md text-[10px] text-center" style={{ background: '#080b1a', color: '#7985b0' }}>
            chrome-extension://foxadbox/ad-tracker
          </div>
        </div>

        <div className="flex" style={{ height: 'calc(100% - 38px)' }}>
          {/* Sidebar */}
          <div className="flex flex-col items-center py-3 gap-1" style={{ width: 54, background: '#1a2257' }}>
            <div className="text-lg mb-3">🦊</div>
            {navIcons.map((icon, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-sm cursor-default"
                style={{
                  background: i === 4 ? 'rgba(0,228,190,0.15)' : 'transparent',
                  border: i === 4 ? '1px solid rgba(0,228,190,0.3)' : '1px solid transparent',
                }}
              >
                {icon}
              </div>
            ))}
            <div className="mt-auto text-sm">⚙️</div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col overflow-hidden" style={{ background: '#f5f7ff' }}>
            <div className="flex items-center justify-between px-4 py-2" style={{ borderBottom: '1px solid #e2e6f3' }}>
              <span className="text-[11px] font-bold" style={{ color: '#1a2257', fontFamily: 'Syne, sans-serif' }}>FoxAdBox</span>
              <span className="text-[9px] px-2 py-0.5 rounded-full" style={{ background: 'rgba(0,212,180,0.1)', color: '#00d4b4', border: '1px solid rgba(0,212,180,0.2)' }}>✨ Gratuit</span>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3" style={{ scrollbarWidth: 'none' }}>
              {/* Header row */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-bold" style={{ color: '#1a2257', fontFamily: 'Syne, sans-serif' }}>🎯 Ad Tracker</div>
                  <div className="text-[10px] mt-0.5" style={{ color: '#7985b0' }}>Surveille et analyse tes concurrents</div>
                </div>
                <button className="text-[9px] font-semibold text-white px-3 py-1.5 rounded-lg flex-shrink-0" style={{ background: 'linear-gradient(135deg, #00d4b4, #00b89c)' }}>
                  + Ajouter un concurrent
                </button>
              </div>

              {/* Competitor items */}
              <div className="space-y-2">
                {competitors.map((c, i) => (
                  <div
                    key={i}
                    className="rounded-lg overflow-hidden flex items-center transition-all duration-500"
                    style={{
                      background: '#fff',
                      border: '1px solid #e2e6f3',
                      opacity: visible ? 1 : 0,
                      transform: visible ? 'translateY(0)' : 'translateY(16px)',
                      transitionDelay: `${c.delay}ms`,
                    }}
                  >
                    {/* Color bar left */}
                    <div className="w-1 self-stretch flex-shrink-0" style={{ background: c.color }} />

                    <div className="flex-1 flex items-center px-3 py-3 gap-3">
                      {/* Avatar */}
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0"
                        style={{ background: c.color }}
                      >
                        {c.name[0]}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold" style={{ color: '#1a2257' }}>{c.name}</span>
                          {c.badge && (
                            <span className="text-[8px] px-1.5 py-0.5 rounded font-medium" style={{ background: c.badgeBg, color: c.badgeColor }}>
                              {c.badge}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Count circle */}
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                        style={{ background: `${c.color}15`, color: c.color }}
                      >
                        {c.count}
                      </div>

                      {/* Arrow */}
                      <span className="text-lg" style={{ color: '#c0c8e0' }}>›</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
