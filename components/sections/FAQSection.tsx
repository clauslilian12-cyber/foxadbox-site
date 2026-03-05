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
      question: 'Can I cancel anytime?',
      answer: 'Yes, no commitment. Cancel in one click from your dashboard. You keep access until the end of your billing period.',
    },
    {
      question: 'What types of ads can FoxAdBox analyze?',
      answer: 'Any photo or video ad you see on any website — Facebook, Instagram, TikTok, YouTube, landing pages, and more. If you can see it in your browser, FoxAdBox can analyze it.',
    },
    {
      question: 'Does it generate prompts for AI tools like Midjourney or Runway?',
      answer: 'Yes. Spy Mode generates Midjourney prompts for image creation, AI video prompts adapted shot by shot, and complete UGC scripts — all tailored to your specific product.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. Your data is encrypted, stored in Europe, and GDPR compliant. We never access your passwords or browsing history.',
    },
    {
      question: 'Which browsers are supported?',
      answer: 'Currently Google Chrome (desktop). Firefox and Edge support coming soon.',
    },
    {
      question: 'Is it legal to analyze competitor ads?',
      answer: 'Yes. FoxAdBox only analyzes publicly visible ads — it\'s like taking notes on an ad you see, but fully automated and AI-powered.',
    },
  ]

  return (
    <section id="faq" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-medium mb-4 block tracking-wider uppercase">FAQ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about FoxAdBox.
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
