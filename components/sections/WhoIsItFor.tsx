'use client'

import { motion } from 'framer-motion'

const audiences = [
  {
    emoji: '\u{1F4CA}',
    title: 'Media Buyers & Performance Marketers',
    description:
      'Stop burning budget on untested creatives. Understand exactly what\u2019s working in your niche \u2014 hooks, formats, angles \u2014 before you spend a single dollar on testing.',
    tag: 'Save $1,000s in testing costs',
  },
  {
    emoji: '\u{1F6CD}\uFE0F',
    title: 'E-commerce & Dropshipping',
    description:
      'Find the ads that are actively selling products right now. Reverse-engineer the exact creative strategy and adapt it to your store in minutes, not weeks.',
    tag: 'Find winning products faster',
  },
  {
    emoji: '\u{1F3AC}',
    title: 'UGC Creators & Creative Agencies',
    description:
      'Deliver better briefs, faster. Generate complete shot-by-shot UGC scripts and creative directions tailored to each client\u2019s product \u2014 in seconds.',
    tag: '10x your brief production speed',
  },
  {
    emoji: '\u{1F916}',
    title: 'AI Content Creators',
    description:
      'Turn any competitor ad into Midjourney prompts and AI video prompts instantly. Create scroll-stopping visuals that are already proven to convert.',
    tag: 'Proven prompts, zero guesswork',
  },
]

export default function WhoIsItFor() {
  return (
    <section style={{ background: '#0d0e1a' }} className="py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              color: '#00F5D4',
              fontSize: '12px',
              letterSpacing: '3px',
              fontWeight: 600,
            }}
            className="block mb-6 uppercase"
          >
            BUILT FOR
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            The Tool for Everyone Who Lives and Breathes Ads
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Whether you&apos;re a solo freelancer or running a full agency,
            FoxAdBox gives you the competitive intelligence and creative output
            to move faster than everyone else.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              style={{
                background: 'rgba(42,45,100,0.35)',
                border: '1px solid rgba(0,245,212,0.12)',
                borderRadius: '20px',
                padding: '32px',
              }}
            >
              <span className="text-3xl block mb-4">{audience.emoji}</span>
              <h3 className="text-white font-bold text-xl mb-3">
                {audience.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {audience.description}
              </p>
              <span
                style={{
                  background: 'rgba(0,245,212,0.1)',
                  color: '#00F5D4',
                  borderRadius: '999px',
                  padding: '4px 12px',
                  fontSize: '12px',
                  fontWeight: 600,
                  display: 'inline-block',
                }}
              >
                {audience.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
