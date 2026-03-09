'use client'

import { useRef, useEffect, useState } from 'react'

const rows = [
  {
    thumbBg: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
    type: 'Photo',
    typeColor: '#2563eb',
    typeBg: '#dbeafe',
    hook: 'Curiosity close-up',
    score: '8/10',
    scoreColor: '#059669',
    delay: 500,
  },
  {
    thumbBg: 'linear-gradient(135deg, #1e293b, #334155)',
    type: 'Video',
    typeColor: '#7c3aed',
    typeBg: '#ede9fe',
    hook: 'Before / After',
    score: '9/10',
    scoreColor: '#059669',
    delay: 800,
  },
  {
    thumbBg: 'linear-gradient(135deg, #ec4899, #f472b6)',
    type: 'Photo',
    typeColor: '#2563eb',
    typeBg: '#dbeafe',
    hook: 'Product contrast',
    score: '7/10',
    scoreColor: '#d97706',
    delay: 1100,
  },
]

const columns = ['Pub', 'Type', 'Hook', 'Score']

export default function LibraryDemo({ isActive }: { isActive: boolean }) {
  const hasPlayed = useRef(false)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (isActive && !hasPlayed.current) {
      hasPlayed.current = true
      setTimeout(() => setStarted(true), 200)
    }
  }, [isActive])

  return (
    <div
      className="rounded-[20px] overflow-hidden"
      style={{
        background: '#0d1035',
        border: '1px solid #1e2758',
        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
        padding: '20px',
      }}
    >
      {/* Notion-like card */}
      <div className="rounded-xl overflow-hidden" style={{ background: '#f8f9ff' }}>
        {/* Notion header */}
        <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: '1px solid #e8eaf0' }}>
          <div className="flex items-center gap-2">
            {/* Notion logo simplified */}
            <div className="w-5 h-5 rounded flex items-center justify-center" style={{ background: '#000' }}>
              <span className="text-[9px] font-bold text-white">N</span>
            </div>
            <span className="text-[11px] font-semibold" style={{ color: '#37352f' }}>FoxAdBox — Swipe File</span>
          </div>
          <div
            className="flex items-center gap-1.5 px-2 py-0.5 rounded-full transition-opacity"
            style={{
              background: 'rgba(0,229,190,0.08)',
              border: '1px solid rgba(0,229,190,0.2)',
              opacity: started ? 1 : 0,
              transitionDuration: '600ms',
              transitionDelay: '300ms',
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#00e5be', animation: started ? 'lib-pulse 2s infinite' : 'none' }} />
            <span className="text-[8px] font-medium" style={{ color: '#00a98f' }}>Synced via FoxAdBox</span>
          </div>
        </div>

        {/* Table */}
        <div className="px-4 py-3">
          {/* Header row */}
          <div className="grid grid-cols-[40px_52px_1fr_44px] gap-3 pb-2 mb-1" style={{ borderBottom: '1px solid #e8eaf0' }}>
            {columns.map((col, i) => (
              <span key={i} className="text-[9px] font-semibold uppercase tracking-wider" style={{ color: '#9b9a97' }}>{col}</span>
            ))}
          </div>

          {/* Data rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-[40px_52px_1fr_44px] gap-3 items-center py-2.5 transition-all"
              style={{
                borderBottom: i < rows.length - 1 ? '1px solid #f0efec' : 'none',
                opacity: started ? 1 : 0,
                transform: started ? 'translateY(0)' : 'translateY(10px)',
                transitionDuration: '500ms',
                transitionDelay: `${row.delay}ms`,
              }}
            >
              {/* Thumbnail */}
              <div className="w-8 h-8 rounded" style={{ background: row.thumbBg }} />

              {/* Type badge */}
              <span
                className="text-[9px] px-1.5 py-0.5 rounded font-medium text-center"
                style={{ background: row.typeBg, color: row.typeColor }}
              >
                {row.type}
              </span>

              {/* Hook */}
              <span className="text-[10px]" style={{ color: '#37352f' }}>{row.hook}</span>

              {/* Score */}
              <span className="text-[10px] font-semibold" style={{ color: row.scoreColor }}>{row.score}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Studio label */}
      <div className="text-center mt-4">
        <span className="text-[12px] uppercase" style={{ letterSpacing: 2, fontFamily: 'Syne, sans-serif' }}>
          <span className="font-bold" style={{ color: '#00e5be' }}>04</span>
          <span style={{ color: '#7985b0' }}> — LIBRARY · SWIPE FILE</span>
        </span>
      </div>

      <style>{`
        @keyframes lib-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  )
}
