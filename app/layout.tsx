import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: '[Studio Name] — Beauty & Styling',
  description: 'Premium styling advies & professionele opleidingen. Kledingstijladvies, kleuranalyse, zakelijk kledingadvies en beauty-opleidingen.',
  keywords: 'styling advies, kleuranalyse, beauty opleiding, kledingstijladvies, in-company training, imagostylist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="bg-cream">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
