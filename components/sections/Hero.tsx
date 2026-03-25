'use client'

import { motion } from 'framer-motion'
import { Chrome, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-dark-300 border border-dark-400 rounded-full px-4 py-2 mb-8"
          >
            <Chrome size={16} className="text-accent" />
            <span className="text-sm text-gray-300">Extension Chrome — Disponible en bêta</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance"
          >
            Les pubs de vos concurrents disent tout.{' '}
            <span className="gradient-text">Vous écoutez ?</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto text-balance"
          >
            FoxAdBox décortique n&apos;importe quelle pub photo ou vidéo que vous voyez en ligne. Il révèle la psychologie cachée, les secrets créatifs et les techniques exactes qui font convertir — puis adapte tout instantanément à <span className="text-white font-medium">VOTRE</span> produit, <span className="text-white font-medium">VOTRE</span> marque et <span className="text-white font-medium">VOTRE</span> workflow créatif.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="https://chromewebstore.google.com/detail/foxadbox-ai-marketing-ass/oinffmhjjhgihpgpibegdlmelcoohlih"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4 gap-2 animate-glow"
            >
              <Chrome size={20} />
              Installer gratuitement sur Chrome →
            </a>
            <a
              href="#features"
              className="btn-secondary text-base px-8 py-4 gap-2"
            >
              Voir comment ça marche ↓
              <ArrowRight size={18} />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
