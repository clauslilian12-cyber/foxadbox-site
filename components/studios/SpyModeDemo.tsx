'use client'

import { useRef, useEffect, useState } from 'react'

const promptParts = [
  { text: 'luxury skincare serum', type: 'subject' },
  { text: ', ', type: 'plain' },
  { text: 'glass bottle on marble', type: 'subject' },
  { text: ', ', type: 'plain' },
  { text: 'soft pink and gold tones', type: 'style' },
  { text: ', ', type: 'plain' },
  { text: 'studio lighting', type: 'subject' },
  { text: ', ', type: 'plain' },
  { text: 'product photography', type: 'subject' },
  { text: ', ', type: 'plain' },
  { text: 'ultra detailed', type: 'style' },
  { text: ' ', type: 'plain' },
  { text: '--ar 1:1', type: 'param' },
  { text: ' ', type: 'plain' },
  { text: '--v 6', type: 'param' },
  { text: ' ', type: 'plain' },
  { text: '--style raw', type: 'param' },
]

const fullPrompt = promptParts.map(p => p.text).join('')

const pills = [
  { label: 'Midjourney', delay: 300 },
  { label: 'UGC Script', delay: 500 },
  { label: 'AI Video', delay: 700 },
]

const colorMap: Record<string, string> = {
  subject: '#00e5be',
  style: '#d4a3ff',
  param: '#7dc7ff',
  plain: '#7985b0',
}

