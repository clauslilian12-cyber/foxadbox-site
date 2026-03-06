'use client'

import { useRef, useEffect, useState } from 'react'

const annotations = [
  { label: 'HOOK', color: '#f59e0b', top: '8%', left: '5%', width: '42%', height: '18%', delay: 400 },
  { label: 'SOCIAL PROOF', color: '#8b5cf6', top: '30%', left: '55%', width: '40%', height: '14%', delay: 800 },
  { label: 'EMOTION', color: '#00F5D4', top: '58%', left: '10%', width: '35%', height: '16%', delay: 1200 },
  { label: 'CTA', color: '#ef4444', top: '80%', left: '30%', width: '45%', height: '12%', delay: 1600 },
]

const analysisLines = [
  { label: 'Hook Type', value: 'Pattern Interrupt', delay: 600 },
  { label: 'Emotion', value: 'Fear of Missing Out', delay: 1000 },
  { label: 'Target', value: 'Women 25-34, Urban', delay: 1400 },
  { label: 'Technique', value: 'Social Proof + Scarcity', delay: 1800 },
  { label: 'Score', value: '94/100', delay: 2200 },
]

export default function PhotoStudioDemo() {
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
      <div className="flex flex-col lg:flex-row">
        {/* Fake ad with annotations */}
        <div className="relative flex-1 p-4">
          <div className="relative rounded-lg overflow-hidden" style={{ background: '#1e2450', aspectRatio: '4/3' }}>
            {/* Fake ad content */}
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <div className="text-white font-bold text-sm md:text-base leading-snug">
                &quot;Join 10,000+ marketers<br />who doubled their ROAS&quot;
              </div>
              <div className="flex items-end justify-between">
                <div className="text-gray-400 text-xs">@competitor_brand</div>
                <div className="text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(0,245,212,0.15)', color: '#00F5D4' }}>
                  Sponsored
                </div>
              </div>
            </div>
            {/* Diagonal gradient overlay */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(30,36,80,0.3) 0%, rgba(20,24,56,0.6) 100%)' }} />

            {/* Annotations */}
            {annotations.map((a, i) => (
              <div
                key={i}
                className="absolute flex items-center justify-center text-xs font-bold tracking-wide transition-all duration-700"
                style={{
                  top: a.top, left: a.left, width: a.width, height: a.height,
                  border: `2px solid ${a.color}`,
                  borderRadius: '8px',
                  color: a.color,
                  background: `${a.color}15`,
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'scale(1)' : 'scale(0.8)',
                  transitionDelay: `${a.delay}ms`,
                }}
              >
                {a.label}
              </div>
            ))}
          </div>
        </div>

        {/* Analysis lines */}
        <div className="flex-1 p-4 space-y-2 border-t lg:border-t-0 lg:border-l border-dark-400">
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-semibold">AI Analysis</div>
          {analysisLines.map((line, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-2 px-3 rounded-lg transition-all duration-500"
              style={{
                background: visible ? 'rgba(42,45,100,0.3)' : 'transparent',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(-20px)',
                transitionDelay: `${line.delay}ms`,
              }}
            >
              <span className="text-gray-400 text-xs">{line.label}</span>
              <span className="text-white text-xs font-semibold">{line.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
