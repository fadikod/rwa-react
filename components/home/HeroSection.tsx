'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function HeroSection() {
  const { t } = useLanguage()
  const h = content.home.hero

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background photo */}
      <Image
        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80"
        alt="Beauty salon"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Layered overlay: dark left gradient + overall tint */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/20" />
      <div className="absolute inset-0 bg-dark/30" />

      {/* Bottom fade to cream */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cream to-transparent" />

      {/* Floating accent shapes */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/5 -mr-72 pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-white/5 -mr-48 pointer-events-none" />

      {/* Content */}
      <div className="relative container-max px-6 md:px-12 lg:px-20 pt-36 pb-28">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            className="inline-flex items-center gap-3 mb-8"
            {...fadeUp(0.1)}
          >
            <div className="w-10 h-px bg-terracotta" />
            <span className="font-cormorant text-sm tracking-[0.35em] uppercase text-terracotta">
              {t({ nl: 'Beauty & Styling Studio', en: 'Beauty & Styling Studio' })}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-playfair text-5xl md:text-6xl lg:text-[5.5rem] font-medium text-cream leading-[1.02] whitespace-pre-line mb-6"
            {...fadeUp(0.2)}
          >
            {t(h.headline)}
          </motion.h1>

          {/* Subline */}
          <motion.p
            className="font-inter text-lg md:text-xl text-cream/75 leading-relaxed max-w-xl mb-10"
            {...fadeUp(0.35)}
          >
            {t(h.subline)}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            {...fadeUp(0.45)}
          >
            <Link href="/diensten" className="btn-primary text-base px-8 py-4">
              {t(h.ctaPrimary)}
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link href="/opleidingen" className="btn-outline-white text-base px-8 py-4">
              {t(h.ctaSecondary)}
            </Link>
          </motion.div>

          {/* Social proof mini-stats */}
          <motion.div
            className="flex items-center gap-8 mt-16 pt-8 border-t border-white/10"
            {...fadeUp(0.55)}
          >
            {[
              { value: '500+', label: { nl: 'Klanten', en: 'Clients' } },
              { value: '10+', label: { nl: 'Jaar ervaring', en: 'Years exp.' } },
              { value: '25+', label: { nl: 'Partners', en: 'Partners' } },
            ].map((item) => (
              <div key={item.value}>
                <p className="font-playfair text-3xl font-medium text-terracotta">{item.value}</p>
                <p className="font-inter text-xs text-cream/50 mt-0.5 tracking-wide">{t(item.label)}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white/40 to-white/0 animate-pulse" />
      </motion.div>
    </section>
  )
}
