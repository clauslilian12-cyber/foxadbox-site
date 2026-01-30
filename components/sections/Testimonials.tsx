'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "Je passais 2h par jour sur Ad Library. Maintenant je genere mes scripts en 10 minutes. FoxAdBox a change ma facon de travailler.",
    name: "Thomas R.",
    role: "Media Buyer Freelance",
    avatar: "TR",
  },
  {
    quote: "Le Spy Mode est incroyable. Je decris mon produit, j'ai un prompt Midjourney parfait en 30 secondes. Mes creas n'ont jamais ete aussi performantes.",
    name: "Julie M.",
    role: "Fondatrice E-commerce",
    avatar: "JM",
  },
  {
    quote: "On track tous nos clients concurrents avec Ad Tracker. L'export Notion a transforme notre workflow d'agence. Indispensable.",
    name: "Kevin L.",
    role: "CEO Agence Marketing",
    avatar: "KL",
  },
]

export default function Testimonials() {
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
          <span className="text-accent text-sm font-medium mb-4 block tracking-wider uppercase">
            Temoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ils ont transforme leur veille en resultats
          </h2>
          <p className="text-gray-400 text-lg">
            Rejoignez les marketers qui gagnent du temps chaque jour
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card p-8 hover:border-accent/30 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="text-accent/30 text-5xl font-serif mb-4">"</div>

              {/* Quote text */}
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-accent font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
