'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center bg-beige rounded-full p-1 border border-border-color">
      <button
        onClick={() => setLanguage('nl')}
        className={`px-3 py-1 rounded-full text-xs font-inter font-medium transition-all ${
          language === 'nl'
            ? 'bg-dark text-cream shadow-sm'
            : 'text-light-text hover:text-body-text'
        }`}
      >
        NL
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-xs font-inter font-medium transition-all ${
          language === 'en'
            ? 'bg-dark text-cream shadow-sm'
            : 'text-light-text hover:text-body-text'
        }`}
      >
        EN
      </button>
    </div>
  )
}
