'use client'

import { useRef, useEffect, useState } from 'react'

const competitors = [
  { name: 'NovaSkin', category: 'Skincare', ads: 47, trend: '+12%', isNew: true, delay: 300 },
  { name: 'FitPulse', category: 'Fitness App', ads: 31, trend: '+8%', isNew: true, delay: 600 },
  { name: 'BrewCraft', category: 'Coffee DTC', ads: 23, trend: '+5%', isNew: false, delay: 900 },
  { name: 'StyleBox', category: 'Fashion', ads: 56, trend: '+18%', isNew: false, delay: 1200 },
  { name: 'ZenFlow', category: 'Meditation', ads: 19, trend: '+3%', isNew: true, delay: 1500 },
]

export default function AdTrackerDemo() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="rounded-xl overflow-hidden border border-dark-400" style={{ background: '#141838' }}>
      <div className="p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Competitor Tracker</span>
          <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(0,245,212,0.1)', color: '#00F5D4' }}>
            Live
          </span>
        </div>

        {/* Column headers */}
        <div className="grid grid-cols-[1fr_auto_auto] gap-4 px-3 mb-2">
          <span className="text-[10px] text-gray-500 uppercase tracking-wider">Brand</span>
          <span className="text-[10px] text-gray-500 uppercase tracking-wider text-right">Active Ads</span>
          <span className="text-[10px] text-gray-500 uppercase tracking-wider text-right">Trend</span>
        </div>

        {/* Competitor rows */}
        <div className="space-y-2">
          {competitors.map((c, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_auto_auto] gap-4 items-center px-3 py-2.5 rounded-lg transition-all duration-600"
              style={{
                background: 'rgba(42,45,100,0.25)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(-30px)',
                transitionDelay: `${c.delay}ms`,
              }}
            >
              <div className="flex items-center gap-2 min-w-0">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: '#1e2450', color: '#00F5D4' }}
                >
                  {c.name[0]}
                </div>
                <div className="min-w-0">
                  <div className="text-white text-sm font-medium flex items-center gap-1.5">
                    <span className="truncate">{c.name}</span>
                    {c.isNew && (
                      <span
                        className="text-[9px] font-bold px-1.5 py-0.5 rounded flex-shrink-0"
                        style={{
                          background: 'rgba(0,245,212,0.15)',
                          color: '#00F5D4',
                          animation: visible ? 'waitlist-pulse 2s infinite' : 'none',
                        }}
                      >
                        NEW
                      </span>
                    )}
                  </div>
                  <div className="text-gray-500 text-[10px]">{c.category}</div>
                </div>
              </div>
              <span className="text-white text-sm font-semibold text-right">{c.ads}</span>
              <span className="text-accent text-xs font-medium text-right">{c.trend}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
