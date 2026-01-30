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
      question: 'Puis-je annuler mon abonnement a tout moment ?',
      answer: 'Oui, sans engagement. Annulation en 1 clic depuis votre espace. Vous gardez l\'acces jusqu\'a la fin de votre periode payee.',
    },
    {
      question: 'Mes donnees sont-elles securisees ?',
      answer: 'Absolument. Donnees chiffrees, stockees en Europe, RGPD compliant. Nous n\'avons aucun acces a vos mots de passe ou historique de navigation.',
    },
    {
      question: 'Sur quels navigateurs fonctionne FoxAdBox ?',
      answer: 'Actuellement sur Google Chrome (desktop). Firefox et Edge arrivent bientot.',
    },
    {
      question: 'Que se passe-t-il si j\'atteins ma limite mensuelle ?',
      answer: 'Vous recevez une notification avant. Vous pouvez upgrader votre plan ou attendre le renouvellement mensuel.',
    },
    {
      question: 'L\'integration Notion est-elle obligatoire ?',
      answer: 'Non, c\'est optionnel. Vous pouvez utiliser la Bibliotheque interne sans connecter Notion.',
    },
    {
      question: 'Est-ce legal d\'analyser les pubs de mes concurrents ?',
      answer: 'Oui. FoxAdBox analyse uniquement des publicites diffusees publiquement. C\'est comme prendre des notes sur une pub que vous voyez, mais automatise.',
    },
  ]

  return (
    <section id="faq" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-medium mb-4 block tracking-wider uppercase">FAQ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Questions frequentes
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
