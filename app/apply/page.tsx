import { Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ApplyForm from '@/components/ApplyForm'

export default function ApplyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-sand pt-[90px]">
        <Suspense fallback={<div className="container-rwa py-20 text-muted">Loading…</div>}>
          <ApplyForm />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
