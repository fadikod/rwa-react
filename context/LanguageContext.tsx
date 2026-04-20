'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { Lang } from '@/lib/i18n'

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const stored = localStorage.getItem('rwa-lang') as Lang | null
    if (stored === 'en' || stored === 'nl' || stored === 'ar') {
      setLangState(stored)
      applyLang(stored)
      return
    }
    const browser = navigator.language.toLowerCase()
    if (browser.startsWith('nl')) setLangState('nl')
    else if (browser.startsWith('ar')) setLangState('ar')
  }, [])

  const applyLang = (l: Lang) => {
    document.documentElement.lang = l
    document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr'
  }

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('rwa-lang', l)
    applyLang(l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
