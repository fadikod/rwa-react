'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import { CheckIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
import { ClockIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

export default function FeaturedCourse() {
  const { t } = useLanguage()
  const fc = content.home.featuredCourse

  return (
    <section className="section-padding bg-beige">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: content */}
          <div>
            <span className="tag-badge bg-terracotta/10 text-terracotta mb-5">
              {t(fc.tag)}
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-medium text-dark leading-tight mb-5">
              {t(fc.title)}
            </h2>
            <p className="font-inter text-base text-light-text leading-relaxed mb-8">
              {t(fc.description)}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-1.5 font-inter text-sm text-taupe bg-white border border-border-color px-4 py-2 rounded-full">
                <ClockIcon className="w-4 h-4" /> {t(fc.duration)}
              </span>
              <span className="inline-flex items-center gap-1.5 font-inter text-sm text-taupe bg-white border border-border-color px-4 py-2 rounded-full">
                <AcademicCapIcon className="w-4 h-4" /> {t(fc.level)}
              </span>
            </div>

            <Link href="/opleidingen#beauty-stylist" className="btn-primary">
              {t(fc.cta)} <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: outcomes */}
          <div className="bg-white rounded-2xl border border-border-color p-8">
            <h4 className="font-cormorant text-xl font-medium text-dark mb-6">
              {t({ nl: 'Wat jij leert', en: 'What you will learn' })}
            </h4>
            <ul className="space-y-4">
              {fc.outcomes.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckIcon className="w-3.5 h-3.5 text-terracotta" />
                  </div>
                  <span className="font-inter text-sm text-body-text leading-relaxed">
                    {t(item)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-border-color">
              <p className="font-inter text-xs text-light-text">
                {t({
                  nl: 'Inclusief praktijkstage bij een van onze 25+ salonpartners',
                  en: 'Includes internship at one of our 25+ salon partners',
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
