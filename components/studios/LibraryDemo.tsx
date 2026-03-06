'use client'

import { useRef, useEffect, useState } from 'react'

const rows = [
  {
    thumb: 'linear-gradient(135deg, #fce4ec, #f3e5f5)',
    name: 'Glow Serum',
    type: 'Photo',
    hook: 'Curiosity close-up',
    score: '8/10',
    date: '04/03',
    delay: 800,
  },
  {
    thumb: 'linear-gradient(135deg, #1a1a2e, #16213e)',
    name: 'FitPulse App',
    type: 'Video',
    hook: 'Before/After',
    score: '9/10',
    date: '28/02',
    delay: 1300,
  },
  {
    thumb: 'linear-gradient(135deg, #fef3c7, #fde68a)',
    name: 'StyleBox Look',
    type: 'Photo',
    hook: 'Product contrast',
    score: '7/10',
    date: '06/02',
    delay: 1800,
  },
]

const columns = ['Ad', 'Type', 'Hook', 'Score', 'Date']

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
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="rounded-xl overflow-hidden border border-dark-400" style={{ background: '#ffffff' }}>
      <div className="flex">
        {/* Notion sidebar */}
        <div className="w-[140px] shrink-0 border-r py-4 px-3" style={{ background: '#f7f6f3', borderColor: '#e8e5e0' }}>
          <div className="flex items-center gap-1.5 mb-4">
            <div className="w-5 h-5 rounded flex items-center justify-center text-[10px]" style={{ background: '#e8e5e0' }}>
              📋
            </div>
            <span className="text-[11px] font-semibold text-gray-700">Ad Library</span>
          </div>
          <div className="space-y-1">
            {['All analyses', 'Favorites', 'Skincare', 'Fitness'].map((item, i) => (
              <div
                key={i}
                className="px-2 py-1 rounded text-[10px] text-gray-500 transition-all duration-300"
                style={{
                  background: i === 0 ? '#e8e5e0' : 'transparent',
                  color: i === 0 ? '#37352f' : '#9b9a97',
                  fontWeight: i === 0 ? 600 : 400,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Notion content */}
        <div className="flex-1 p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-bold text-gray-800">All analyses</h4>
            <div
              className="flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-medium transition-all duration-700"
              style={{
                background: 'rgba(0,245,212,0.08)',
                color: '#00a98f',
                border: '1px solid rgba(0,245,212,0.2)',
                opacity: visible ? 1 : 0,
                transitionDelay: '500ms',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#00F5D4' }} />
              Synced via FoxAdBox
            </div>
          </div>

          {/* Table header */}
          <div className="grid grid-cols-[1fr_60px_100px_50px_50px] gap-2 px-2 py-1.5 border-b" style={{ borderColor: '#e8e5e0' }}>
            {columns.map((col, i) => (
              <span key={i} className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">{col}</span>
            ))}
          </div>

          {/* Table rows */}
          <div>
            {rows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_60px_100px_50px_50px] gap-2 items-center px-2 py-2 border-b transition-all duration-600"
                style={{
                  borderColor: '#f0efec',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(12px)',
                  transitionDelay: `${row.delay}ms`,
                }}
              >
                {/* Thumbnail + name */}
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 rounded flex-shrink-0"
                    style={{ background: row.thumb }}
                  />
                  <span className="text-[11px] font-medium text-gray-700 truncate">{row.name}</span>
                </div>
                {/* Type */}
                <span
                  className="text-[10px] px-1.5 py-0.5 rounded font-medium text-center"
                  style={{
                    background: row.type === 'Video' ? '#ede9fe' : '#dbeafe',
                    color: row.type === 'Video' ? '#7c3aed' : '#2563eb',
                  }}
                >
                  {row.type}
                </span>
                {/* Hook */}
                <span className="text-[10px] text-gray-600">{row.hook}</span>
                {/* Score */}
                <span className="text-[10px] font-semibold" style={{ color: parseInt(row.score) >= 8 ? '#059669' : '#d97706' }}>
                  {row.score}
                </span>
                {/* Date */}
                <span className="text-[10px] text-gray-400">{row.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
