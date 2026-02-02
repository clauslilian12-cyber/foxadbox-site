'use client'

import { motion } from 'framer-motion'
import VideoPlayer from '@/components/ui/VideoPlayer'

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
          <VideoPlayer
            videoSrc="/videos/full-demo.mp4"
            thumbnailSrc="/thumbnails/full-demo-thumb.jpg"
            alt="Demo complete FoxAdBox"
            loop={false}
            showControls={true}
            className="border border-dark-300"
          />

          {/* Caption */}
          <p className="text-center text-gray-500 text-sm mt-6">
            Installation en 30 secondes - Aucune configuration requise
          </p>
        </motion.div>
      </div>
    </section>
  )
}
