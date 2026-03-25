'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "Je passais 2 heures par jour sur Ad Library. Maintenant je génère des briefs créatifs complets en moins de 10 minutes. FoxAdBox a complètement changé ma façon de travailler.",
    name: "Thomas R.",
    role: "Media Buyer freelance",
    avatar: "TR",
  },
  {
    quote: "Le mode Spy est dingue. Je décris mon produit et j\u2019obtiens un prompt Midjourney parfait en 30 secondes. Mes créas n\u2019ont jamais autant performé.",
    name: "Julie M.",
    role: "Fondatrice e-commerce",
    avatar: "JM",
  },
  {
    quote: "On suit tous les concurrents de nos clients avec Ad Tracker. L\u2019export Notion a transformé le workflow de notre agence. C\u2019est devenu indispensable.",
    name: "Kevin L.",
    role: "CEO d\u2019agence marketing",
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
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ils ont transformé la veille concurrentielle en résultats
          </h2>
          <p className="text-gray-400 text-lg">
            Rejoignez les marketeurs qui gagnent des heures chaque jour
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
