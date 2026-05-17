'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '@/context/LanguageContext'

const STATS = [
  {
    icon: '🏆',
    en: { value: '20+ years', label: 'expertise in reintegration' },
    nl: { value: '20+ jaar', label: 'ervaring in re-integratie' },
    ar: { value: '+٢٠ سنة', label: 'خبرة في إعادة الاندماج' },
  },
  {
    icon: '🤝',
    en: { value: '7 partners', label: 'trusted employer network' },
    nl: { value: '7 partners', label: 'betrouwbaar werkgeversnetwerk' },
    ar: { value: '٧ شركاء', label: 'شبكة أصحاب عمل موثوقة' },
  },
  {
    icon: '🌍',
    en: { value: '3 languages', label: 'English · Dutch · Arabic' },
    nl: { value: '3 talen', label: 'Engels · Nederlands · Arabisch' },
    ar: { value: '٣ لغات', label: 'الإنجليزية · الهولندية · العربية' },
  },
  {
    icon: '🎯',
    en: { value: 'Job guarantee', label: 'training with placement' },
    nl: { value: 'Baangarantie', label: 'opleiding met plaatsing' },
    ar: { value: 'ضمان وظيفة', label: 'تدريب مع التوظيف' },
  },
]

export default function TrustStrip() {
  const { lang } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section
      style={{ background: 'linear-gradient(135deg, #1e293b 0%, #2d3f55 100%)' }}
    >
      <div className="container-rwa py-10" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map(({ icon, ...translations }, i) => {
            const tx = translations[lang] ?? translations.en
            const isLast = i === STATS.length - 1

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`flex items-center gap-4 px-6 py-5 ${
                  !isLast
                    ? 'border-b lg:border-b-0 lg:border-r border-white/10 last-of-type:border-b-0'
                    : ''
                } ${i % 2 === 0 && i !== STATS.length - 2 ? 'border-r border-white/10 lg:border-r-0' : ''}`}
              >
                <span className="text-2xl flex-shrink-0">{icon}</span>
                <div>
                  <p
                    className="font-extrabold leading-tight text-white"
                    style={{ fontSize: 'clamp(17px, 1.8vw, 21px)' }}
                  >
                    {tx.value}
                  </p>
                  <p className="text-[13px] mt-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {tx.label}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
