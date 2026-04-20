import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import JobsSection from '@/components/JobsSection'
import SuccessStory from '@/components/SuccessStory'
import AboutSection from '@/components/AboutSection'
import PartnersStrip from '@/components/PartnersStrip'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <JobsSection />
        <SuccessStory />
        <AboutSection />
        <PartnersStrip />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
