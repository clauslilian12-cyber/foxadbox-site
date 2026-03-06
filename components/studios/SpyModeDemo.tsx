'use client'

import { useRef, useEffect, useState } from 'react'

const navIcons = ['🖼️', '🎬', '🕵️', '📚', '🎯']

const promptParts = [
  { text: 'A high-end product shot of a ', type: 'plain' },
  { text: '[green and yellow hair care tube]', type: 'keyword' },
  { text: ' named "', type: 'plain' },
  { text: 'Karma', type: 'keyword' },
  { text: '", elegantly held by a model, warm studio lighting, soft bokeh background, ', type: 'plain' },
  { text: '[beauty campaign aesthetic]', type: 'style' },
  { text: ', inspired by close-up lip texture technique, ', type: 'plain' },
  { text: '[--ar 1:1 --style raw --v 6.1]', type: 'param' },
]

const fullPrompt = promptParts.map(p => p.text).join('')

const colorMap: Record<string, string> = {
  keyword: '#00d4b4',
  style: '#d4a3ff',
  param: '#7dc7ff',
  plain: '#c8cfe8',
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
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
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
      }, 22)
      return () => clearInterval(interval)
    }, 1200)
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
        <span key={i} style={{ color: colorMap[part.type] }}>{visibleText}</span>
      )
      cursor = partEnd
    }
    return elements
  }

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
            chrome-extension://foxadbox/spy-mode
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
                  background: i === 2 ? 'rgba(0,228,190,0.15)' : 'transparent',
                  border: i === 2 ? '1px solid rgba(0,228,190,0.3)' : '1px solid transparent',
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

            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2.5" style={{ scrollbarWidth: 'none' }}>
              <div>
                <div className="text-sm font-bold" style={{ color: '#1a2257', fontFamily: 'Syne, sans-serif' }}>🕵️ Spy Mode</div>
                <div className="text-[10px] mt-0.5" style={{ color: '#7985b0' }}>Transforme les analyses en créatifs pour TON produit</div>
              </div>

              {/* Tabs */}
              <div className="grid grid-cols-2 gap-1.5">
                <div className="py-1.5 rounded-lg text-[9px] font-semibold text-white text-center" style={{ background: '#1a2257' }}>
                  🖼️ Photo Remix
                </div>
                <div className="py-1.5 rounded-lg text-[9px] font-semibold text-center" style={{ color: '#7985b0', background: '#fff', border: '1px solid #e2e6f3' }}>
                  🎬 Video Remix
                </div>
              </div>

              <div className="text-[10px] font-bold" style={{ color: '#1a2257' }}>🎨 Générateur de Prompt (Photo Remix)</div>

              {/* Analysis textarea */}
              <div>
                <div className="text-[9px] font-semibold mb-1" style={{ color: '#7985b0' }}>📋 Analyse de la photo concurrente</div>
                <div className="rounded-lg p-2 text-[9px] leading-relaxed" style={{ background: '#fff', border: '1px solid #e2e6f3', color: '#4a5578' }}>
                  Close-up lip/face shot with luxury serum — curiosity hook via texture + immediate result promise.
                </div>
              </div>

              {/* Product textarea */}
              <div>
                <div className="text-[9px] font-semibold mb-1" style={{ color: '#7985b0' }}>🎁 TON produit</div>
                <div className="rounded-lg p-2 text-[9px]" style={{ background: '#fff', border: '1px solid #e2e6f3', color: '#a0a8c0' }}>
                  name = karma, color green and yellow
                </div>
              </div>

              {/* Selects */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="text-[8px] font-semibold mb-0.5" style={{ color: '#7985b0' }}>Style</div>
                  <div className="rounded-lg px-2 py-1.5 text-[9px]" style={{ background: '#fff', border: '1px solid #e2e6f3', color: '#1a2257' }}>
                    Photo produit pro ▾
                  </div>
                </div>
                <div>
                  <div className="text-[8px] font-semibold mb-0.5" style={{ color: '#7985b0' }}>Ratio</div>
                  <div className="rounded-lg px-2 py-1.5 text-[9px]" style={{ background: '#fff', border: '1px solid #e2e6f3', color: '#1a2257' }}>
                    1:1 (Instagram) ▾
                  </div>
                </div>
              </div>

              {/* Generate button */}
              <button className="w-full py-2 rounded-lg text-[10px] font-bold text-white" style={{ background: 'linear-gradient(135deg, #1a2257, #2a3377)' }}>
                ✨ Générer le Prompt Midjourney
              </button>

              {/* Prompt result */}
              <div
                className="rounded-lg overflow-hidden transition-all duration-500"
                style={{
                  background: '#0d1035',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(12px)',
                  transitionDelay: '600ms',
                }}
              >
                <div className="flex items-center justify-between px-3 py-1.5" style={{ borderBottom: '1px solid #1e2758' }}>
                  <span className="text-[9px] font-semibold text-white">🎨 Ton Prompt Midjourney</span>
                  <span className="text-[8px] px-1.5 py-0.5 rounded" style={{ background: 'rgba(0,212,180,0.1)', color: '#00d4b480' }}>📋 Copier</span>
                </div>
                <div className="px-3 py-2 font-mono text-[10px] leading-relaxed min-h-[48px]">
                  <span style={{ color: '#7985b0' }}>/imagine prompt: </span>
                  {renderTypedPrompt()}
                  {!typingDone && visible && (
                    <span
                      className="inline-block w-[2px] h-3 ml-0.5 align-middle"
                      style={{ background: '#00d4b4', animation: 'spy-blink 1s step-end infinite' }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spy-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
