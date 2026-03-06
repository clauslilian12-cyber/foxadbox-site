'use client'

import { motion } from 'framer-motion'

const platforms = [
  { emoji: '\u{1F4D8}', name: 'Facebook Ads' },
  { emoji: '\u{1F4F8}', name: 'Instagram' },
  { emoji: '\u{1F3B5}', name: 'TikTok' },
  { emoji: '\u25B6\uFE0F', name: 'YouTube' },
  { emoji: '\u{1F4BC}', name: 'LinkedIn' },
  { emoji: '\u{1F310}', name: 'Any Website' },
]

export default function Platforms() {
  return (
    <section style={{ background: '#0d0e1a' }} className="py-16">
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
          style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}
        >
          Works on every platform you already use
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {platforms.map((platform, index) => (
            <span
              key={index}
              style={{
                background: 'rgba(42,45,100,0.4)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '999px',
                padding: '10px 20px',
                fontSize: '14px',
                fontWeight: 600,
              }}
              className="text-white inline-flex items-center gap-2"
            >
              <span>{platform.emoji}</span>
              {platform.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
