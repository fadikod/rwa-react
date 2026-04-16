'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import SectionHeader from '@/components/shared/SectionHeader'
import CtaBanner from '@/components/home/CtaBanner'
import { StarIcon, LightBulbIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'
import { motion, useInView } from 'framer-motion'

const pillarIconMap = {
  star: StarIcon,
  'light-bulb': LightBulbIcon,
  'rocket-launch': RocketLaunchIcon,
}

const teamPhotos = [
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=600&q=80',
]

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function OverOnsPage() {
  const { t } = useLanguage()
  const about = content.about

  return (
    <>
      {/* Hero with background image */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1920&q=80"
          alt="Styling studio"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/85 via-dark/60 to-dark/20" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-beige to-transparent" />

        <div className="relative container-max px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="tag-badge bg-white/10 text-cream/80 mb-5">
              {t(about.hero.tag)}
            </span>
            <h1 className="font-playfair text-5xl md:text-6xl font-medium text-cream leading-tight whitespace-pre-line mt-3 mb-5">
              {t(about.hero.title)}
            </h1>
            <p className="font-inter text-lg text-cream/75 max-w-xl leading-relaxed">
              {t(about.hero.subtitle)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-beige">
        <div className="container-max px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Studio photo */}
            <AnimatedSection>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80"
                  alt="Studio interior"
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                {/* Floating stat */}
                <div className="absolute -bottom-5 -right-5 bg-white border border-border-color rounded-2xl p-5 shadow-lg">
                  <p className="font-playfair text-3xl font-medium text-terracotta">10+</p>
                  <p className="font-inter text-xs text-light-text">
                    {t({ nl: 'Jaar vakkennis', en: 'Years of expertise' })}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Text */}
            <AnimatedSection delay={0.15}>
              <span className="tag-badge bg-white text-terracotta mb-4">{t(about.story.tag)}</span>
              <h2 className="font-playfair text-3xl md:text-4xl font-medium text-dark leading-tight whitespace-pre-line mb-6 mt-3">
                {t(about.story.title)}
              </h2>
              <p className="font-inter text-base text-light-text leading-relaxed">
                {t(about.story.body)}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy pillars */}
      <section className="section-padding bg-dark">
        <div className="container-max px-6 md:px-12 lg:px-20">
          <AnimatedSection>
            <SectionHeader
              tag={t({ nl: 'Onze Filosofie', en: 'Our Philosophy' })}
              title={t({ nl: 'Drie pijlers van de studio', en: 'Three pillars of the studio' })}
              centered
              light
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {about.pillars.map((pillar, i) => {
              const Icon = pillarIconMap[pillar.icon as keyof typeof pillarIconMap] || StarIcon
              return (
                <AnimatedSection key={i} delay={i * 0.12}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center h-full hover:bg-white/8 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-terracotta/10 flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-7 h-7 text-terracotta" />
                    </div>
                    <h3 className="font-playfair text-xl font-medium text-cream mb-3">
                      {t(pillar.title)}
                    </h3>
                    <p className="font-inter text-sm text-cream/60 leading-relaxed">
                      {t(pillar.description)}
                    </p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team with real photos */}
      <section className="section-padding bg-cream">
        <div className="container-max px-6 md:px-12 lg:px-20">
          <AnimatedSection>
            <SectionHeader
              tag={t(about.team.tag)}
              title={t(about.team.title)}
              centered
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {about.team.members.map((member, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white border border-border-color rounded-2xl overflow-hidden card-hover group">
                  {/* Real team photo */}
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={teamPhotos[i]}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-lg font-medium text-dark mb-0.5">{member.name}</h3>
                    <p className="font-inter text-sm font-medium text-terracotta mb-1">{t(member.role)}</p>
                    <p className="font-inter text-xs text-light-text">{t(member.specialty)}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-beige border-y border-border-color">
        <div className="container-max px-6 md:px-12 lg:px-20">
          <AnimatedSection>
            <div className="text-center mb-10">
              <span className="tag-badge bg-white text-terracotta mb-3">{t(about.partners.tag)}</span>
              <h3 className="font-playfair text-2xl font-medium text-dark mt-4 mb-2">
                {t(about.partners.title)}
              </h3>
              <p className="font-inter text-sm text-light-text max-w-xl mx-auto">
                {t(about.partners.subtitle)}
              </p>
            </div>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-4">
            {about.partners.items.map((partner, i) => (
              <AnimatedSection key={partner} delay={i * 0.06}>
                <div className="bg-white border border-border-color rounded-xl px-6 py-4 font-inter text-sm text-body-text shadow-sm hover:border-terracotta/30 hover:shadow-md transition-all cursor-default">
                  {partner}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
