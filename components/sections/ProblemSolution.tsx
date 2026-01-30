'use client'

import { ArrowRight } from 'lucide-react'

export default function ProblemSolution() {
  const painPoints = [
    { emoji: '😩', text: 'Vous passez des heures à analyser les pubs concurrentes manuellement' },
    { emoji: '😩', text: 'Vos screenshots de pubs finissent perdus dans des dossiers chaotiques' },
    { emoji: '😩', text: 'Créer des visuels originaux vous prend un temps fou' },
    { emoji: '😩', text: 'Adapter un concept pub à votre produit est un casse-tête' },
    { emoji: '😩', text: 'Impossible de suivre les nouvelles pubs de tous vos concurrents' },
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem */}
          <div>
            <span className="text-accent text-sm font-medium mb-4 block">Le problème</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Créer des pubs qui convertissent, c'est un enfer
            </h2>
            <ul className="space-y-4">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-xl">{point.emoji}</span>
                  <span className="text-gray-400">{point.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-dark-200 border border-dark-400 rounded-2xl p-8 lg:p-10">
            <span className="text-accent text-sm font-medium mb-4 block">La solution</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              FoxAdBox fait le travail pour vous
            </h2>

            {/* Visual Schema */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
              <div className="bg-dark-300 border border-dark-400 rounded-xl p-4 text-center flex-1 w-full">
                <span className="text-2xl mb-2 block">🎯</span>
                <span className="text-gray-300 text-sm">Pub concurrente</span>
              </div>

              <ArrowRight className="text-accent rotate-90 md:rotate-0 flex-shrink-0" size={24} />

              <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 text-center flex-1 w-full">
                <span className="text-2xl mb-2 block">🦊</span>
                <span className="text-accent text-sm font-medium">FoxAdBox</span>
              </div>

              <ArrowRight className="text-accent rotate-90 md:rotate-0 flex-shrink-0" size={24} />

              <div className="bg-dark-300 border border-dark-400 rounded-xl p-4 text-center flex-1 w-full">
                <span className="text-2xl mb-2 block">🚀</span>
                <span className="text-gray-300 text-sm">Votre pub adaptée</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
