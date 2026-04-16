'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import SectionHeader from '@/components/shared/SectionHeader'
import ServiceCard from '@/components/shared/ServiceCard'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

export default function ServicesGrid() {
  const { t } = useLanguage()
  const { servicesSection } = content.home
  const services = content.services.items

  return (
    <section className="section-padding bg-cream">
      <div className="container-max">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            tag={t(servicesSection.tag)}
            title={t(servicesSection.title)}
            subtitle={t(servicesSection.subtitle)}
          />
          <Link
            href="/diensten"
            className="flex-shrink-0 inline-flex items-center gap-2 font-inter text-sm font-medium text-terracotta hover:text-terracotta-dark transition-colors"
          >
            {t(servicesSection.viewAll)}
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={t(service.title)}
              tag={t(service.tag)}
              description={t(service.description)}
              duration={t(service.duration)}
              format={t(service.format)}
              href={`/diensten#${service.id}`}
              compact
            />
          ))}
        </div>
      </div>
    </section>
  )
}
