'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import SectionHeader from '@/components/shared/SectionHeader'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export default function Testimonials() {
  const { t } = useLanguage()
  const { testimonials } = content.home
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.items.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.items.length])

  const prev = () => setActive((a) => (a - 1 + testimonials.items.length) % testimonials.items.length)
  const next = () => setActive((a) => (a + 1) % testimonials.items.length)

  return (
    <section className="section-padding bg-dark overflow-hidden">
      <div className="container-max">
        <SectionHeader
          tag={t(testimonials.tag)}
          title={t(testimonials.title)}
          centered
          light
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Quote marks */}
          <div className="absolute -top-4 -left-4 text-terracotta/20 font-playfair text-9xl leading-none select-none">
            &ldquo;
          </div>

          {/* Testimonial */}
          <div className="relative bg-white/5 border border-white/10 rounded-2xl p-10 md:p-14 text-center">
            <p className="font-cormorant text-xl md:text-2xl text-cream/90 leading-relaxed mb-8 italic">
              {t(testimonials.items[active].quote)}
            </p>
            <div>
              <p className="font-inter text-sm font-medium text-cream">
                {testimonials.items[active].name}
              </p>
              <p className="font-inter text-xs text-cream/50 mt-1">
                {t(testimonials.items[active].role)}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-cream/60 hover:text-cream hover:border-white/60 transition-all"
              aria-label="Previous"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all ${
                    i === active ? 'w-6 h-2 bg-terracotta' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
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
