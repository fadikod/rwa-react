'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '@/context/LanguageContext'

const STATS = [
  {
    icon: '🏆',
    en: { value: '20+ years', label: 'expertise in reintegration & employment' },
    nl: { value: '20+ jaar', label: 'ervaring in re-integratie & werk' },
    ar: { value: '+٢٠ سنة', label: 'خبرة في إعادة الاندماج والتوظيف' },
  },
  {
    icon: '🤝',
    en: { value: '7 partners', label: 'trusted employer partners' },
    nl: { value: '7 partners', label: 'betrouwbare werkgeverspartners' },
    ar: { value: '٧ شركاء', label: 'شركاء أصحاب عمل موثوقون' },
  },
  {
    icon: '🌍',
    en: { value: '3 languages', label: 'English, Dutch & Arabic support' },
    nl: { value: '3 talen', label: 'Engels, Nederlands & Arabisch' },
    ar: { value: '٣ لغات', label: 'الإنجليزية والهولندية والعربية' },
  },
  {
    icon: '🎯',
    en: { value: 'Job guarantee', label: 'training with guaranteed placement' },
    nl: { value: 'Baangarantie', label: 'opleiding met plaatsingsgarantie' },
    ar: { value: 'ضمان وظيفة', label: 'تدريب مع ضمان التوظيف' },
  },
]

export default function TrustStrip() {
  const { lang } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section className="bg-white border-y border-gray-border py-10">
      <div className="container-rwa">
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STATS.map(({ icon, ...translations }, i) => {
            const tx = translations[lang] ?? translations.en
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center text-center gap-2 p-4"
              >
                <span className="text-3xl mb-1">{icon}</span>
                <p className="font-extrabold text-accent text-xl leading-tight">{tx.value}</p>
                <p className="text-muted text-xs leading-relaxed">{tx.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
