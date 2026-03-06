import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  Hero,
  SocialProof,
  TheProblem,
  HowItWorks,
  Platforms,
  BeforeAfter,
  Features,
  TimeSavingsMetrics,
  ValueProposition,
  Testimonials,
  Pricing,
  FAQSection,
  Guarantee,
  CTAFinal,
} from '@/components/sections'

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
        <Features />
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
