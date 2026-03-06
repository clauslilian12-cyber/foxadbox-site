'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Capture Any Ad',
    description:
      'See an ad that catches your eye — on Facebook, TikTok, Instagram, YouTube, or any website. Click once to capture it with FoxAdBox.',
  },
  {
    number: '02',
    title: 'AI Decodes Everything',
    description:
      'FoxAdBox analyzes the hook structure, emotional triggers, persuasion techniques, target audience, and every creative decision that makes the ad convert.',
  },
  {
    number: '03',
    title: 'Get Your Creative Assets',
    description:
      'Receive a Midjourney prompt, an AI video prompt, a complete UGC script, and a full creative brief — all adapted to YOUR product and brand.',
  },
]

export default function HowItWorks() {
  return (
    <section
      style={{ background: 'rgba(42,45,100,0.15)' }}
      className="py-24"
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
            HOW IT WORKS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            From Any Ad to Ready-to-Use Creative — in Under 2 Minutes
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            No learning curve. No complex setup. Just install, capture, and let
            the AI do the work.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {steps.map((step, index) => (
            <div key={index} className="flex items-stretch gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * index }}
                className="flex-1"
                style={{
                  background: 'rgba(42,45,100,0.4)',
                  border: '1px solid rgba(0,245,212,0.15)',
                  borderRadius: '16px',
                  padding: '32px',
                }}
              >
                <span
                  style={{
                    fontSize: '48px',
                    fontWeight: 800,
                    color: '#00F5D4',
                    opacity: 0.3,
                    lineHeight: 1,
                  }}
                  className="block mb-4"
                >
                  {step.number}
                </span>
                <h3 className="text-white font-bold text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>

              {/* Arrow between steps — desktop only */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center text-accent/30 text-2xl font-bold select-none">
                  &rarr;
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
