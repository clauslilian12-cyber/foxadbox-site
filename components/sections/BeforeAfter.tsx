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
            Arrêtez de deviner. Commencez à savoir.
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
              Avant...
            </div>
            <div className="card p-8 border-red-500/20 bg-dark-200/50 h-full">
              <ul className="space-y-4">
                {[
                  'Scroller pendant des heures sans stratégie claire',
                  'Voir une super pub sans comprendre POURQUOI elle marche',
                  'Gaspiller du budget sur des concepts qui ne convertissent jamais',
                  'Créer du contenu déconnecté de ce qui se vend vraiment',
                  'Laisser vos concurrents tout comprendre avant vous',
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
              Avec FoxAdBox
            </div>
            <div className="card p-8 border-accent/30 bg-dark-200/50 h-full">
              <ul className="space-y-4">
                {[
                  'Capturez n\u2019importe quelle pub en 1 clic — sur n\u2019importe quel site',
                  'Obtenez une analyse IA complète des hooks, émotions et déclencheurs de conversion',
                  'Comprenez exactement ce qui fait performer chaque pub',
                  'Adaptez la stratégie à votre produit en quelques secondes',
                  'Générez des prompts Midjourney, des prompts vidéo IA et des scripts UGC prêts à l\u2019emploi',
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
