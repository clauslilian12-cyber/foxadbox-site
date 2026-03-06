'use client'

import { useRef, useEffect, useState } from 'react'

const notifications = [
  {
    dot: '#ef4444',
    dotLabel: 'NEW',
    brand: 'RHODE',
    action: 'just launched 3 new ads',
    platform: 'Facebook',
    time: '2 min ago',
    delay: 600,
  },
  {
    dot: '#eab308',
    dotLabel: '',
    brand: '900.care',
    action: 'changed its main creative',
    platform: 'Instagram',
    time: '15 min ago',
    delay: 1200,
  },
  {
    dot: '#22c55e',
    dotLabel: '',
    brand: 'Glossier',
    action: 'testing a new video hook',
    platform: 'TikTok',
    time: '1h ago',
    delay: 1800,
  },
]

const stats = [
  { value: '3', label: 'competitors tracked' },
  { value: '24', label: 'active ads' },
  { value: '2', label: 'new today' },
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
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="rounded-xl overflow-hidden border border-dark-400" style={{ background: '#0d0f2a' }}>
      <div className="p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Competitor Alerts</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#00F5D4', animation: 'waitlist-pulse 2s infinite' }} />
            <span className="text-[10px] font-medium" style={{ color: '#00F5D4' }}>Live</span>
          </div>
        </div>

        {/* Notification cards */}
        <div className="space-y-3 mb-5">
          {notifications.map((n, i) => (
            <div
              key={i}
              className="rounded-lg p-3.5 transition-all duration-600"
              style={{
                background: '#141838',
                border: '1px solid #1e2450',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(-20px)',
                transitionDelay: `${n.delay}ms`,
              }}
            >
              <div className="flex items-start gap-3">
                {/* Colored dot */}
                <div className="flex flex-col items-center gap-1 pt-0.5">
                  <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: n.dot, boxShadow: `0 0 8px ${n.dot}40` }} />
                  {n.dotLabel && (
                    <span className="text-[8px] font-bold" style={{ color: n.dot }}>{n.dotLabel}</span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-200 leading-relaxed">
                    <span className="font-semibold text-white">{n.brand}</span>
                    {' '}{n.action}
                  </p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-[10px] text-gray-500">{n.platform}</span>
                    <span className="text-[10px] text-gray-600">&middot;</span>
                    <span className="text-[10px] text-gray-500">{n.time}</span>
                  </div>
                </div>

                {/* CTA */}
                <button
                  className="text-[10px] font-medium whitespace-nowrap px-2.5 py-1 rounded-md flex-shrink-0"
                  style={{
                    color: '#00F5D4',
                    background: 'rgba(0,245,212,0.08)',
                    border: '1px solid rgba(0,245,212,0.15)',
                  }}
                >
                  View analysis &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard stats */}
        <div
          className="grid grid-cols-3 gap-3 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(10px)',
            transitionDelay: '2400ms',
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-lg p-3 text-center"
              style={{ background: '#141838', border: '1px solid #1e2450' }}
            >
              <div className="text-lg font-bold text-white">{s.value}</div>
              <div className="text-[10px] text-gray-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
