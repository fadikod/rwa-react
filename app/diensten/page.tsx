'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import SectionHeader from '@/components/shared/SectionHeader'
import CtaBanner from '@/components/home/CtaBanner'
import {
  SparklesIcon,
  SwatchIcon,
  IdentificationIcon,
  BriefcaseIcon,
  UserCircleIcon,
  BuildingOfficeIcon,
  ClockIcon,
  CheckIcon,
} from '@heroicons/react/24/outline'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  sparkles: SparklesIcon,
  swatch: SwatchIcon,
  identification: IdentificationIcon,
  briefcase: BriefcaseIcon,
  'user-circle': UserCircleIcon,
  'building-office': BuildingOfficeIcon,
}

const tagColors: Record<string, string> = {
  Persoonlijk: 'bg-sage/10 text-sage',
  Personal: 'bg-sage/10 text-sage',
  Verdieping: 'bg-taupe/10 text-taupe',
  Advanced: 'bg-taupe/10 text-taupe',
  Business: 'bg-terracotta/10 text-terracotta',
  Corporate: 'bg-dark/10 text-dark',
}

export default function DienstenPage() {
  const { t } = useLanguage()
  const { hero, items } = content.services

  return (
    <>
      {/* Page Hero */}
      <section className="pt-40 pb-20 bg-beige border-b border-border-color">
        <div className="container-max px-6 md:px-12 lg:px-20">
          <SectionHeader
            tag={t(hero.tag)}
            title={t(hero.title)}
            subtitle={t(hero.subtitle)}
          />
        </div>
      </section>

      {/* Services list */}
      <section className="section-padding bg-cream">
        <div className="container-max px-6 md:px-12 lg:px-20">
          <div className="space-y-8">
            {items.map((service, i) => {
              const Icon = iconMap[service.icon] || SparklesIcon
              const tag = t(service.tag)
              const badgeClass = tagColors[tag] || 'bg-beige text-taupe'
              const isEven = i % 2 === 0

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="bg-white rounded-2xl border border-border-color overflow-hidden"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-3 ${isEven ? '' : ''}`}>
                    {/* Color accent sidebar */}
                    <div className="hidden lg:flex lg:col-span-1 bg-beige p-10 items-start justify-start">
                      <div>
                        <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                          <Icon className="w-8 h-8 text-terracotta" />
                        </div>
                        <span className={`tag-badge text-[10px] mb-4 ${badgeClass}`}>{tag}</span>
                        <div className="space-y-2 mt-6">
                          <div className="flex items-center gap-2">
                            <ClockIcon className="w-4 h-4 text-light-text flex-shrink-0" />
                            <span className="font-inter text-xs text-light-text">{t(service.duration)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <BuildingOfficeIcon className="w-4 h-4 text-light-text flex-shrink-0" />
                            <span className="font-inter text-xs text-light-text">{t(service.format)}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-2 p-8 md:p-10">
                      {/* Mobile: icon + tag */}
                      <div className="flex items-center gap-3 mb-4 lg:hidden">
                        <div className="w-10 h-10 rounded-xl bg-beige flex items-center justify-center">
                          <Icon className="w-5 h-5 text-terracotta" />
                        </div>
                        <span className={`tag-badge text-[10px] ${badgeClass}`}>{tag}</span>
                      </div>

                      <h2 className="font-playfair text-2xl md:text-3xl font-medium text-dark mb-4">
                        {t(service.title)}
                      </h2>
                      <p className="font-inter text-base text-light-text leading-relaxed mb-8">
                        {t(service.description)}
                      </p>

                      {/* Includes */}
                      <div className="mb-8">
                        <h4 className="font-inter text-xs font-medium tracking-widest uppercase text-light-text mb-4">
                          {t({ nl: 'Inclusief', en: 'Includes' })}
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.includes.map((item, j) => (
                            <li key={j} className="flex items-center gap-2">
                              <CheckIcon className="w-4 h-4 text-sage flex-shrink-0" />
                              <span className="font-inter text-sm text-body-text">{t(item)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Mobile meta */}
                      <div className="flex flex-wrap gap-2 mb-8 lg:hidden">
                        <span className="inline-flex items-center gap-1.5 font-inter text-xs text-taupe bg-beige px-3 py-1.5 rounded-full">
                          <ClockIcon className="w-3.5 h-3.5" /> {t(service.duration)}
                        </span>
                      </div>

                      <Link href="/contact" className="btn-primary">
                        {t({ nl: 'Boek dit consult', en: 'Book this consult' })}
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
