import HeroSection from '@/components/home/HeroSection'
import PillarCards from '@/components/home/PillarCards'
import StatsBar from '@/components/home/StatsBar'
import ServicesGrid from '@/components/home/ServicesGrid'
import FeaturedCourse from '@/components/home/FeaturedCourse'
import Testimonials from '@/components/home/Testimonials'
import CorporateSection from '@/components/home/CorporateSection'
import CtaBanner from '@/components/home/CtaBanner'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PillarCards />
      <StatsBar />
      <ServicesGrid />
      <FeaturedCourse />
      <Testimonials />
      <CorporateSection />
      <CtaBanner />
    </>
  )
}
