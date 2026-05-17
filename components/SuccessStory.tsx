'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useLang } from '@/context/LanguageContext'
import { dict } from '@/lib/i18n'

const STORY_IMG = 'https://rwa-demo-fadi.netlify.app/assets/success-story-mahdi2.png'

export default function SuccessStory() {
  const { lang } = useLang()
  const tx = dict[lang].story
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-gray-bg py-20">
      <div className="container-rwa">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-white border border-gray-border rounded-[22px] overflow-hidden grid grid-cols-1 md:grid-cols-2 md:min-h-[500px]"
          style={{ boxShadow: '0 10px 30px rgba(2,8,23,.08)' }}
        >
          {/* Image side */}
          <div className="relative w-full aspect-[4/3] md:aspect-auto md:min-h-[500px]">
            <Image
              src={STORY_IMG}
              alt="Mahdi's success story at Sparkle in Style"
              fill
              className="object-cover object-center"
              unoptimized
            />
          </div>

          {/* Text side */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
              {tx.label}
            </span>

            <p className="text-sm text-muted mb-5 leading-relaxed italic">
              {tx.about}
            </p>

            <div className="relative mb-6">
              <span
                className="absolute -top-4 -left-2 text-ink select-none"
                style={{ fontSize: '54px', opacity: 0.35, lineHeight: 1, fontFamily: 'Georgia, serif' }}
              >
                &ldquo;
              </span>
              <p
                className="text-ink leading-relaxed pl-6"
                style={{ fontSize: 'clamp(18px, 2.2vw, 22px)' }}
              >
                {tx.quote}
              </p>
            </div>

            <div className="mb-8">
              <p className="font-bold text-ink text-lg">{tx.name}</p>
              <p className="text-muted text-sm">{tx.role}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="#jobs" className="btn-primary">
                {tx.cta1}
              </Link>
              <Link href="#contact" className="btn text-sm">
                {tx.cta2}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
