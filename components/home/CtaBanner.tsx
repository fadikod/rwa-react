'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

export default function CtaBanner() {
  const { t } = useLanguage()
  const cta = content.home.ctaBanner

  return (
    <section className="bg-terracotta">
      <div className="container-max px-6 md:px-12 lg:px-20 py-20 text-center">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-white/30" />
          <span className="font-cormorant text-sm tracking-[0.3em] uppercase text-white/70">
            {t({ nl: 'Jouw transformatie start hier', en: 'Your transformation starts here' })}
          </span>
          <div className="w-16 h-px bg-white/30" />
        </div>

        <h2 className="font-playfair text-4xl md:text-5xl font-medium text-white mb-5">
          {t(cta.title)}
        </h2>
        <p className="font-inter text-base text-white/80 max-w-xl mx-auto mb-10">
          {t(cta.subtitle)}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-terracotta-dark font-inter font-medium px-8 py-4 rounded-full hover:bg-cream transition-all hover:shadow-lg hover:-translate-y-0.5 text-base"
        >
          {t(cta.cta)}
          <ArrowRightIcon className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
