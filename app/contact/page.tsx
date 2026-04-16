'use client'

import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import SectionHeader from '@/components/shared/SectionHeader'
import ContactForm from '@/components/shared/ContactForm'
import { MapPinIcon, EnvelopeIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function ContactPage() {
  const { t } = useLanguage()
  const c = content.contact

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-beige border-b border-border-color">
        <div className="container-max px-6 md:px-12 lg:px-20">
          <SectionHeader
            tag={t(c.hero.tag)}
            title={t(c.hero.title)}
            subtitle={t(c.hero.subtitle)}
          />
        </div>
      </section>

      {/* Contact layout */}
      <section className="section-padding bg-cream">
        <div className="container-max px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Form — takes 2/3 */}
            <div className="lg:col-span-2">
              <h3 className="font-playfair text-2xl font-medium text-dark mb-8">
                {t({ nl: 'Stuur ons een bericht', en: 'Send us a message' })}
              </h3>
              <ContactForm />
            </div>

            {/* Info sidebar — 1/3 */}
            <div className="space-y-6">
              {/* Contact details card */}
              <div className="bg-white border border-border-color rounded-2xl p-7">
                <h4 className="font-playfair text-lg font-medium text-dark mb-6">
                  {t({ nl: 'Contactgegevens', en: 'Contact details' })}
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPinIcon className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-inter text-xs text-light-text mb-0.5">
                        {t(c.info.address)}
                      </p>
                      <p className="font-inter text-sm text-body-text">{c.info.addressValue}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <EnvelopeIcon className="w-5 h-5 text-terracotta flex-shrink-0" />
                    <a
                      href={`mailto:${c.info.email}`}
                      className="font-inter text-sm text-body-text hover:text-terracotta transition-colors"
                    >
                      {c.info.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <PhoneIcon className="w-5 h-5 text-terracotta flex-shrink-0" />
                    <a
                      href={`tel:${c.info.phone}`}
                      className="font-inter text-sm text-body-text hover:text-terracotta transition-colors"
                    >
                      {c.info.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Opening hours card */}
              <div className="bg-white border border-border-color rounded-2xl p-7">
                <div className="flex items-center gap-2 mb-5">
                  <ClockIcon className="w-5 h-5 text-terracotta" />
                  <h4 className="font-playfair text-lg font-medium text-dark">
                    {t(c.info.hours.title)}
                  </h4>
                </div>
                <div className="space-y-2.5">
                  {c.info.hours.items.map((item, i) => {
                    const time = typeof item.time === 'string' ? item.time : t(item.time as { nl: string; en: string })
                    return (
                      <div key={i} className="flex justify-between items-center">
                        <span className="font-inter text-sm text-body-text">{t(item.day)}</span>
                        <span className={`font-inter text-sm ${time === 'Gesloten' || time === 'Closed' ? 'text-light-text' : 'text-terracotta font-medium'}`}>
                          {time}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-beige border border-border-color rounded-2xl overflow-hidden h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPinIcon className="w-8 h-8 text-taupe/40 mx-auto mb-2" />
                  <p className="font-inter text-xs text-light-text">
                    {t({ nl: 'Google Maps embed', en: 'Google Maps embed' })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick links strip */}
      <section className="py-16 bg-beige border-t border-border-color">
        <div className="container-max px-6 md:px-12 lg:px-20 text-center">
          <p className="font-inter text-sm text-light-text mb-6">
            {t({ nl: 'Of bekijk direct een van onze diensten of opleidingen', en: 'Or browse directly to one of our services or courses' })}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: '/diensten', label: { nl: 'Diensten bekijken', en: 'Browse services' } },
              { href: '/opleidingen', label: { nl: 'Opleidingen bekijken', en: 'Browse courses' } },
              { href: '/over-ons', label: { nl: 'Over ons', en: 'About us' } },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="btn-outline text-sm"
              >
                {t(link.label)}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
