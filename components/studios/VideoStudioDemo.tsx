'use client'

import { useRef, useEffect, useState } from 'react'

const navIcons = ['🖼️', '🎬', '🕵️', '📚', '🎯']

export default function VideoStudioDemo() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [vprog, setVprog] = useState(0)
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
    const interval = setInterval(() => {
      setVprog(prev => {
        if (prev >= 65) { clearInterval(interval); return 65 }
        return prev + 0.5
      })
    }, 10)
    return () => clearInterval(interval)
  }, [visible])

  useEffect(() => {
    if (!visible) return
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setScoreWidth(prev => {
          if (prev >= 80) { clearInterval(interval); return 80 }
          return prev + 1
        })
      }, 12)
      return () => clearInterval(interval)
    }, 900)
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
            chrome-extension://foxadbox/studio-media
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
                  background: i === 1 ? 'rgba(0,228,190,0.15)' : 'transparent',
                  border: i === 1 ? '1px solid rgba(0,228,190,0.3)' : '1px solid transparent',
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

            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3" style={{ scrollbarWidth: 'none' }}>
              <div>
                <div className="text-sm font-bold" style={{ color: '#1a2257', fontFamily: 'Syne, sans-serif' }}>🎬 Studio Media</div>
                <div className="text-[10px] mt-0.5" style={{ color: '#7985b0' }}>Analyse tes images et vidéos publicitaires</div>
              </div>

              <button className="w-full py-1.5 rounded-lg text-[10px] font-semibold text-white" style={{ background: '#1a2257' }}>
                🔄 Nouvelle analyse
              </button>

              {/* Video card */}
              <div className="rounded-lg overflow-hidden" style={{ border: '1px solid #e2e6f3' }}>
                <div className="relative flex items-center justify-center" style={{ height: 80, background: 'linear-gradient(135deg, #1a2257, #2a3377)' }}>
                  <div className="absolute right-3 top-3 text-xl">🌸</div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.2)' }}>
                    <div className="w-0 h-0 ml-0.5" style={{ borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '8px solid white' }} />
                  </div>
                </div>
                <div className="px-2.5 py-1.5" style={{ background: '#fff' }}>
                  <div className="h-1.5 rounded-full overflow-hidden mb-1" style={{ background: '#e2e6f3' }}>
                    <div className="h-full rounded-full" style={{ width: `${vprog}%`, background: 'linear-gradient(90deg, #00d4b4, #8b5cf6)', transition: 'width 0.05s linear' }} />
                  </div>
                  <div className="text-[9px]" style={{ color: '#7985b0' }}>📹 Vidéo uploadée — 06/03/2026</div>
                </div>
              </div>

              {/* Video result card */}
              <div
                className="rounded-lg p-3 space-y-2 transition-all duration-500"
                style={{
                  background: '#fff',
                  border: '1px solid #e2e6f3',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(12px)',
                  transitionDelay: '400ms',
                }}
              >
                <div>
                  <div className="text-[10px] font-bold" style={{ color: '#1a2257' }}>🎯 Hook d&apos;ouverture</div>
                  <div className="text-[9px] mt-0.5" style={{ color: '#4a5578' }}>Pattern interrupt visuel dans les 1.5 premières secondes — capte l&apos;attention immédiatement.</div>
                </div>
                <div className="h-px" style={{ background: '#e2e6f3' }} />
                <div>
                  <div className="text-[10px] font-bold" style={{ color: '#1a2257' }}>📖 Structure narrative</div>
                  <div className="text-[9px] mt-0.5" style={{ color: '#4a5578' }}>Storytelling before/after classique avec montée émotionnelle progressive.</div>
                </div>
                <div className="h-px" style={{ background: '#e2e6f3' }} />
                <div>
                  <div className="text-[10px] font-bold" style={{ color: '#1a2257' }}>👥 Cible identifiée</div>
                  <div className="text-[9px] mt-0.5" style={{ color: '#4a5578' }}>Femmes 25-35, intérêt skincare premium, sensible au social proof.</div>
                </div>
              </div>

              {/* Score card */}
              <div
                className="rounded-lg p-3 transition-all duration-500"
                style={{
                  background: '#1a2257',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(12px)',
                  transitionDelay: '900ms',
                }}
              >
                <div className="text-[10px] font-semibold text-white mb-1">📊 Score Global</div>
                <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>8/10</div>
                <div className="h-2 rounded-full mt-2 overflow-hidden" style={{ background: '#0d1035' }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${scoreWidth}%`,
                      background: 'linear-gradient(90deg, #00d4b4, #8b5cf6)',
                      transition: 'width 0.05s linear',
                    }}
                  />
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {['✅ Hook efficace', '✅ Storytelling fort', '⚠️ Réduire la durée'].map((chip, i) => (
                    <span
                      key={i}
                      className="text-[8px] px-1.5 py-0.5 rounded-full"
                      style={{
                        background: chip.startsWith('✅') ? 'rgba(34,197,94,0.15)' : 'rgba(245,158,11,0.15)',
                        color: chip.startsWith('✅') ? '#22c55e' : '#f59e0b',
                      }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
