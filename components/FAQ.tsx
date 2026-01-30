'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
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
  )
}
