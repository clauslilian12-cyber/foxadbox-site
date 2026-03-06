'use client'

import { motion } from 'framer-motion'

const metrics = [
  {
    value: '90 sec',
    label: 'From any ad to a ready-to-use Midjourney prompt',
  },
  {
    value: '2 min',
    label: 'Full frame-by-frame video ad analysis',
  },
  {
    value: '30 sec',
    label: 'Complete UGC script generated for any product',
  },
  {
    value: '-80%',
    label: 'Reduction in creative research time reported by our users',
  },
]

export default function TimeSavingsMetrics() {
  return (
    <section
      style={{
        background: 'rgba(42,45,100,0.2)',
        borderTop: '1px solid rgba(0,245,212,0.1)',
        borderBottom: '1px solid rgba(0,245,212,0.1)',
      }}
      className="py-20"
    >
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
            REAL RESULTS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
          >
            Stop Spending Hours on What FoxAdBox Does in Seconds
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              style={{
                background: 'rgba(42,45,100,0.3)',
                border: '1px solid rgba(0,245,212,0.1)',
                borderRadius: '16px',
                padding: '32px',
              }}
            >
              <div
                style={{
                  fontSize: '56px',
                  fontWeight: 800,
                  color: '#00F5D4',
                  lineHeight: 1,
                }}
                className="mb-3"
              >
                {metric.value}
              </div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px' }}>
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
