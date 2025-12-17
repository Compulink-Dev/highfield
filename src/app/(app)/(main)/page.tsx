import CallToAction from '@/components/call-to-action'
import { ContactForm } from '@/components/contact-form'
import FeaturesSection from '@/components/features-section'
import { HeroCarousel } from '@/components/hero-carousel'
import { ServicesSection } from '@/components/service-section'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <ServicesSection />
      <FeaturesSection />
      <Testimonials />
      <CallToAction />
      <ContactForm />
    </>
  )
}
