'use client'

import { motion } from 'framer-motion'

export default function Guarantee() {
  return (
    <section className="py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
          style={{
            background: 'rgba(42,45,100,0.3)',
            border: '1px solid rgba(0,245,212,0.2)',
            borderRadius: '20px',
            padding: '40px',
          }}
        >
          <span className="text-5xl block mb-5">{'\u{1F6E1}\uFE0F'}</span>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Garantie satisfait ou remboursé — 14 jours
          </h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            Testez FoxAdBox sans aucun risque. Si vous n&apos;êtes pas 100% satisfait
            dans les 14 premiers jours, on vous rembourse immédiatement — sans
            question, sans condition.
          </p>
          <span
            style={{
              background: 'rgba(0,245,212,0.08)',
              color: 'rgba(255,255,255,0.5)',
              borderRadius: '999px',
              padding: '8px 16px',
              fontSize: '13px',
              display: 'inline-block',
            }}
          >
            Sans question · Remboursement instantané · Zéro risque
          </span>
        </motion.div>
      </div>
    </section>
  )
}
