'use client'

import { motion } from 'framer-motion'

const painCards = [
  {
    emoji: '\u{1F624}',
    title: 'Hours of manual research',
    description:
      'Scrolling Ad Library for hours with no clear methodology or actionable output.',
  },
  {
    emoji: '\u{1F4B8}',
    title: 'Budget wasted on testing',
    description:
      'Spending thousands testing creatives that you could have validated by analyzing what already works.',
  },
  {
    emoji: '\u{1F937}',
    title: 'No system, no scale',
    description:
      'Seeing great ads but having no repeatable process to extract insights and apply them to your own brand.',
  },
]

export default function TheProblem() {
  return (
    <section style={{ background: '#0d0e1a' }} className="py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
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
            SOUND FAMILIAR?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            You See a Winning Ad.
            <br />
            You Know It Works.
            <br />
            But You Have No Idea Why.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Every day, your competitors are running ads that convert. You scroll
            past them, screenshot them, save them — but you still can&apos;t
            figure out the hook, the emotion, the exact technique that makes
            people stop and buy. And without that knowledge, you&apos;re just
            guessing with your budget.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {painCards.map((card, index) => (
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
                padding: '28px',
              }}
            >
              <span className="text-3xl block mb-4">{card.emoji}</span>
              <h3 className="text-white font-semibold text-lg mb-2">
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
