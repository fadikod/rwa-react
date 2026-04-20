'use client'

import { useLang } from '@/context/LanguageContext'
import { dict } from '@/lib/i18n'

export default function Footer() {
  const { lang } = useLang()
  const tx = dict[lang].footer
  const year = new Date().getFullYear()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-bg border-t border-gray-border">
      <div className="container-rwa py-8 flex flex-wrap items-center justify-between gap-4 text-sm text-muted">
        <div className="flex items-center gap-2">
          <span>{tx.rights.replace('{year}', String(year))}</span>
          <span className="border border-gray-border rounded px-1.5 py-0.5 text-xs font-semibold">
            {tx.demo}
          </span>
        </div>

        <nav className="flex items-center gap-5">
          {(['about', 'jobs', 'contact'] as const).map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="hover:text-ink transition-colors font-medium"
            >
              {tx[id]}
            </button>
          ))}
        </nav>
      </div>
    </footer>
  )
}
