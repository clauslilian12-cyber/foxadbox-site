'use client'

import { useRef, useEffect, useState } from 'react'

const navIcons = ['🖼️', '🎬', '🕵️', '📚', '🎯']

export default function PhotoStudioDemo() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [scoreWidth, setScoreWidth] = useState(0)

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
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setScoreWidth(prev => {
          if (prev >= 60) { clearInterval(interval); return 60 }
          return prev + 1
        })
      }, 15)
      return () => clearInterval(interval)
    }, 700)
    return () => clearTimeout(timer)
  }, [visible])

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.98)',
      }}
    >
      {/* Chrome Shell */}
      <div className="rounded-2xl overflow-hidden relative" style={{ height: 480, background: '#080b1a', border: '1px solid #1e2758' }}>
        {/* Cyan glow top */}
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #00e5be, transparent)' }} />

        {/* Chrome bar */}
        <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: '#10142e' }}>
          <div className="flex gap-1.5">
            <div className="w-[10px] h-[10px] rounded-full" style={{ background: '#ff5f57' }} />
            <div className="w-[10px] h-[10px] rounded-full" style={{ background: '#febc2e' }} />
            <div className="w-[10px] h-[10px] rounded-full" style={{ background: '#28c840' }} />
          </div>
          <div className="flex-1 mx-4 px-3 py-1 rounded-md text-[10px] text-center" style={{ background: '#080b1a', color: '#7985b0' }}>
            chrome-extension://foxadbox/studio-photo
          </div>
        </div>

        {/* Extension layout */}
        <div className="flex" style={{ height: 'calc(100% - 38px)' }}>
          {/* Sidebar */}
          <div className="flex flex-col items-center py-3 gap-1" style={{ width: 54, background: '#1a2257' }}>
            <div className="text-lg mb-3">🦊</div>
            {navIcons.map((icon, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-sm cursor-default"
                style={{
                  background: i === 0 ? 'rgba(0,228,190,0.15)' : 'transparent',
                  border: i === 0 ? '1px solid rgba(0,228,190,0.3)' : '1px solid transparent',
                }}
              >
                {icon}
              </div>
            ))}
            <div className="mt-auto text-sm">⚙️</div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col overflow-hidden" style={{ background: '#f5f7ff' }}>
            {/* Topbar */}
            <div className="flex items-center justify-between px-4 py-2" style={{ borderBottom: '1px solid #e2e6f3' }}>
              <span className="text-[11px] font-bold" style={{ color: '#1a2257', fontFamily: 'Syne, sans-serif' }}>FoxAdBox</span>
              <span className="text-[9px] px-2 py-0.5 rounded-full" style={{ background: 'rgba(0,212,180,0.1)', color: '#00d4b4', border: '1px solid rgba(0,212,180,0.2)' }}>✨ Gratuit</span>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3" style={{ scrollbarWidth: 'none' }}>
              {/* Header */}
              <div>
                <div className="text-sm font-bold" style={{ color: '#1a2257', fontFamily: 'Syne, sans-serif' }}>🖼️ Studio Photo</div>
                <div className="text-[10px] mt-0.5" style={{ color: '#7985b0' }}>Analyse les images publicitaires</div>
              </div>

              {/* New analysis button */}
              <button className="w-full py-1.5 rounded-lg text-[10px] font-semibold text-white" style={{ background: '#1a2257' }}>
                🔄 Nouvelle analyse
              </button>

              {/* Ad card */}
              <div className="rounded-lg overflow-hidden" style={{ border: '1px solid #e2e6f3' }}>
                <div className="flex items-center justify-center" style={{ height: 90, background: 'linear-gradient(135deg, #1a2257, #2a3377)' }}>
                  <div className="text-center">
                    <div className="text-2xl mb-1">💋</div>
                    <div className="text-[9px] font-bold text-white tracking-wider opacity-80">SÉRUM</div>
                  </div>
                </div>
                <div className="px-2.5 py-1.5 text-[9px]" style={{ color: '#7985b0', background: '#fff' }}>
                  Analysis — 3/5/2026 07:52 PM
                </div>
              </div>

              {/* Result card */}
              <div
                className="rounded-lg p-3 space-y-2.5 transition-all duration-500"
                style={{
                  background: '#fff',
                  border: '1px solid #e2e6f3',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(12px)',
                  transitionDelay: '300ms',
                }}
              >
                <div>
                  <div className="text-[10px] font-bold" style={{ color: '#dc2626' }}>🎯 VISUAL HOOK</div>
                  <div className="text-[9px] mt-0.5" style={{ color: '#1a2257' }}>Close-up technique creates instant curiosity — viewer can&apos;t scroll past.</div>
                  <div className="text-[8px] mt-0.5" style={{ color: '#7985b0' }}>Emotional trigger: Desire · Curiosity</div>
                  <div className="h-px mt-2" style={{ background: '#dc262630' }} />
                </div>
                <div>
                  <div className="text-[10px] font-bold" style={{ color: '#d97706' }}>💡 VALUE PROPOSITION</div>
                  <div className="text-[9px] mt-0.5" style={{ color: '#1a2257' }}>Promise of visible results within a specific timeframe builds credibility.</div>
                  <div className="text-[8px] mt-0.5" style={{ color: '#7985b0' }}>Persuasion: Specificity · Social proof</div>
                </div>
              </div>

              {/* Score card */}
              <div
                className="rounded-lg p-3 transition-all duration-500"
                style={{
                  background: '#1a2257',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(12px)',
                  transitionDelay: '700ms',
                }}
              >
                <div className="text-[10px] font-semibold text-white mb-1">📊 OVERALL SCORE</div>
                <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>6/10</div>
                <div className="h-2 rounded-full mt-2 overflow-hidden" style={{ background: '#0d1035' }}>
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${scoreWidth}%`,
                      background: 'linear-gradient(90deg, #00d4b4, #8b5cf6)',
                      transitionDelay: '700ms',
                    }}
                  />
                </div>
                <div className="text-[9px] mt-1.5" style={{ color: '#7985b0' }}>Above average — hook is strong but CTA needs work</div>
              </div>

              {/* Verdict card */}
              <div
                className="rounded-lg p-3 transition-all duration-500"
                style={{
                  background: '#00d4b4',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(12px)',
                  transitionDelay: '1100ms',
                }}
              >
                <div className="text-[10px] font-bold text-white">⭐ FINAL VERDICT</div>
                <div className="text-[9px] mt-1 font-medium" style={{ color: '#0a2520' }}>Decent but needs optimization.</div>
              </div>

              {/* Action buttons */}
              <div
                className="grid grid-cols-2 gap-2 transition-all duration-500"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(12px)',
                  transitionDelay: '1400ms',
                }}
              >
                <button className="py-1.5 rounded-lg text-[9px] font-semibold text-white" style={{ background: '#1a2257' }}>
                  💾 Sauvegarder
                </button>
                <button className="py-1.5 rounded-lg text-[9px] font-semibold" style={{ color: '#1a2257', border: '1px solid #e2e6f3', background: '#fff' }}>
                  📋 Copier l&apos;analyse
                </button>
                <button className="py-1.5 rounded-lg text-[9px] font-semibold text-white col-span-2" style={{ background: '#00d4b4' }}>
                  📤 Export Notion
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
