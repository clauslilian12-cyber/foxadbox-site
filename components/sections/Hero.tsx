'use client'

import { motion } from 'framer-motion'
import { Chrome, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-dark-300 border border-dark-400 rounded-full px-4 py-2 mb-8"
          >
            <Chrome size={16} className="text-accent" />
            <span className="text-sm text-gray-300">Chrome Extension — Now in Beta</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance"
          >
            Your Competitors&apos; Ads Are Telling You Everything.{' '}
            <span className="gradient-text">Are You Listening?</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto text-balance"
          >
            FoxAdBox reverse-engineers any photo or video ad you see online. It reveals the hidden psychology, the creative secrets, and the exact techniques that make it convert — then instantly adapts everything to <span className="text-white font-medium">YOUR</span> product, <span className="text-white font-medium">YOUR</span> brand, and <span className="text-white font-medium">YOUR</span> creative workflow.
          </motion.p>

          {/* Waitlist Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{ marginBottom: '28px' }}
          >
            <a
              href="https://foxadbox.com/waitlist"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'rgba(42,45,100,0.5)',
                border: '1px solid rgba(0,245,212,0.3)',
                borderRadius: '999px',
                padding: '10px 20px',
                color: '#00F5D4',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(42,45,100,0.8)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(42,45,100,0.5)')}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#f97316',
                  animation: 'waitlist-pulse 2s infinite',
                  flexShrink: 0,
                }}
              />
              Chrome Web Store approval in progress — Join the waitlist &amp; get 30% off →
            </a>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="https://chromewebstore.google.com/detail/foxadbox-ai-marketing-ass/fibdbjcgmdhjiaddkdhhakjpingbmakh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4 gap-2 animate-glow"
            >
              <Chrome size={20} />
              Install for Free on Chrome →
            </a>
            <a
              href="#features"
              className="btn-secondary text-base px-8 py-4 gap-2"
            >
              See How It Works ↓
              <ArrowRight size={18} />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
