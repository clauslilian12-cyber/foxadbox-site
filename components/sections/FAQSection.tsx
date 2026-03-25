'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqItems: FAQItem[] = [
    {
      question: 'Est-ce que je peux résilier à tout moment ?',
      answer: 'Oui, sans engagement. Résiliez en un clic depuis votre dashboard. Vous gardez l\u2019accès jusqu\u2019à la fin de votre période de facturation.',
    },
    {
      question: 'Quels types de pubs FoxAdBox peut analyser ?',
      answer: 'N\u2019importe quelle pub photo ou vidéo visible sur n\u2019importe quel site — Facebook, Instagram, TikTok, YouTube, landing pages, etc. Si vous la voyez dans votre navigateur, FoxAdBox peut l\u2019analyser.',
    },
    {
      question: 'Est-ce que ça génère des prompts pour Midjourney ou Runway ?',
      answer: 'Oui. Le mode Spy génère des prompts Midjourney pour la création d\u2019images, des prompts vidéo IA adaptés plan par plan, et des scripts UGC complets — le tout adapté à votre produit.',
    },
    {
      question: 'Mes données sont-elles sécurisées ?',
      answer: 'Absolument. Vos données sont chiffrées, hébergées en Europe et conformes au RGPD. Nous n\u2019accédons jamais à vos mots de passe ni à votre historique de navigation.',
    },
    {
      question: 'Quels navigateurs sont compatibles ?',
      answer: 'Actuellement Google Chrome (desktop). Le support Firefox et Edge arrive bientôt.',
    },
    {
      question: 'Est-ce légal d\u2019analyser les pubs des concurrents ?',
      answer: 'Oui. FoxAdBox analyse uniquement des pubs visibles publiquement — c\u2019est comme prendre des notes sur une pub que vous voyez, mais de manière automatisée et alimentée par l\u2019IA.',
    },
  ]

  return (
    <section id="faq" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-medium mb-4 block tracking-wider uppercase">FAQ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Questions fréquentes
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur FoxAdBox.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="card cursor-pointer transition-all duration-200 hover:border-dark-500"
              onClick={() => toggle(index)}
            >
              <div className="flex items-center justify-between gap-4">
                <h4 className="text-white font-medium pr-4">{item.question}</h4>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-gray-500 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-400 text-sm leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
