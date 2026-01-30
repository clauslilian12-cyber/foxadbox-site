'use client'

import { CheckCircle } from 'lucide-react'

export default function NotionSection() {
  const features = [
    'Export en 1 clic vers votre workspace',
    'Base de données auto-générée',
    'Synchronisation fluide et instantanée',
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-accent text-sm font-medium mb-4 block">Intégration</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Connecté à votre workflow{' '}
              <span className="gradient-text">Notion</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Exportez vos analyses, prompts et scripts directement dans Notion.
              Organisez votre veille concurrentielle comme jamais.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-accent flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mockup Placeholder */}
          <div className="relative">
            <div className="bg-dark-200 border border-dark-400 rounded-2xl p-8">
              <div className="aspect-[4/3] bg-dark-300 rounded-xl flex items-center justify-center border border-dark-400">
                <div className="text-center">
                  <span className="text-5xl mb-4 block">📝</span>
                  <p className="text-gray-500">Screenshot Notion export</p>
                </div>
              </div>
            </div>
            {/* Glow */}
            <div className="absolute inset-0 bg-accent/5 rounded-2xl blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
