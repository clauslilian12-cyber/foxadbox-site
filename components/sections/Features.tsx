'use client'

import FeatureShowcase from '@/components/FeatureShowcase'

export default function Features() {
  const features = [
    {
      badge: 'STUDIO PHOTO',
      title: 'Analysez n\'importe quelle pub en un clic.',
      description: 'Capturez et analysez les publicités directement depuis votre navigateur.',
      points: [
        'Capture directe sur n\'importe quel site web',
        'Identification précise de l\'audience cible',
        'Analyse complète du hook visuel',
        'Décryptage du message publicitaire',
      ],
      videoSrc: '/videos/studio-photo.mp4',
      thumbnailSrc: '/thumbnails/studio-photo-thumb.jpg',
      imageAlt: 'Studio Photo - Capture et analyse de publicités',
      highlighted: false,
    },
    {
      badge: 'STUDIO UPLOAD',
      title: 'Importez vos fichiers, obtenez des insights.',
      description: 'Upload de photos et vidéos pour une analyse approfondie.',
      points: [
        'Import de photos et vidéos depuis votre appareil',
        'Analyse frame par frame des vidéos',
        'Génération automatique du script complet',
        'Détection des techniques de persuasion',
      ],
      videoSrc: '/videos/studio-upload.mp4',
      thumbnailSrc: '/thumbnails/studio-upload-thumb.jpg',
      imageAlt: 'Studio Upload - Import et analyse de fichiers',
      highlighted: false,
    },
    {
      badge: 'STUDIO BIBLIOTHÈQUE',
      title: 'Votre swipe file, enfin organisé.',
      description: 'Sauvegardez et organisez vos meilleures trouvailles automatiquement.',
      points: [
        'Stockage illimité de vos analyses',
        'Organisation par playlists personnalisées',
        'Historique détaillé de chaque analyse sauvegardée',
        'Export vers Notion en un clic',
      ],
      videoSrc: '/videos/studio-library.mp4',
      thumbnailSrc: '/thumbnails/studio-library-thumb.jpg',
      imageAlt: 'Studio Bibliothèque - Organisation de votre swipe file',
      highlighted: false,
    },
    {
      badge: 'STUDIO SPY MODE',
      title: 'Transformez les pubs concurrentes en scripts pour VOUS.',
      description: 'Adaptez les meilleures publicités à votre produit en 60 secondes.',
      points: [
        'Génération de prompts Midjourney prêts à l\'emploi',
        'Script vidéo adapté shot par shot',
        '5 variations publicitaires générées automatiquement',
        'Propositions d\'angles marketing différenciants',
      ],
      videoSrc: '/videos/spy-mode.mp4',
      thumbnailSrc: '/thumbnails/spy-mode-thumb.jpg',
      imageAlt: 'Studio Spy Mode - Adaptation de publicités',
      highlighted: true,
    },
    {
      badge: 'STUDIO AD TRACKER',
      title: 'Surveillez vos concurrents automatiquement.',
      description: 'Gardez un œil sur la concurrence sans effort.',
      points: [
        'Suivi simultané de plusieurs concurrents',
        'Vue d\'ensemble des analyses par concurrent',
        'Interface intuitive pour une veille rapide et efficace',
        'Synchronisation automatique avec Notion',
      ],
      videoSrc: '/videos/ad-tracker.mp4',
      thumbnailSrc: '/thumbnails/ad-tracker-thumb.jpg',
      imageAlt: 'Studio Ad Tracker - Surveillance concurrentielle',
      highlighted: false,
    },
  ]

  return (
    <section id="features" className="bg-dark-100">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center py-16 lg:py-24">
          <span className="text-accent text-sm font-medium mb-4 block tracking-wider uppercase">
            Fonctionnalités
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            5 outils puissants.{' '}
            <span className="text-accent">Une seule extension.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Chaque studio est conçu pour une étape précise de votre workflow d'analyse concurrentielle.
          </p>
        </div>

        {/* Features List */}
        <div className="divide-y divide-dark-400">
          {features.map((feature, index) => (
            <FeatureShowcase
              key={index}
              badge={feature.badge}
              title={feature.title}
              description={feature.description}
              points={feature.points}
              videoSrc={feature.videoSrc}
              thumbnailSrc={feature.thumbnailSrc}
              imageAlt={feature.imageAlt}
              reverse={index % 2 === 1}
              highlighted={feature.highlighted}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
