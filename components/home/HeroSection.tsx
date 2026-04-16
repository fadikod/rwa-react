'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

export default function HeroSection() {
  const { t } = useLanguage()
  const h = content.home.hero

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-[#3d2d1e] to-[#5a3d28]" />

      {/* Decorative overlays */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(ellipse at 70% 50%, #c17b4e 0%, transparent 60%)`,
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />

      {/* Decorative circle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 -mr-64" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5 -mr-44" />

      {/* Content */}
      <div className="relative container-max px-6 md:px-12 lg:px-20 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Tag line */}
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="w-8 h-px bg-terracotta" />
            <span className="font-cormorant text-sm tracking-[0.3em] uppercase text-terracotta">
              {t({ nl: 'Beauty & Styling Studio', en: 'Beauty & Styling Studio' })}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-medium text-cream leading-[1.05] whitespace-pre-line mb-6">
            {t(h.headline)}
          </h1>

          {/* Subline */}
          <p className="font-inter text-lg text-cream/70 leading-relaxed max-w-xl mb-10">
            {t(h.subline)}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/diensten" className="btn-primary text-base px-8 py-4">
              {t(h.ctaPrimary)}
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link href="/opleidingen" className="btn-outline-white text-base px-8 py-4">
              {t(h.ctaSecondary)}
            </Link>
          </div>

          {/* Social proof micro-text */}
          <div className="flex items-center gap-6 mt-12">
            {[
              { value: '500+', label: { nl: 'klanten', en: 'clients' } },
              { value: '10+', label: { nl: 'jaar ervaring', en: 'years experience' } },
              { value: '25+', label: { nl: 'partners', en: 'partners' } },
            ].map((item) => (
              <div key={item.value} className="text-center">
                <p className="font-playfair text-2xl font-medium text-terracotta">{item.value}</p>
                <p className="font-inter text-xs text-cream/50 mt-0.5">{t(item.label)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
