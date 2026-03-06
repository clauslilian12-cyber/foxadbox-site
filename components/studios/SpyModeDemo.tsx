'use client'

import { useRef, useEffect, useState } from 'react'

const promptParts = [
  { text: 'A confident woman in her 30s', color: '#e2e8f0' },
  { text: ', holding a glowing product box', color: '#e2e8f0' },
  { text: ', cinematic lighting', color: '#8b5cf6' },
  { text: ', soft bokeh background', color: '#8b5cf6' },
  { text: ', golden hour', color: '#00F5D4' },
  { text: ', shot on 85mm f/1.4', color: '#60a5fa' },
  { text: ', ultra detailed skin texture', color: '#60a5fa' },
  { text: ', commercial photography', color: '#8b5cf6' },
  { text: ', 8k resolution', color: '#60a5fa' },
  { text: ' --ar 4:5', color: '#f59e0b' },
  { text: ' --v 6.0', color: '#f59e0b' },
  { text: ' --style raw', color: '#f59e0b' },
]

export default function SpyModeDemo() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [charCount, setCharCount] = useState(0)

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
    const totalChars = promptParts.reduce((sum, p) => sum + p.text.length, 0)
    let current = 0
    const interval = setInterval(() => {
      current += 1
      setCharCount(current)
      if (current >= totalChars) clearInterval(interval)
    }, 25)
    return () => clearInterval(interval)
  }, [visible])

  const renderPrompt = () => {
    let remaining = charCount
    return promptParts.map((part, i) => {
      if (remaining <= 0) return null
      const chars = Math.min(remaining, part.text.length)
      remaining -= chars
      return (
        <span key={i} style={{ color: part.color }}>{part.text.slice(0, chars)}</span>
      )
    })
  }

  return (
    <div ref={ref} className="rounded-xl overflow-hidden border border-dark-400" style={{ background: '#141838' }}>
      <div className="p-5">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-xs font-semibold uppercase tracking-wider">Spy Mode</span>
          </div>
          <div className="flex-1 h-px bg-dark-400" />
          <span className="text-gray-500 text-xs">Midjourney Prompt</span>
        </div>

        {/* Prompt output */}
        <div className="rounded-lg p-4 font-mono text-sm leading-relaxed" style={{ background: '#0d0f2a', minHeight: '140px' }}>
          <span className="text-gray-500">/imagine </span>
          {renderPrompt()}
          {visible && charCount < promptParts.reduce((s, p) => s + p.text.length, 0) && (
            <span className="inline-block w-2 h-4 bg-accent ml-0.5 animate-pulse" style={{ verticalAlign: 'text-bottom' }} />
          )}
        </div>

        {/* Legend */}
        <div
          className="flex flex-wrap gap-3 mt-4 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transitionDelay: '2000ms' }}
        >
          {[
            { label: 'Subject', color: '#e2e8f0' },
            { label: 'Style', color: '#8b5cf6' },
            { label: 'Keywords', color: '#00F5D4' },
            { label: 'Technical', color: '#60a5fa' },
            { label: 'Params', color: '#f59e0b' },
          ].map((l, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full" style={{ background: l.color }} />
              <span className="text-xs text-gray-400">{l.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
