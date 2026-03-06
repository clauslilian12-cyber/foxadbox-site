'use client'

import { useRef, useEffect, useState } from 'react'

const blocks = [
  {
    section: 'HOOK',
    color: '#f59e0b',
    delay: 300,
    text: '"Wait — you\'re still spending 3 hours a day on Ad Library?"',
    badges: ['Curiosity Gap', 'Pattern Interrupt'],
  },
  {
    section: 'BODY',
    color: '#8b5cf6',
    delay: 900,
    text: '"I found this Chrome extension that analyzes any ad in seconds. It tells you exactly WHY it works — the hook, the emotion, the CTA structure. Then it generates a complete creative brief for YOUR product."',
    badges: ['Social Proof', 'Benefit Stack', 'Specificity'],
  },
  {
    section: 'CTA',
    color: '#00F5D4',
    delay: 1500,
    text: '"Link in bio. Try it free — your competitors already are."',
    badges: ['Urgency', 'FOMO', 'Direct Response'],
  },
]

export default function UGCScriptDemo() {
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
      <div className="p-5 space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">UGC Script</span>
          <span className="text-xs text-gray-500">Generated in 30s</span>
        </div>

        {blocks.map((block, i) => (
          <div
            key={i}
            className="rounded-lg p-4 transition-all duration-700"
            style={{
              background: '#0d0f2a',
              borderLeft: `3px solid ${block.color}`,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: `${block.delay}ms`,
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded"
                style={{ background: `${block.color}20`, color: block.color }}
              >
                {block.section}
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">{block.text}</p>
            <div className="flex flex-wrap gap-1.5">
              {block.badges.map((badge, j) => (
                <span
                  key={j}
                  className="text-[10px] px-2 py-0.5 rounded-full transition-all duration-500"
                  style={{
                    background: 'rgba(42,45,100,0.5)',
                    color: '#9ca3af',
                    border: '1px solid rgba(42,45,100,0.8)',
                    opacity: visible ? 1 : 0,
                    transitionDelay: `${block.delay + 400 + j * 150}ms`,
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
