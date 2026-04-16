'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/lib/content'

export default function Footer() {
  const { t } = useLanguage()

  const serviceLinks = [
    { href: '/diensten#kledingstijladvies', label: { nl: 'Kledingstijladvies', en: 'Clothing Style Advice' } },
    { href: '/diensten#kleuranalyse', label: { nl: 'Kleuranalyse', en: 'Colour Analysis' } },
    { href: '/diensten#kleurenpaspoort', label: { nl: 'Kleurenpaspoort', en: 'Colour Passport' } },
    { href: '/diensten#zakelijk-kledingadvies', label: { nl: 'Zakelijk Kledingadvies', en: 'Business Styling' } },
    { href: '/diensten#mannen-styling', label: { nl: 'Mannen Styling', en: "Men's Styling" } },
    { href: '/diensten#incompany', label: { nl: 'In-Company Training', en: 'In-Company Training' } },
  ]

  const courseLinks = [
    { href: '/opleidingen#beauty-stylist', label: { nl: 'Beauty Stylist Certificering', en: 'Beauty Stylist Certification' } },
    { href: '/opleidingen#kleuranalyse-opleiding', label: { nl: 'Kleuranalyse Opleiding', en: 'Colour Analysis Training' } },
    { href: '/opleidingen#kleurexpert', label: { nl: 'Kleurexpert Verdieping', en: 'Colour Expert Advanced' } },
    { href: '/opleidingen#mannen-styling-opleiding', label: { nl: 'Mannen Styling Opleiding', en: "Men's Styling Programme" } },
  ]

  const companyLinks = [
    { href: '/over-ons', label: { nl: 'Over Ons', en: 'About Us' } },
    { href: '/contact', label: { nl: 'Contact', en: 'Contact' } },
  ]

  return (
    <footer className="bg-dark text-cream/80">
      <div className="container-max px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="font-playfair text-xl text-cream font-medium">[Studio Name]</span>
              <p className="font-cormorant text-xs tracking-[0.2em] uppercase text-cream/50 mt-0.5">
                Beauty & Styling
              </p>
            </div>
            <p className="font-inter text-sm text-cream/60 leading-relaxed mb-6">
              {t(content.footer.tagline)}
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {['instagram', 'linkedin', 'facebook'].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream/60 transition-all text-xs font-inter uppercase font-medium"
                >
                  {social[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-inter text-xs font-medium tracking-widest uppercase text-cream/40 mb-4">
              {t(content.footer.diensten)}
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-cream/60 hover:text-cream transition-colors"
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-inter text-xs font-medium tracking-widest uppercase text-cream/40 mb-4">
              {t(content.footer.opleidingen)}
            </h4>
            <ul className="space-y-2.5">
              {courseLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-cream/60 hover:text-cream transition-colors"
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h4 className="font-inter text-xs font-medium tracking-widest uppercase text-cream/40 mb-4">
              {t(content.footer.bedrijf)}
            </h4>
            <ul className="space-y-2.5 mb-6">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-cream/60 hover:text-cream transition-colors"
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-1.5 text-sm font-inter text-cream/50">
              <p>info@[studioname].nl</p>
              <p>+31 (0)88 000 00 00</p>
              <p>[Stad], Nederland</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-inter text-xs text-cream/30">{t(content.footer.copyright)}</p>
          <div className="flex gap-4">
            {['Privacy Policy', 'Algemene Voorwaarden'].map((item) => (
              <a key={item} href="#" className="font-inter text-xs text-cream/30 hover:text-cream/60 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
