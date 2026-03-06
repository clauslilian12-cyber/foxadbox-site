'use client'

import { useRef, useEffect, useState } from 'react'

const promptParts = [
  { text: 'luxury skincare serum', type: 'keyword' },
  { text: ', ', type: 'plain' },
  { text: 'glass bottle on marble surface', type: 'subject' },
  { text: ', ', type: 'plain' },
  { text: 'soft pink and gold tones', type: 'style' },
  { text: ', ', type: 'plain' },
  { text: 'studio lighting', type: 'subject' },
  { text: ', ', type: 'plain' },
  { text: 'product photography', type: 'keyword' },
  { text: ', ', type: 'plain' },
  { text: 'ultra detailed', type: 'style' },
  { text: ', ', type: 'plain' },
  { text: 'minimalist composition', type: 'subject' },
  { text: ' ', type: 'plain' },
  { text: '--ar 1:1', type: 'param' },
  { text: ' ', type: 'plain' },
  { text: '--v 6', type: 'param' },
  { text: ' ', type: 'plain' },
  { text: '--style raw', type: 'param' },
]

const fullPrompt = promptParts.map((p) => p.text).join('')

const badges = [
  { label: 'Pro product photo', delay: 400 },
  { label: '1:1 Instagram', delay: 600 },
  { label: 'Luxury style', delay: 800 },
]

const colorMap: Record<string, string> = {
  keyword: '#00F5D4',
  subject: '#e2e8f0',
  style: '#8b5cf6',
  param: '#60a5fa',
  plain: '#8892b0',
}

export default function SpyModeDemo() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [charIndex, setCharIndex] = useState(0)
  const [typingDone, setTypingDone] = useState(false)

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
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        setCharIndex((prev) => {
          if (prev >= fullPrompt.length) {
            clearInterval(interval)
            setTypingDone(true)
            return prev
          }
          return prev + 1
        })
      }, 28)
      return () => clearInterval(interval)
    }, 800)
    return () => clearTimeout(delay)
  }, [visible])

  const renderTypedPrompt = () => {
    let cursor = 0
    const elements: JSX.Element[] = []
    for (let i = 0; i < promptParts.length; i++) {
      const part = promptParts[i]
      const partStart = cursor
      const partEnd = cursor + part.text.length
      if (partStart >= charIndex) break
      const visibleEnd = Math.min(partEnd, charIndex)
      const visibleText = part.text.substring(0, visibleEnd - partStart)
      elements.push(
        <span key={i} style={{ color: colorMap[part.type] }}>
          {visibleText}
        </span>
      )
      cursor = partEnd
    }
    return elements
  }

  return (
    <div ref={ref} className="rounded-xl overflow-hidden border border-dark-400" style={{ background: '#0d0f2a' }}>
      <div className="grid grid-cols-[1fr_auto_1fr] gap-0 items-stretch min-h-[280px]">
        {/* Left — competitor ad */}
        <div className="p-4 flex flex-col">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 mb-3">Competitor ad</span>
          <div
            className="flex-1 rounded-lg overflow-hidden transition-all duration-700"
            style={{
              background: '#f0f2f5',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-20px)',
            }}
          >
            {/* Mini ad */}
            <div
              className="w-full"
              style={{
                aspectRatio: '1/1',
                background: 'linear-gradient(135deg, #fce4ec, #f3e5f5)',
              }}
            >
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-10 h-12 mx-auto rounded mb-1.5" style={{ background: 'linear-gradient(180deg, #e1bee7, #ce93d8)' }} />
                  <div className="text-[9px] font-bold text-gray-600">GLOW SERUM</div>
                </div>
              </div>
            </div>
            <div className="px-2.5 py-2">
              <div className="text-[10px] font-semibold text-gray-700">Radiant skin in 7 days</div>
              <div className="mt-1.5 w-full py-1 rounded text-center text-[9px] font-semibold text-white" style={{ background: '#1877F2' }}>
                Shop Now
              </div>
            </div>
          </div>
        </div>

        {/* Center arrow */}
        <div className="flex items-center justify-center px-2">
          <div
            className="flex flex-col items-center gap-1.5 transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transitionDelay: '500ms',
            }}
          >
            <span className="text-[9px] text-gray-500 font-medium whitespace-nowrap">AI adapts</span>
            <div
              className="text-accent text-lg"
              style={{
                animation: visible ? 'pulse-arrow 2s ease-in-out infinite' : 'none',
              }}
            >
              &rarr;
            </div>
          </div>
        </div>

        {/* Right — generated prompt */}
        <div className="p-4 flex flex-col">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 mb-3">Your Midjourney prompt</span>
          <div
            className="flex-1 rounded-lg p-3 transition-all duration-700"
            style={{
              background: '#141838',
              border: '1px solid #1e2450',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(20px)',
              transitionDelay: '400ms',
            }}
          >
            <div className="font-mono text-[11px] leading-relaxed min-h-[80px]">
              <span style={{ color: '#8892b0' }}>/imagine </span>
              {renderTypedPrompt()}
              {!typingDone && visible && (
                <span
                  className="inline-block w-[2px] h-3 ml-0.5 align-middle"
                  style={{
                    background: '#00F5D4',
                    animation: 'blink-cursor 1s step-end infinite',
                  }}
                />
              )}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {badges.map((b, i) => (
                <span
                  key={i}
                  className="text-[9px] px-2 py-0.5 rounded-full font-medium transition-all duration-500"
                  style={{
                    background: 'rgba(0,245,212,0.1)',
                    color: '#00F5D4',
                    border: '1px solid rgba(0,245,212,0.2)',
                    opacity: typingDone ? 1 : 0,
                    transform: typingDone ? 'translateY(0) scale(1)' : 'translateY(5px) scale(0.9)',
                    transitionDelay: `${b.delay}ms`,
                  }}
                >
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-arrow {
          0%, 100% { transform: translateX(0); opacity: 0.6; }
          50% { transform: translateX(4px); opacity: 1; }
        }
        @keyframes blink-cursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
