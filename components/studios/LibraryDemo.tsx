'use client'

import { useRef, useEffect, useState } from 'react'

const navIcons = ['🖼️', '🎬', '🕵️', '📚', '🎯']

const items = [
  {
    thumb: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
    emoji: '💊',
    badge: '🖼️ Photo',
    badgeColor: '#2563eb',
    badgeBg: '#dbeafe',
    title: 'Analysis — 3/4/2026 08:00 PM',
    preview: 'Close-up curiosity hook with luxury serum — immediate result...',
    date: '04/03',
    delay: 600,
  },
  {
    thumb: 'linear-gradient(135deg, #1a2257, #2a3377)',
    emoji: '🎬',
    badge: '🎬 Vidéo',
    badgeColor: '#7c3aed',
    badgeBg: '#ede9fe',
    title: 'Vidéo uploadée — 28/02/2026',
    preview: 'Before/after storytelling with emotional peak at 40% mark...',
    date: '28/02',
    delay: 820,
  },
  {
    thumb: 'linear-gradient(135deg, #ec4899, #f472b6)',
    emoji: '💄',
    badge: '🖼️ Photo',
    badgeColor: '#2563eb',
    badgeBg: '#dbeafe',
    title: 'Analyse — 06/02/2026 13:54',
    preview: 'Product contrast technique with bold color opposition...',
    date: '06/02',
    delay: 1040,
  },
]

export default function LibraryDemo() {
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
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

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
            chrome-extension://foxadbox/library
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
                  background: i === 3 ? 'rgba(0,228,190,0.15)' : 'transparent',
                  border: i === 3 ? '1px solid rgba(0,228,190,0.3)' : '1px solid transparent',
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
                <div className="text-sm font-bold" style={{ color: '#1a2257', fontFamily: 'Syne, sans-serif' }}>📚 Bibliothèque</div>
                <div className="text-[10px] mt-0.5" style={{ color: '#7985b0' }}>13 analyses sauvegardées</div>
              </div>

              {/* Search */}
              <div className="rounded-lg px-3 py-1.5 text-[10px] flex items-center gap-2" style={{ background: '#fff', border: '1px solid #e2e6f3', color: '#a0a8c0' }}>
                🔍 Rechercher...
              </div>

              {/* Filters row 1 */}
              <div className="flex gap-1.5">
                <span className="text-[9px] px-2.5 py-1 rounded-full font-semibold text-white" style={{ background: '#1a2257' }}>📁 Tout</span>
                <span className="text-[9px] px-2.5 py-1 rounded-full" style={{ color: '#7985b0', border: '1px solid #e2e6f3', background: '#fff' }}>🖼️ Photos</span>
                <span className="text-[9px] px-2.5 py-1 rounded-full" style={{ color: '#7985b0', border: '1px solid #e2e6f3', background: '#fff' }}>🎬 Vidéos</span>
              </div>

              {/* Filters row 2 */}
              <div className="flex gap-1.5">
                <span className="text-[9px] px-2 py-0.5 rounded-full" style={{ color: '#7985b0', border: '1px solid #e2e6f3', background: '#fff' }}>Tout</span>
                <span className="text-[9px] px-2 py-0.5 rounded-full font-medium" style={{ color: '#92400e', background: '#fef3c7', border: '1px solid #fde68a' }}>🟡 cosmetics ✕</span>
                <span className="text-[9px] px-2 py-0.5 rounded-full" style={{ color: '#00d4b4', border: '1px dashed rgba(0,212,180,0.4)', background: 'rgba(0,212,180,0.05)' }}>+ Collection</span>
              </div>

              {/* Library items */}
              <div className="space-y-2">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-lg p-2.5 transition-all duration-500"
                    style={{
                      background: '#fff',
                      border: '1px solid #e2e6f3',
                      opacity: visible ? 1 : 0,
                      transform: visible ? 'translateX(0)' : 'translateX(-20px)',
                      transitionDelay: `${item.delay}ms`,
                    }}
                  >
                    <div className="flex gap-2.5">
                      {/* Thumbnail */}
                      <div
                        className="w-11 h-11 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                        style={{ background: item.thumb }}
                      >
                        {item.emoji}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="text-[8px] px-1.5 py-0.5 rounded font-medium" style={{ background: item.badgeBg, color: item.badgeColor }}>{item.badge}</span>
                          <span className="text-[8px]" style={{ color: '#a0a8c0' }}>{item.date}</span>
                        </div>
                        <div className="text-[9px] font-semibold truncate" style={{ color: '#1a2257' }}>{item.title}</div>
                        <div className="text-[8px] truncate mt-0.5" style={{ color: '#7985b0' }}>{item.preview}</div>
                      </div>
                    </div>
                    {/* Actions */}
                    <div className="flex gap-1 mt-2">
                      <span className="text-[8px] px-2 py-0.5 rounded font-medium cursor-default" style={{ background: '#1a2257', color: '#fff' }}>👁️ Voir</span>
                      <span className="text-[8px] px-2 py-0.5 rounded cursor-default" style={{ background: 'rgba(0,212,180,0.08)', color: '#00d4b4' }}>📤 Export Notion</span>
                      <span className="text-[8px] px-2 py-0.5 rounded cursor-default" style={{ background: 'rgba(239,68,68,0.08)', color: '#ef4444' }}>🎯 Ajouter concurrent</span>
                      <span className="text-[8px] px-2 py-0.5 rounded cursor-default ml-auto" style={{ background: 'rgba(239,68,68,0.08)', color: '#ef4444' }}>🗑️</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
