'use client'

import { motion } from 'framer-motion'

const metrics = [
  {
    value: '90 sec',
    label: 'De n\u2019importe quelle pub à un prompt Midjourney prêt à l\u2019emploi',
  },
  {
    value: '2 min',
    label: 'Analyse complète image par image d\u2019une pub vidéo',
  },
  {
    value: '30 sec',
    label: 'Script UGC complet généré pour n\u2019importe quel produit',
  },
  {
    value: '-80%',
    label: 'De temps de recherche créative en moins, selon nos utilisateurs',
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
            RÉSULTATS CONCRETS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
          >
            Arrêtez de passer des heures sur ce que FoxAdBox fait en quelques secondes
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
