import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import TrustStrip from '@/components/TrustStrip'
import JobsSection from '@/components/JobsSection'
import SuccessStory from '@/components/SuccessStory'
import PartnersStrip from '@/components/PartnersStrip'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustStrip />
        <JobsSection />
        <SuccessStory />
        <PartnersStrip />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
