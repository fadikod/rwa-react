'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useLang } from '@/context/LanguageContext'
import { dict } from '@/lib/i18n'

const STORY_IMG = '/success-story-mahdi.png'

const EXTRA_STORIES = [
  {
    en: {
      quote: 'Within three weeks of joining the programme I had my first interview. Now I work full-time in logistics.',
      name: 'Ahmad',
      role: 'Logistics Operator · Rotterdam',
    },
    nl: {
      quote: 'Binnen drie weken na aanmelding had ik mijn eerste sollicitatiegesprek. Nu werk ik voltijd in de logistiek.',
      name: 'Ahmad',
      role: 'Logistiek Medewerker · Rotterdam',
    },
    ar: {
      quote: 'في غضون ثلاثة أسابيع من الانضمام للبرنامج أجريت أول مقابلة عمل. الآن أعمل بدوام كامل في اللوجستيات.',
      name: 'أحمد',
      role: 'مشغّل لوجستي · روتردام',
    },
  },
  {
    en: {
      quote: 'RWA helped me translate my international experience into a Dutch career. The mentoring made all the difference.',
      name: 'Fatima',
      role: 'Customer Service · Amsterdam',
    },
    nl: {
      quote: 'RWA hielp me mijn internationale ervaring om te zetten in een Nederlandse carrière. De begeleiding maakte het verschil.',
      name: 'Fatima',
      role: 'Klantenservice · Amsterdam',
    },
    ar: {
      quote: 'ساعدني RWA على تحويل خبرتي الدولية إلى مسيرة مهنية هولندية. كان الإرشاد فارقاً حقيقياً.',
      name: 'فاطمة',
      role: 'خدمة العملاء · أمستردام',
    },
  },
]

export default function SuccessStory() {
  const { lang } = useLang()
  const tx = dict[lang].story
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-gray-bg py-20">
      <div className="container-rwa">
        {/* Main story card */}
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

        {/* Extra mini-testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {EXTRA_STORIES.map((s, i) => {
            const story = s[lang] ?? s.en
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.1, ease: 'easeOut' }}
                className="bg-white border border-gray-border rounded-2xl p-6 flex flex-col gap-3"
                style={{ boxShadow: '0 4px 14px rgba(2,8,23,.05)' }}
              >
                <span
                  className="text-accent select-none leading-none"
                  style={{ fontSize: '32px', fontFamily: 'Georgia, serif', opacity: 0.5 }}
                >
                  &ldquo;
                </span>
                <p className="text-ink text-[15px] leading-relaxed -mt-2">{story.quote}</p>
                <div className="mt-auto pt-2 border-t border-gray-border">
                  <p className="font-bold text-ink text-sm">{story.name}</p>
                  <p className="text-muted text-xs">{story.role}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
