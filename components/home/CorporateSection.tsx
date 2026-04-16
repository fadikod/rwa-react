'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import { CheckIcon } from '@heroicons/react/20/solid'
import { motion, useInView } from 'framer-motion'

export default function CorporateSection() {
  const { t } = useLanguage()
  const corp = content.home.corporate
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="corporate" className="section-padding bg-cream" ref={ref}>
      <div className="container-max px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual left panel */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
            {/* Background card */}
            <div className="bg-gradient-to-br from-dark to-[#3d2d1e] rounded-2xl overflow-hidden">
              {/* Photo inside card */}
              <div className="relative h-56 opacity-40">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
                  alt="Corporate team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 md:p-10">
                <span className="tag-badge bg-white/10 text-cream/70 mb-5">
                  {t(corp.tag)}
                </span>
                <h2 className="font-playfair text-4xl font-medium text-cream leading-tight whitespace-pre-line mb-5 mt-3">
                  {t(corp.title)}
                </h2>
                <div className="w-10 h-0.5 bg-terracotta mb-5" />
                <p className="font-inter text-sm text-cream/70 leading-relaxed">
                  {t(corp.description)}
                </p>
              </div>
            </div>
            {/* Accent boxes */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-terracotta/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-sage/10 rounded-xl -z-10" />
          </motion.div>

          {/* Right: features + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <ul className="space-y-3 mb-10">
              {corp.features.map((feature, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-4 p-4 bg-white border border-border-color rounded-xl hover:border-terracotta/30 hover:shadow-sm transition-all"
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-4 h-4 text-terracotta" />
                  </div>
                  <span className="font-inter text-sm text-body-text">{t(feature)}</span>
                </motion.li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary">
              {t(corp.cta)}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
