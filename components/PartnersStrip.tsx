'use client'

import Image from 'next/image'
import { useLang } from '@/context/LanguageContext'

const PARTNERS = [
  { name: 'AkzoNobel',            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/AkzoNobel_Logo.svg/250px-AkzoNobel_Logo.svg.png' },
  { name: 'Cargill',              logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Cargill_logo.svg/250px-Cargill_logo.svg.png' },
  { name: 'Gemeente Amsterdam',   logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Logo_gemeente_Amsterdam.png' },
  { name: 'Gemeente Rotterdam',   logo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Gemeente_Rotterdam.svg' },
  { name: 'Van der Valk',         logo: 'https://upload.wikimedia.org/wikipedia/en/d/d1/Van_der_Valk_%28logo%29.png' },
  { name: 'Sparkle in Style',     logo: '/SIS.png' },
  { name: 'DDF',                  logo: '/Logo DDF Donne.png' },
  { name: 'Detaconcept',          logo: '/detaconcept-logo.svg' },
  { name: 'Prestatie',            logo: '/prestatie-logo.png' },
  { name: 'RockForce Jobs',       logo: '/rockforce-logo.jpg' },
]

export default function PartnersStrip() {
  const { lang } = useLang()
  const label = lang === 'nl' ? 'Werken met' : lang === 'ar' ? 'نعمل مع' : 'Working with'

  return (
    <section className="bg-sand py-16 overflow-hidden">
      <div className="container-rwa mb-10">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-border" />
          <p className="text-xs font-bold uppercase tracking-widest text-muted whitespace-nowrap">{label}</p>
          <div className="flex-1 h-px bg-gray-border" />
        </div>
      </div>

      {/* Marquee track */}
      <div className="relative flex">
        <div className="flex animate-marquee gap-8 pr-8">
          {[...PARTNERS, ...PARTNERS].map(({ name, logo }, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center bg-white border border-gray-border rounded-2xl px-6 transition-all duration-300 group"
              style={{ height: 80, minWidth: 140 }}
              title={name}
            >
              <div
                className="relative w-24 h-10 transition-all duration-300"
                style={{ filter: 'grayscale(1) opacity(0.6)' }}
                onMouseEnter={e => (e.currentTarget.style.filter = 'grayscale(0) opacity(1)')}
                onMouseLeave={e => (e.currentTarget.style.filter = 'grayscale(1) opacity(0.6)')}
              >
                <Image src={logo} alt={name} fill className="object-contain" unoptimized />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
