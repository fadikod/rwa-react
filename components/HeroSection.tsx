'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLang } from '@/context/LanguageContext'
import { dict } from '@/lib/i18n'

const HERO_IMG = 'https://raw.githubusercontent.com/fadikod/rwa/main/assets/hero-hands.jpg'

const FEATURE_ICONS = {
  jobMatching: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-accent">
      <path d="M11 2a9 9 0 1 0 0 18A9 9 0 0 0 11 2zm0 2a7 7 0 1 1 0 14A7 7 0 0 1 11 4zm6.293 11.293 1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM10 7h2v3h3v2h-3v3h-2v-3H7v-2h3V7z"/>
    </svg>
  ),
  training: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-accent">
      <path d="M12 3L1 9l4 2.18V15c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-3.82L21 9 12 3zm6 9.18V15H6v-2.82l6-3.27 6 3.27zM6 17h12v2H6z"/>
    </svg>
  ),
  partnerships: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-accent">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
    </svg>
  ),
  support: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-accent">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93V18h-2v1.93A8.001 8.001 0 0 1 4.07 13H6v-2H4.07A8.001 8.001 0 0 1 11 4.07V6h2V4.07A8.001 8.001 0 0 1 19.93 11H18v2h1.93A8.001 8.001 0 0 1 13 19.93zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
    </svg>
  ),
}

export default function HeroSection() {
  const { lang } = useLang()
  const tx = dict[lang]

  const features = [
    { key: 'jobMatching',  icon: FEATURE_ICONS.jobMatching },
    { key: 'training',     icon: FEATURE_ICONS.training },
    { key: 'partnerships', icon: FEATURE_ICONS.partnerships },
    { key: 'support',      icon: FEATURE_ICONS.support },
  ] as const

  return (
    <section id="about" className="relative flex flex-col" style={{ minHeight: '100svh', minWidth: 0 }}>
      {/* Background */}
      <Image
        src={HERO_IMG}
        alt="Hands collaborating"
        fill
        priority
        className="object-cover"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-ink/35 to-ink/5" />

      {/* Hero text — upper portion */}
      <div className="relative z-10 container-rwa flex-1 flex items-center pt-36 pb-12">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-white font-extrabold leading-tight mb-5 max-w-3xl"
            style={{
              fontSize: 'clamp(36px, 5.2vw, 62px)',
              letterSpacing: '-0.02em',
              textShadow: '0 2px 10px rgba(0,0,0,.18)',
            }}
          >
            {tx.hero.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="text-[#e2e8f0] leading-relaxed"
            style={{
              fontSize: 'clamp(16px, 2.1vw, 19px)',
              textShadow: '0 1px 6px rgba(0,0,0,.12)',
            }}
          >
            {tx.hero.sub}
          </motion.p>
        </div>
      </div>

      {/* Feature cards — pinned to bottom of hero, still inside the image */}
      <div className="relative z-10 container-rwa pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {features.map(({ key, icon }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
              className="bg-white rounded-2xl p-4 lg:p-7 flex flex-col shadow-sm hover:shadow-md transition-shadow min-h-[160px] lg:min-h-[320px]"
            >
              <div className="mb-3 lg:mb-6">{icon}</div>
              <h3 className="font-bold text-ink text-[14px] lg:text-[17px] leading-snug mb-2 lg:mb-4">
                {tx.features[key].title}
              </h3>
              <p className="text-muted text-[12px] lg:text-[15px] leading-relaxed hidden sm:block">
                {tx.features[key].desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
