'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '+1,500', label: 'Pubs analysees cette semaine' },
  { value: '+200', label: 'Nouveaux utilisateurs ce mois' },
]

const badges = [
  'Media Buyers',
  'E-commerce',
  'Agences',
  'UGC Creators',
  'Dropshippers',
  'Freelances',
]

export default function SocialProof() {
  return (
    <section className="py-12 border-y border-dark-300 bg-dark-100/50">
      <div className="container-custom">
        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-12 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Badges row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-3"
        >
          <span className="text-gray-500 text-sm mr-2">Utilise par les professionnels du marketing digital :</span>
          {badges.map((badge, index) => (
            <span
              key={index}
              className="px-4 py-1.5 bg-dark-200 border border-dark-300 rounded-full text-sm text-gray-300 hover:border-accent/30 transition-colors"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
