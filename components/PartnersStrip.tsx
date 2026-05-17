'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useLang } from '@/context/LanguageContext'

const PARTNERS = [
  {
    name: 'AkzoNobel',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/AkzoNobel_Logo.svg/250px-AkzoNobel_Logo.svg.png',
    scale: 0.8,
  },
  {
    name: 'Cargill',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Cargill_logo.svg/250px-Cargill_logo.svg.png',
    scale: 0.85,
  },
  {
    name: 'Gemeente Amsterdam',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Logo_gemeente_Amsterdam.png',
    scale: 0.9,
  },
  {
    name: 'Gemeente Rotterdam',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Gemeente_Rotterdam.svg',
    scale: 0.95,
  },
  {
    name: 'Van der Valk',
    logo: 'https://upload.wikimedia.org/wikipedia/en/d/d1/Van_der_Valk_%28logo%29.png',
    scale: 0.85,
  },
  {
    name: 'Sparkle in Style',
    logo: 'https://rwa-demo-fadi.netlify.app/assets/SIS_logo.jpg',
    scale: 1.3,
  },
  {
    name: 'DDF',
    logo: 'https://rwa-demo-fadi.netlify.app/assets/DDF.png',
    scale: 1.4,
  },
]

export default function PartnersStrip() {
  const { lang } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const label = lang === 'nl' ? 'Werken met' : lang === 'ar' ? 'نعمل مع' : 'Working with'

  return (
    <section className="bg-sand py-16">
      <div className="container-rwa">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-gray-border" />
            <p className="text-xs font-bold uppercase tracking-widest text-muted whitespace-nowrap">{label}</p>
            <div className="flex-1 h-px bg-gray-border" />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {PARTNERS.map(({ name, logo, scale }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white rounded-2xl border border-gray-border flex items-center justify-center p-5 hover:shadow-md transition-shadow duration-300"
                style={{ width: 180, height: 110 }}
                title={name}
              >
                <div className="relative w-full h-12" style={{ transform: `scale(${scale})` }}>
                  <Image
                    src={logo}
                    alt={name}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