export default function SpyModeDemo({ isActive }: { isActive: boolean }) {
  const hasPlayed = useRef(false)
  const [started, setStarted] = useState(false)
  const [charIndex, setCharIndex] = useState(0)
  const [typingDone, setTypingDone] = useState(false)

  useEffect(() => {
    if (isActive && !hasPlayed.current) {
      hasPlayed.current = true
      setTimeout(() => setStarted(true), 200)
    }
  }, [isActive])

  useEffect(() => {
    if (!started) return
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        setCharIndex(prev => {
          if (prev >= fullPrompt.length) {
            clearInterval(interval)
            setTypingDone(true)
            return prev
          }
          return prev + 1
        })
      }, 25)
      return () => clearInterval(interval)
    }, 600)
    return () => clearTimeout(delay)
  }, [started])

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
        <span key={i} style={{ color: colorMap[part.type] }}>{visibleText}</span>
      )
      cursor = partEnd
    }
    return elements
  }

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
      <div className="grid grid-cols-[1fr_auto_1fr] gap-0 items-stretch" style={{ minHeight: 240 }}>
        {/* Left — competitor ad */}
        <div className="flex flex-col">
          <span className="text-[9px] font-medium uppercase tracking-wider mb-2.5" style={{ color: '#7985b0' }}>Pub concurrente</span>
          <div
            className="flex-1 rounded-xl overflow-hidden transition-all"
            style={{
              background: '#fff',
              opacity: started ? 1 : 0,
              transform: started ? 'translateX(0)' : 'translateX(-16px)',
              transitionDuration: '600ms',
            }}
          >
            <div className="flex items-center justify-center" style={{ aspectRatio: '1/1', background: 'linear-gradient(135deg, #fdf0f5, #f5e6f0)' }}>
              <div className="relative" style={{ width: 52, height: 110 }}>
                {/* Glow behind */}
                <div className="absolute" style={{ inset: -20, background: 'radial-gradient(ellipse, rgba(0,229,190,0.07) 0%, transparent 70%)', zIndex: -1 }} />
                {/* Sparkles */}
                <div className="absolute" style={{ top: '15%', right: -8, width: 3, height: 3, borderRadius: '50%', background: '#00e5be', opacity: 0.5 }} />
                <div className="absolute" style={{ top: '40%', left: -10, width: 3, height: 3, borderRadius: '50%', background: '#00e5be', opacity: 0.5 }} />
                <div className="absolute" style={{ bottom: '25%', right: -6, width: 3, height: 3, borderRadius: '50%', background: '#00e5be', opacity: 0.5 }} />
                {/* Pump stem */}
                <div className="absolute" style={{ top: -28, left: '50%', transform: 'translateX(-50%)', width: 2, height: 12, background: '#2a2a3e' }} />
                {/* Pump cap */}
                <div className="absolute" style={{ top: -18, left: '50%', transform: 'translateX(-50%)', width: 18, height: 16, background: '#1e1e2e', borderRadius: '4px 4px 2px 2px' }} />
                {/* Bottle body */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    width: 52,
                    height: 110,
                    background: 'linear-gradient(160deg, #f5f2ee 0%, #e8e4df 60%, #d8d4cf 100%)',
                    borderRadius: '12px 12px 6px 6px',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.25), 0 4px 8px rgba(0,0,0,0.1)',
                  }}
                >
                  {/* Glass reflection */}
                  <div className="absolute" style={{ left: 8, top: 12, width: 7, height: '60%', background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)', borderRadius: 4 }} />
                  {/* Label */}
                  <div className="absolute text-center" style={{ bottom: 20, width: '100%' }}>
                    <div style={{ fontSize: 5.5, fontWeight: 800, letterSpacing: 2.5, color: '#2a2a5a' }}>SÉRUM</div>
                    <div style={{ fontSize: 4.5, color: '#7985b0', marginTop: 1 }}>No.01</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2.5 py-2">
              <div className="text-[9px] font-semibold text-gray-700">Radiant skin in 7 days</div>
              <div className="text-[8px] text-gray-400 mt-0.5">Results guaranteed</div>
            </div>
          </div>
        </div>

        {/* Center arrow */}
        <div className="flex items-center justify-center px-4">
          <div
            className="transition-opacity"
            style={{ opacity: started ? 1 : 0, transitionDuration: '500ms', transitionDelay: '300ms' }}
          >
            <div className="text-xl" style={{ color: '#00e5be', animation: started ? 'spy-pulse 2s ease-in-out infinite' : 'none' }}>
              &rarr;
            </div>
          </div>
        </div>

        {/* Right — prompt output */}
        <div className="flex flex-col">
          <span className="text-[9px] font-medium uppercase tracking-wider mb-2.5" style={{ color: '#7985b0' }}>Output</span>
          <div
            className="flex-1 rounded-xl p-3 transition-all"
            style={{
              background: '#080b1a',
              border: '1px solid #1e2758',
              opacity: started ? 1 : 0,
              transform: started ? 'translateX(0)' : 'translateX(16px)',
              transitionDuration: '600ms',
              transitionDelay: '300ms',
            }}
          >
            <div className="font-mono text-[10px] leading-relaxed min-h-[80px]">
              <span style={{ color: '#7985b0' }}>/imagine </span>
              {renderTypedPrompt()}
              {!typingDone && started && (
                <span
                  className="inline-block w-[2px] h-3 ml-0.5 align-middle"
                  style={{ background: '#00e5be', animation: 'spy-blink 1s step-end infinite' }}
                />
              )}
            </div>

            {/* Output pills */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {pills.map((p, i) => (
                <span
                  key={i}
                  className="text-[9px] px-2 py-0.5 rounded-full font-medium transition-all"
                  style={{
                    background: 'rgba(0,229,190,0.08)',
                    color: '#00e5be',
                    border: '1px solid rgba(0,229,190,0.2)',
                    opacity: typingDone ? 1 : 0,
                    transform: typingDone ? 'translateY(0) scale(1)' : 'translateY(4px) scale(0.9)',
                    transitionDuration: '400ms',
                    transitionDelay: `${p.delay}ms`,
                  }}
                >
                  {p.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Studio label */}
      <div className="text-center mt-4">
        <span className="text-[12px] uppercase" style={{ letterSpacing: 2, fontFamily: 'Syne, sans-serif' }}>
          <span className="font-bold" style={{ color: '#00e5be' }}>03</span>
          <span style={{ color: '#7985b0' }}> — SPY MODE · CREATIVE GENERATOR</span>
        </span>
      </div>

      <style>{`
        @keyframes spy-pulse {
          0%, 100% { transform: translateX(0); opacity: 0.5; }
          50% { transform: translateX(5px); opacity: 1; }
        }
        @keyframes spy-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
