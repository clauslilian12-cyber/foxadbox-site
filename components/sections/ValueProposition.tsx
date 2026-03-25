'use client'

import { motion } from 'framer-motion'
import { DollarSign, ShoppingCart, Video, Sparkles } from 'lucide-react'

const cards = [
  {
    icon: DollarSign,
    title: 'Media Buyers',
    description:
      'Arrêtez de gaspiller du budget sur des créas non testées. Comprenez ce qui marche dans votre niche avant de dépenser un seul euro.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce & Dropshipping',
    description:
      'Trouvez les pubs qui vendent vraiment des produits en ce moment. Adaptez la stratégie à votre boutique en quelques minutes, pas en plusieurs jours.',
  },
  {
    icon: Video,
    title: 'Créateurs UGC & Agences',
    description:
      'Livrez de meilleurs briefs, plus vite. Générez des scripts complets et des directions créatives adaptées au produit de chaque client.',
  },
  {
    icon: Sparkles,
    title: 'Créateurs de contenu IA',
    description:
      'Transformez les pubs concurrentes en prompts Midjourney et prompts vidéo IA. Créez du contenu qui arrête le scroll et dont l\u2019efficacité est déjà prouvée.',
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
            Conçu pour ceux qui font tourner les pubs
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
