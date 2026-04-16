'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80',
    alt: 'Makeup styling',
    span: 'row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    alt: 'Nail art',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=800&q=80',
    alt: 'Lash treatment',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80',
    alt: 'Fashion editorial',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    alt: 'Color analysis',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    alt: 'Hair styling',
    span: 'row-span-2',
  },
]

export default function GallerySection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-beige" ref={ref}>
      <div className="container-max px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="tag-badge bg-white text-terracotta mb-3">
              {t({ nl: 'Portfolio', en: 'Portfolio' })}
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl font-medium text-dark mt-3">
              {t({ nl: 'Ons werk in beeld', en: 'Our work in pictures' })}
            </h2>
          </motion.div>
          <Link
            href="/diensten"
            className="flex-shrink-0 inline-flex items-center gap-2 font-inter text-sm font-medium text-terracotta hover:text-terracotta-dark transition-colors"
          >
            {t({ nl: 'Bekijk alle diensten', en: 'View all services' })}
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 gap-3 h-[600px] md:h-[700px]">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden rounded-2xl group ${photo.span} ${i === 0 ? 'col-span-1' : ''}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="font-cormorant text-cream text-lg italic">{photo.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
