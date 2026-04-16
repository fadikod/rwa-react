'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import { UserIcon, AcademicCapIcon, BriefcaseIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import SectionHeader from '@/components/shared/SectionHeader'
import { motion, useInView } from 'framer-motion'

const iconMap = {
  user: UserIcon,
  'academic-cap': AcademicCapIcon,
  briefcase: BriefcaseIcon,
}

const pillarAccents = ['from-terracotta/10 to-taupe/10', 'from-sage/10 to-terracotta/10', 'from-taupe/10 to-sage/10']

export default function PillarCards() {
  const { t } = useLanguage()
  const { pillars } = content.home
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-cream" ref={ref}>
      <div className="container-max px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            tag={t({ nl: 'Wat wij bieden', en: 'What we offer' })}
            title={t({ nl: 'Een studio voor ieder doel', en: 'A studio for every goal' })}
            centered
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.items.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || UserIcon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.12 }}
              >
                <Link
                  href={item.link}
                  className={`group bg-gradient-to-br ${pillarAccents[i]} border border-border-color rounded-2xl p-8 card-hover flex flex-col h-full bg-white`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5 group-hover:bg-terracotta/10 transition-colors">
                    <Icon className="w-7 h-7 text-terracotta" />
                  </div>
                  <h3 className="font-playfair text-xl font-medium text-dark mb-3">
                    {t(item.title)}
                  </h3>
                  <p className="font-inter text-sm text-light-text leading-relaxed flex-1 mb-5">
                    {t(item.description)}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-inter text-sm font-medium text-terracotta group-hover:gap-3 transition-all">
                    {t({ nl: 'Meer info', en: 'Learn more' })}
                    <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
