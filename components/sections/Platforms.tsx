'use client'

import { motion } from 'framer-motion'

const platforms = [
  { name: 'Facebook Ads' },
  { name: 'Instagram' },
  { name: 'TikTok' },
  { name: 'YouTube' },
  { name: 'LinkedIn' },
  { name: 'Any Website' },
]

export default function Platforms() {
  return (
    <section style={{ background: '#0d0f2a' }} className="py-16">
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
              className="text-white"
            >
              {platform.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
