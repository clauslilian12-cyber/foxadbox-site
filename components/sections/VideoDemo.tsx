'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function VideoDemo() {
  return (
    <section className="py-24 bg-dark-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent text-sm font-medium mb-4 block tracking-wider uppercase">
            Demo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Voyez FoxAdBox en action
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            De l'installation a votre premier script adapte : 3 minutes chrono.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Video container - placeholder for now */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-dark-200 border border-dark-300 group cursor-pointer">
            {/* Placeholder gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-dark-300/50" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/30">
                <Play className="w-8 h-8 text-dark fill-current ml-1" />
              </div>
            </div>

            {/* Placeholder text */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-dark/80 backdrop-blur-sm rounded-lg px-4 py-3 border border-dark-300">
                <p className="text-gray-400 text-sm">
                  Video de demonstration - Bientot disponible
                </p>
              </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-accent/30 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-accent/30 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-accent/30 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-accent/30 rounded-br-lg" />
          </div>

          {/* Caption */}
          <p className="text-center text-gray-500 text-sm mt-6">
            Installation en 30 secondes - Aucune configuration requise
          </p>
        </motion.div>
      </div>
    </section>
  )
}
