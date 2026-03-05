'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "I used to spend 2 hours a day on Ad Library. Now I generate full creative briefs in under 10 minutes. FoxAdBox completely changed how I work.",
    name: "Thomas R.",
    role: "Freelance Media Buyer",
    avatar: "TR",
  },
  {
    quote: "Spy Mode is insane. I describe my product, and I get a perfect Midjourney prompt in 30 seconds. My creatives have never performed this well.",
    name: "Julie M.",
    role: "E-commerce Founder",
    avatar: "JM",
  },
  {
    quote: "We track all our clients' competitors with Ad Tracker. The Notion export transformed our agency workflow. It's non-negotiable now.",
    name: "Kevin L.",
    role: "Marketing Agency CEO",
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
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            They turned competitive intelligence into results
          </h2>
          <p className="text-gray-400 text-lg">
            Join the marketers saving hours every day
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
