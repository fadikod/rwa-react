import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

export const metadata: Metadata = {
  title: 'Refugee Work Agency',
  description:
    'We connect motivated refugee talent with employers who value skills, diversity and inclusion.',
  icons: {
    icon: 'https://raw.githubusercontent.com/fadikod/rwa/main/assets/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
