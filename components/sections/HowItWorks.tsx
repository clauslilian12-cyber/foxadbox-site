'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Capturez n\u2019importe quelle pub',
    description:
      'Une pub vous tape dans l\u2019\u0153il — sur Facebook, TikTok, Instagram, YouTube ou n\u2019importe quel site. Un clic pour la capturer avec FoxAdBox.',
  },
  {
    number: '02',
    title: 'L\u2019IA décortique tout',
    description:
      'FoxAdBox analyse la structure du hook, les déclencheurs émotionnels, les techniques de persuasion, la cible et chaque choix créatif qui fait convertir la pub.',
  },
  {
    number: '03',
    title: 'Récupérez vos assets créatifs',
    description:
      'Recevez un prompt Midjourney, un prompt vidéo IA, un script UGC complet et un brief créatif — le tout adapté à VOTRE produit et VOTRE marque.',
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
            COMMENT ÇA MARCHE
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            De n&apos;importe quelle pub à un créatif prêt à l&apos;emploi — en moins de 2 minutes
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Zéro courbe d&apos;apprentissage. Zéro configuration. Installez, capturez et laissez l&apos;IA faire le travail.
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
