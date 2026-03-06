'use client'

import { useRef, useEffect, useState } from 'react'

const markers = [
  { id: 'H', label: 'Hook', detail: 'Pattern interrupt — visual shock in first 1.5s', position: 8, color: '#f59e0b' },
  { id: 'E', label: 'Emotion', detail: 'Fear of missing out triggered at 4s mark', position: 35, color: '#8b5cf6' },
  { id: 'C', label: 'CTA', detail: 'Direct response CTA with urgency + scarcity', position: 78, color: '#00F5D4' },
]

const stats = [
  { label: 'Hook Strength', value: '9.2/10', delay: 1200 },
  { label: 'Retention Score', value: '87%', delay: 1600 },
  { label: 'CTA Effectiveness', value: 'High', delay: 2000 },
]

export default function VideoStudioDemo() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)
  const [activeMarker, setActiveMarker] = useState<number | null>(null)

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

  useEffect(() => {
    if (!visible) return
    let current = 0
    const interval = setInterval(() => {
      current += 0.5
      setProgress(current)
      if (current >= 100) clearInterval(interval)
    }, 30)
    return () => clearInterval(interval)
  }, [visible])

  return (
    <div ref={ref} className="rounded-xl overflow-hidden border border-dark-400" style={{ background: '#141838' }}>
      <div className="p-5">
        {/* Fake video area */}
        <div className="relative rounded-lg overflow-hidden mb-4" style={{ background: '#0d0f2a', aspectRatio: '16/9' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Frame-by-frame Analysis</div>
              <div className="text-white font-bold text-lg">0:{String(Math.floor(progress * 0.15)).padStart(2, '0')}</div>
            </div>
          </div>
          {/* Scan line effect */}
          {visible && progress < 100 && (
            <div
              className="absolute left-0 right-0 h-px bg-accent/40"
              style={{ top: `${(progress % 50) * 2}%`, transition: 'top 0.03s linear' }}
            />
          )}
        </div>

        {/* Timeline */}
        <div className="relative mb-5">
          <div className="h-2 rounded-full overflow-hidden" style={{ background: '#1e2450' }}>
            <div
              className="h-full rounded-full transition-all duration-100"
              style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #00F5D4, #8b5cf6)' }}
            />
          </div>
          {/* Markers */}
          {markers.map((m, i) => (
            <div
              key={i}
              className="absolute -top-1 cursor-pointer transition-all duration-500"
              style={{
                left: `${m.position}%`,
                transform: 'translateX(-50%)',
                opacity: visible && progress >= m.position ? 1 : 0,
              }}
              onMouseEnter={() => setActiveMarker(i)}
              onMouseLeave={() => setActiveMarker(null)}
            >
              <div
                className="w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold text-black"
                style={{ background: m.color }}
              >
                {m.id}
              </div>
              {/* Tooltip */}
              {activeMarker === i && (
                <div
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-2 rounded-lg text-xs z-10"
                  style={{ background: '#1e2450', border: `1px solid ${m.color}40` }}
                >
                  <div className="font-semibold text-white mb-0.5">{m.label}</div>
                  <div className="text-gray-400">{m.detail}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-lg p-3 text-center transition-all duration-600"
              style={{
                background: 'rgba(42,45,100,0.3)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(10px)',
                transitionDelay: `${s.delay}ms`,
              }}
            >
              <div className="text-accent font-bold text-sm">{s.value}</div>
              <div className="text-gray-500 text-[10px] mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
