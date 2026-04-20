'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useLang } from '@/context/LanguageContext'

const PARTNERS = [
  {
    name: 'AkzoNobel',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/AkzoNobel_Logo.svg/250px-AkzoNobel_Logo.svg.png',
  },
  {
    name: 'Cargill',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Cargill_logo.svg/250px-Cargill_logo.svg.png',
  },
  {
    name: 'Gemeente Amsterdam',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Logo_gemeente_Amsterdam.png',
  },
  {
    name: 'Gemeente Rotterdam',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Gemeente_Rotterdam.svg',
  },
  {
    name: 'Van der Valk',
    logo: 'https://upload.wikimedia.org/wikipedia/en/d/d1/Van_der_Valk_%28logo%29.png',
  },
  {
    name: 'Sparkle in Style',
    logo: 'https://rwa-demo-fadi.netlify.app/assets/SIS_logo.jpg',
  },
  {
    name: 'DDF',
    logo: 'https://rwa-demo-fadi.netlify.app/assets/DDF.png',
  },
]

export default function PartnersStrip() {
  const { lang } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const label = lang === 'nl' ? 'Onze werkgeverspartners' : lang === 'ar' ? 'شركاء أصحاب العمل' : 'Trusted employer partners'

  return (
    <section className="bg-white border-y border-gray-border py-14">
      <div className="container-rwa">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-bold uppercase tracking-widest text-muted mb-10"
        >
          {label}
        </motion.p>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center">
          {PARTNERS.map(({ name, logo }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex items-center justify-center w-full"
              title={name}
            >
              <div className="relative w-full h-14">
                <Image
                  src={logo}
                  alt={name}
                  fill
                  className="object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  unoptimized
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
