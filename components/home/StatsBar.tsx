'use client'

import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/lib/content'

export default function StatsBar() {
  const { t } = useLanguage()
  const { stats } = content.home

  return (
    <section className="bg-beige border-y border-border-color">
      <div className="container-max px-6 md:px-12 lg:px-20 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-playfair text-4xl md:text-5xl font-medium text-terracotta mb-1">
                {stat.value}
              </p>
              <p className="font-inter text-sm text-light-text tracking-wide">
                {t(stat.label)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
