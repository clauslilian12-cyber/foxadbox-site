'use client'

import { motion } from 'framer-motion'
import { DollarSign, ShoppingCart, Video, Sparkles } from 'lucide-react'

const cards = [
  {
    icon: DollarSign,
    title: 'Media Buyers',
    description:
      'Stop wasting budget on untested creatives. Understand what\'s working in your niche before you spend a single dollar.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce & Dropshipping',
    description:
      'Find the ads that are actually selling products right now. Adapt the strategy to your store in minutes, not days.',
  },
  {
    icon: Video,
    title: 'UGC Creators & Agencies',
    description:
      'Deliver better briefs, faster. Generate complete scripts and creative directions tailored to each client\'s product.',
  },
  {
    icon: Sparkles,
    title: 'AI Content Creators',
    description:
      'Turn competitor ads into Midjourney prompts and AI video prompts. Create scroll-stopping content that\'s already proven to work.',
  },
]

export default function ValueProposition() {
  return (
    <section className="py-24 bg-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Built for the People Who Make Ads Work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-8 hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <card.icon size={24} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{card.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
