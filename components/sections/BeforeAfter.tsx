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
            Votre nouvelle arme secrete
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Fini les devinettes. Place a une methode qui fonctionne.
          </p>
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
              <h3 className="text-xl font-semibold text-white mb-6">
                Le chaos quotidien
              </h3>
              <ul className="space-y-4">
                {[
                  'Publicités dispersées et introuvables',
                  'Scroll interminable sur Facebook, Instagram, TikTok sans methode',
                  'Analyse publicitaire manuelle, longue et inefficace',
                  'Vous voyez ce qui performe, mais impossible de comprendre pourquoi',
                  'Strategies concurrentes difficiles a decrypter et reproduire',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <span className="text-red-400 mt-1">x</span>
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
              <h3 className="text-xl font-semibold text-white mb-6">
                Un workflow qui cartonne
              </h3>
              <ul className="space-y-4">
                {[
                  'Tout organise dans votre Bibliotheque',
                  'Analyses IA en 1 clic',
                  'Prompts & scripts prets a l\'emploi',
                  'Spy Mode pour adapter a votre produit',
                  'Veille concurrentielle simplifiee et centralisee',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-accent mt-1">+</span>
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
