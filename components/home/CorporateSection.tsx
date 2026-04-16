'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import { CheckIcon } from '@heroicons/react/20/solid'

export default function CorporateSection() {
  const { t } = useLanguage()
  const corp = content.home.corporate

  return (
    <section id="corporate" className="section-padding bg-cream">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual / decorative left panel */}
          <div className="relative">
            <div className="bg-gradient-to-br from-dark to-[#3d2d1e] rounded-2xl p-10 md:p-14">
              <span className="tag-badge bg-white/10 text-cream/70 mb-6">
                {t(corp.tag)}
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl font-medium text-cream leading-tight whitespace-pre-line mb-6">
                {t(corp.title)}
              </h2>
              <div className="w-12 h-0.5 bg-terracotta mb-6" />
              <p className="font-inter text-base text-cream/70 leading-relaxed">
                {t(corp.description)}
              </p>
            </div>
            {/* Accent box */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-terracotta/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-sage/10 rounded-xl -z-10" />
          </div>

          {/* Right: features + CTA */}
          <div>
            <ul className="space-y-4 mb-10">
              {corp.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-4 p-4 bg-white border border-border-color rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-4 h-4 text-terracotta" />
                  </div>
                  <span className="font-inter text-sm text-body-text">{t(feature)}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact" className="btn-primary">
              {t(corp.cta)}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
