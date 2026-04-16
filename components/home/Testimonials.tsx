'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import SectionHeader from '@/components/shared/SectionHeader'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const avatarColors = ['#c17b4e', '#8b6f5e', '#8a9e8c', '#2c2117']

// Unsplash avatar photos
const avatarPhotos = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=100&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
  'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=100&q=80',
]

export default function Testimonials() {
  const { t } = useLanguage()
  const { testimonials } = content.home
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.items.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.items.length])

  const prev = () => setActive((a) => (a - 1 + testimonials.items.length) % testimonials.items.length)
  const next = () => setActive((a) => (a + 1) % testimonials.items.length)

  return (
    <section className="section-padding bg-dark overflow-hidden relative">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, #c17b4e 0%, transparent 50%), radial-gradient(circle at 80% 20%, #8a9e8c 0%, transparent 50%)`,
        }}
      />

      <div className="relative container-max px-6 md:px-12 lg:px-20">
        <SectionHeader
          tag={t(testimonials.tag)}
          title={t(testimonials.title)}
          centered
          light
        />

        {/* All testimonials — mini thumbnails */}
        <div className="flex justify-center gap-3 mb-10">
          {testimonials.items.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative w-12 h-12 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                i === active ? 'border-terracotta scale-110' : 'border-white/20 opacity-60 hover:opacity-100'
              }`}
              aria-label={item.name}
            >
              <Image
                src={avatarPhotos[i]}
                alt={item.name}
                fill
                className="object-cover"
                sizes="48px"
              />
            </button>
          ))}
        </div>

        {/* Active testimonial */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14 text-center backdrop-blur-sm"
            >
              {/* Big quote mark */}
              <div className="font-playfair text-7xl text-terracotta/30 leading-none mb-4 select-none">&ldquo;</div>

              <p className="font-cormorant text-xl md:text-2xl text-cream/90 leading-relaxed mb-8 italic">
                {t(testimonials.items[active].quote)}
              </p>

              <div className="flex items-center justify-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-terracotta/50">
                  <Image
                    src={avatarPhotos[active]}
                    alt={testimonials.items[active].name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div className="text-left">
                  <p className="font-inter text-sm font-medium text-cream">
                    {testimonials.items[active].name}
                  </p>
                  <p className="font-inter text-xs text-cream/50">
                    {t(testimonials.items[active].role)}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrow controls */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-cream/60 hover:text-cream hover:border-white/60 transition-all"
              aria-label="Previous"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active ? 'w-6 h-2 bg-terracotta' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-cream/60 hover:text-cream hover:border-white/60 transition-all"
              aria-label="Next"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
