'use client'

import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import SectionHeader from '@/components/shared/SectionHeader'
import CtaBanner from '@/components/home/CtaBanner'
import { StarIcon, LightBulbIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

const pillarIconMap = {
  star: StarIcon,
  'light-bulb': LightBulbIcon,
  'rocket-launch': RocketLaunchIcon,
}

export default function OverOnsPage() {
  const { t } = useLanguage()
  const about = content.about

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-beige border-b border-border-color">
        <div className="container-max px-6 md:px-12 lg:px-20">
          <SectionHeader
            tag={t(about.hero.tag)}
            title={t(about.hero.title)}
            subtitle={t(about.hero.subtitle)}
          />
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-cream">
        <div className="container-max px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-beige to-[#e8ddd4] rounded-2xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center">
                  <p className="font-playfair text-6xl text-terracotta/20 font-medium">[Studio Name]</p>
                  <p className="font-cormorant text-lg text-taupe/50 mt-2 tracking-[0.2em] uppercase">
                    {t({ nl: 'Studioruimte foto', en: 'Studio space photo' })}
                  </p>
                </div>
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -right-6 bg-white border border-border-color rounded-2xl p-5 shadow-lg">
                <p className="font-playfair text-3xl font-medium text-terracotta">10+</p>
                <p className="font-inter text-xs text-light-text">
                  {t({ nl: 'Jaar vakkennis', en: 'Years of expertise' })}
                </p>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="tag-badge bg-beige text-terracotta mb-4">{t(about.story.tag)}</span>
              <h2 className="font-playfair text-3xl md:text-4xl font-medium text-dark leading-tight whitespace-pre-line mb-6">
                {t(about.story.title)}
              </h2>
              <p className="font-inter text-base text-light-text leading-relaxed">
                {t(about.story.body)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy pillars */}
      <section className="section-padding bg-dark">
        <div className="container-max px-6 md:px-12 lg:px-20">
          <SectionHeader
            tag={t({ nl: 'Onze Filosofie', en: 'Our Philosophy' })}
            title={t({ nl: 'Drie pijlers van de studio', en: 'Three pillars of the studio' })}
            centered
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {about.pillars.map((pillar, i) => {
              const Icon = pillarIconMap[pillar.icon as keyof typeof pillarIconMap] || StarIcon
              return (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
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
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-cream">
        <div className="container-max px-6 md:px-12 lg:px-20">
          <SectionHeader
            tag={t(about.team.tag)}
            title={t(about.team.title)}
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {about.team.members.map((member, i) => (
              <div key={i} className="bg-white border border-border-color rounded-2xl overflow-hidden card-hover">
                {/* Photo placeholder */}
                <div className="h-48 bg-gradient-to-br from-beige to-[#e0d5c8] flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-taupe/20 flex items-center justify-center">
                    <span className="font-playfair text-2xl text-taupe/50">
                      {member.name.split(' ')[0][0]}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-lg font-medium text-dark mb-1">{member.name}</h3>
                  <p className="font-inter text-sm font-medium text-terracotta mb-1">{t(member.role)}</p>
                  <p className="font-inter text-xs text-light-text">{t(member.specialty)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-beige border-y border-border-color">
        <div className="container-max px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <span className="tag-badge bg-white text-terracotta mb-3">{t(about.partners.tag)}</span>
            <h3 className="font-playfair text-2xl font-medium text-dark mt-4 mb-2">
              {t(about.partners.title)}
            </h3>
            <p className="font-inter text-sm text-light-text max-w-xl mx-auto">
              {t(about.partners.subtitle)}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {about.partners.items.map((partner) => (
              <div
                key={partner}
                className="bg-white border border-border-color rounded-xl px-6 py-4 font-inter text-sm text-body-text shadow-sm"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
