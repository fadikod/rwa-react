'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import { CheckIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
import { ClockIcon, AcademicCapIcon } from '@heroicons/react/24/outline'
import { motion, useInView } from 'framer-motion'

export default function FeaturedCourse() {
  const { t } = useLanguage()
  const fc = content.home.featuredCourse
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-beige" ref={ref}>
      <div className="container-max px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
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
          </motion.div>

          {/* Right: image + outcomes */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="space-y-4"
          >
            {/* Course photo */}
            <div className="relative h-56 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80"
                alt="Beauty styling course"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark/30 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="tag-badge bg-terracotta text-white">
                  {t({ nl: 'Inclusief praktijkstage', en: 'Includes internship' })}
                </span>
              </div>
            </div>

            {/* Outcomes card */}
            <div className="bg-white rounded-2xl border border-border-color p-7">
              <h4 className="font-cormorant text-xl font-medium text-dark mb-5">
                {t({ nl: 'Wat jij leert', en: 'What you will learn' })}
              </h4>
              <ul className="space-y-3">
                {fc.outcomes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon className="w-3 h-3 text-terracotta" />
                    </div>
                    <span className="font-inter text-sm text-body-text leading-relaxed">
                      {t(item)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
