import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import JobsSection from '@/components/JobsSection'
import SuccessStory from '@/components/SuccessStory'
import ContactSection from '@/components/ContactSection'
import PartnersStrip from '@/components/PartnersStrip'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <JobsSection />
        <SuccessStory />
        <PartnersStrip />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
