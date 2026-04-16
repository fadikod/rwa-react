'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import SectionHeader from '@/components/shared/SectionHeader'
import ServiceCard from '@/components/shared/ServiceCard'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// Curated Unsplash images per service
const serviceImages: Record<string, string> = {
  kledingstijladvies:
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
  kleuranalyse:
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
  kleurenpaspoort:
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
  'zakelijk-kledingadvies':
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  'mannen-styling':
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80',
  incompany:
    'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80',
}

export default function ServicesGrid() {
  const { t } = useLanguage()
  const { servicesSection } = content.home
  const services = content.services.items
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-cream" ref={ref}>
      <div className="container-max px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              tag={t(servicesSection.tag)}
              title={t(servicesSection.title)}
              subtitle={t(servicesSection.subtitle)}
            />
          </motion.div>
          <Link
            href="/diensten"
            className="flex-shrink-0 inline-flex items-center gap-2 font-inter text-sm font-medium text-terracotta hover:text-terracotta-dark transition-colors"
          >
            {t(servicesSection.viewAll)}
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ServiceCard
                icon={service.icon}
                title={t(service.title)}
                tag={t(service.tag)}
                description={t(service.description)}
                duration={t(service.duration)}
                format={t(service.format)}
                href={`/diensten#${service.id}`}
                image={serviceImages[service.id]}
                compact
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
