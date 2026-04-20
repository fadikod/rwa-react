import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JobsPageClient from '@/components/JobsPageClient'

export default function JobsPage() {
  return (
    <>
      <Header />
      <main>
        <JobsPageClient />
      </main>
      <Footer />
    </>
  )
}
