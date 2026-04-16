'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import SectionHeader from '@/components/shared/SectionHeader'
import CourseCard from '@/components/shared/CourseCard'
import CtaBanner from '@/components/home/CtaBanner'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-border-color rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left bg-white hover:bg-beige transition-colors"
      >
        <span className="font-inter text-base font-medium text-dark">{q}</span>
        <ChevronDownIcon
          className={`w-5 h-5 text-light-text flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-6 bg-white">
          <p className="font-inter text-sm text-light-text leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function OpleidingenPage() {
  const { t } = useLanguage()
  const { hero, items, faq } = content.courses

  return (
    <>
      {/* Page Hero */}
      <section className="pt-40 pb-20 bg-dark overflow-hidden relative">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `radial-gradient(ellipse at 80% 50%, #c17b4e 0%, transparent 60%)` }}
        />
        <div className="relative container-max px-6 md:px-12 lg:px-20">
          <SectionHeader
            tag={t(hero.tag)}
            title={t(hero.title)}
            subtitle={t(hero.subtitle)}
            light
          />
        </div>
      </section>

      {/* Courses grid */}
      <section className="section-padding bg-cream">
        <div className="container-max px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {items.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={t(course.title)}
                level={t(course.level)}
                levelColor={course.levelColor}
                duration={t(course.duration)}
                format={t(course.format)}
                description={t(course.description)}
                modules={course.modules.map((m) => t(m))}
                cta={t(course.cta)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Career outcomes strip */}
      <section className="py-16 bg-beige border-y border-border-color">
        <div className="container-max px-6 md:px-12 lg:px-20 text-center">
          <p className="font-cormorant text-2xl text-dark italic mb-2">
            {t({ nl: '"Onze afgestudeerden werken bij topbedrijven in de beauty- en fashionbranche"', en: '"Our graduates work at top companies in the beauty and fashion industry"' })}
          </p>
          <p className="font-inter text-xs text-light-text tracking-widest uppercase mt-3">
            {t({ nl: 'Partners & Werkgevers', en: 'Partners & Employers' })}
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {['BrainWash Kappers', 'Dutch Sustainable Fashion Week', 'Banlieue', 'Studio Z', 'Peter George'].map((p) => (
              <span key={p} className="font-inter text-sm text-taupe bg-white border border-border-color px-4 py-2 rounded-full">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-cream">
        <div className="container-max px-6 md:px-12 lg:px-20 max-w-3xl">
          <SectionHeader
            tag={t({ nl: 'FAQ', en: 'FAQ' })}
            title={t(faq.title)}
            centered
          />
          <div className="space-y-3">
            {faq.items.map((item, i) => (
              <FaqItem key={i} q={t(item.q)} a={t(item.a)} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="font-inter text-sm text-light-text mb-4">
              {t({ nl: 'Nog een vraag? Neem gerust contact met ons op.', en: 'Still have a question? Feel free to contact us.' })}
            </p>
            <Link href="/contact" className="btn-outline">
              {t({ nl: 'Neem contact op', en: 'Get in touch' })}
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
