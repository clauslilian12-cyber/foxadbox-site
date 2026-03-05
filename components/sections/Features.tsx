'use client'

import FeatureShowcase from '@/components/FeatureShowcase'

export default function Features() {
  const features = [
    {
      badge: 'PHOTO STUDIO',
      title: 'Decode Any Ad in One Click',
      points: [
        'Capture directly from any website',
        'Full AI breakdown of the creative strategy',
        'Emotional & psychological trigger analysis',
        'Audience identification & positioning insights',
      ],
      imageSrc: '/images/studio-photo.jpg',
      imageAlt: 'Photo Studio - Capture and analyze any ad',
      highlighted: false,
    },
    {
      badge: 'VIDEO STUDIO',
      title: 'Uncover Every Secret Inside a Video Ad',
      points: [
        'Frame-by-frame AI analysis',
        'Hook structure & pacing breakdown',
        'Persuasion & storytelling technique detection',
        'Full script reconstruction with insights',
      ],
      imageSrc: '/images/studio-upload.jpg',
      imageAlt: 'Video Studio - Frame-by-frame video analysis',
      highlighted: false,
    },
    {
      badge: 'LIBRARY STUDIO',
      title: 'Your Organized Swipe File, Finally',
      points: [
        'Unlimited saved analyses',
        'Custom playlist organization',
        'Full analysis history per ad',
        'One-click Notion export',
      ],
      imageSrc: '/images/studio-library.jpg',
      imageAlt: 'Library Studio - Your organized swipe file',
      highlighted: false,
    },
    {
      badge: 'SPY MODE',
      title: 'Turn Their Ads Into Your Content',
      points: [
        'Midjourney prompts tailored to your product',
        'AI video prompts adapted shot by shot',
        'Full UGC scripts for creators — hook, body, CTA',
        'Complete creative brief generated automatically',
      ],
      imageSrc: '/images/spy-mode.jpg',
      imageAlt: 'Spy Mode - Turn competitor ads into your content',
      highlighted: true,
    },
    {
      badge: 'AD TRACKER',
      title: 'Monitor Competitors on Autopilot',
      points: [
        'Track multiple competitors at once',
        'Full creative overview per competitor',
        'Fast & intuitive competitive monitoring',
        'Auto-sync with Notion',
      ],
      imageSrc: '/images/ad-tracker.jpg',
      imageAlt: 'Ad Tracker - Monitor competitors on autopilot',
      highlighted: false,
    },
  ]

  return (
    <section id="features" className="bg-dark-100">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center py-16 lg:py-24">
          <span className="text-accent text-sm font-medium mb-4 block tracking-wider uppercase">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            5 Powerful Studios.{' '}
            <span className="text-accent">One Extension.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Each studio handles a specific step of your competitive intelligence workflow — from capture to creation.
          </p>
        </div>

        {/* Features List */}
        <div className="divide-y divide-dark-400">
          {features.map((feature, index) => (
            <FeatureShowcase
              key={index}
              badge={feature.badge}
              title={feature.title}
              points={feature.points}
              imageSrc={feature.imageSrc}
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
