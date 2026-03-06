import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  Hero,
  SocialProof,
  TheProblem,
  HowItWorks,
  Platforms,
  BeforeAfter,
  TimeSavingsMetrics,
  ValueProposition,
  Testimonials,
  Pricing,
  FAQSection,
  Guarantee,
  CTAFinal,
} from '@/components/sections'
import FeaturesCarousel from '@/components/FeaturesCarousel'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <TheProblem />
        <HowItWorks />
        <Platforms />
        <BeforeAfter />
        <FeaturesCarousel />
        <TimeSavingsMetrics />
        <ValueProposition />
        <Testimonials />
        <Pricing />
        <FAQSection />
        <Guarantee />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
