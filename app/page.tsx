import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  Hero,
  SocialProof,
  BeforeAfter,
  Features,
  NotionSection,
  Testimonials,
  Pricing,
  FAQSection,
  CTAFinal,
} from '@/components/sections'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <BeforeAfter />
        <Features />
        <NotionSection />
        <Testimonials />
        <Pricing />
        <FAQSection />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
