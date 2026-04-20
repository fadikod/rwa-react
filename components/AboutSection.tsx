'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useLang } from '@/context/LanguageContext'
import { dict } from '@/lib/i18n'

const RUBY_IMG = 'https://rwa-demo-fadi.netlify.app/assets/Ruby-pracht2.jpeg'

export default function AboutSection() {
  const { lang } = useLang()
  const tx = dict[lang].about
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about" className="bg-white py-20">
      <div className="container-rwa">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Text */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
              {tx.label}
            </p>
            <h2 className="font-extrabold text-ink mb-1" style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}>
              {tx.name}
            </h2>
            <p className="text-muted text-sm mb-6">{tx.role}</p>
            <p className="text-ink leading-relaxed" style={{ fontSize: 'clamp(15px, 1.5vw, 17px)' }}>
              {tx.bio}
            </p>
          </div>

          {/* Photo */}
          <div className="flex justify-center md:justify-end">
            <div
              className="relative rounded-2xl overflow-hidden border border-gray-border shadow-lg"
              style={{ width: 320, height: 400 }}
            >
              <Image
                src={RUBY_IMG}
                alt="Ruby Pracht"
                fill
                className="object-cover object-top"
                unoptimized
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
