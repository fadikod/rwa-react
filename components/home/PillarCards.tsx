'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import { UserIcon, AcademicCapIcon, BriefcaseIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import SectionHeader from '@/components/shared/SectionHeader'

const iconMap = {
  user: UserIcon,
  'academic-cap': AcademicCapIcon,
  briefcase: BriefcaseIcon,
}

export default function PillarCards() {
  const { t } = useLanguage()
  const { pillars } = content.home

  return (
    <section className="section-padding bg-cream">
      <div className="container-max">
        <SectionHeader
          tag={t({ nl: 'Wat wij bieden', en: 'What we offer' })}
          title={t({ nl: 'Een studio voor ieder doel', en: 'A studio for every goal' })}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.items.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || UserIcon
            return (
              <Link
                key={i}
                href={item.link}
                className="group bg-white border border-border-color rounded-2xl p-8 card-hover flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-beige flex items-center justify-center mb-5 group-hover:bg-terracotta/10 transition-colors">
                  <Icon className="w-7 h-7 text-terracotta" />
                </div>
                <h3 className="font-playfair text-xl font-medium text-dark mb-3">
                  {t(item.title)}
                </h3>
                <p className="font-inter text-sm text-light-text leading-relaxed flex-1 mb-5">
                  {t(item.description)}
                </p>
                <span className="inline-flex items-center gap-1.5 font-inter text-sm font-medium text-terracotta group-hover:gap-2.5 transition-all">
                  {t({ nl: 'Meer info', en: 'Learn more' })}
                  <ArrowRightIcon className="w-4 h-4" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
