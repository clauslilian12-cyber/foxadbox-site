'use client'

import { motion } from 'framer-motion'

const painCards = [
  {
    title: 'Des heures de recherche manuelle',
    description:
      'Scroller Ad Library pendant des heures sans méthodologie claire ni résultat concret.',
  },
  {
    title: 'Du budget gaspillé en tests',
    description:
      'Dépenser des milliers d\u2019euros pour tester des créas que vous auriez pu valider en analysant ce qui marche déjà.',
  },
  {
    title: 'Aucun système, aucune scalabilité',
    description:
      'Voir de superbes pubs sans avoir de process reproductible pour en extraire les insights et les appliquer à votre marque.',
  },
]

export default function TheProblem() {
  return (
    <section style={{ background: '#0d0f2a' }} className="py-24">
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
            ÇA VOUS PARLE ?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Vous voyez une pub qui cartonne.
            <br />
            Vous savez qu&apos;elle marche.
            <br />
            Mais vous ne savez pas pourquoi.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Chaque jour, vos concurrents diffusent des pubs qui convertissent. Vous scrollez,
            vous screenshot, vous enregistrez — mais impossible de comprendre
            le hook, l&apos;émotion, la technique exacte qui pousse les gens
            à s&apos;arrêter et à acheter. Et sans cette connaissance, vous ne faites
            que deviner avec votre budget.
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
