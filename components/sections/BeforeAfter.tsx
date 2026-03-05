'use client'

import { motion } from 'framer-motion'

export default function BeforeAfter() {
  return (
    <section className="py-24 bg-dark-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stop Guessing. Start Knowing.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* BEFORE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-full"
          >
            <div className="absolute -top-4 left-4 bg-red-500/20 text-red-400 px-4 py-1 rounded-full text-sm font-medium z-10">
              Before...
            </div>
            <div className="card p-8 border-red-500/20 bg-dark-200/50 h-full">
              <ul className="space-y-4">
                {[
                  'Scrolling for hours with no clear strategy',
                  'Seeing a great ad but not understanding WHY it works',
                  'Wasting budget testing concepts that never convert',
                  'Creating content disconnected from what actually sells',
                  'Letting competitors figure it all out before you',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <span className="text-red-400 mt-1">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* AFTER */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative h-full"
          >
            <div className="absolute -top-4 left-4 bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-medium z-10">
              With FoxAdBox
            </div>
            <div className="card p-8 border-accent/30 bg-dark-200/50 h-full">
              <ul className="space-y-4">
                {[
                  'Capture any ad in 1 click — on any website',
                  'Get a full AI breakdown of hooks, emotions, and conversion triggers',
                  'Understand exactly what makes each ad perform',
                  'Adapt the strategy to your product in seconds',
                  'Generate ready-to-use Midjourney prompts, AI video prompts & UGC scripts',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-accent mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
