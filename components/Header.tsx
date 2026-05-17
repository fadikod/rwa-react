'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useLang } from '@/context/LanguageContext'
import { dict } from '@/lib/i18n'

const LOGO = 'https://raw.githubusercontent.com/fadikod/rwa/main/assets/assetslogo.png'

export default function Header() {
  const { lang, setLang } = useLang()
  const tx = dict[lang]
  const pathname = usePathname()
  const isApplyPage = pathname?.startsWith('/apply') || pathname?.startsWith('/jobs')
  const router = useRouter()

  const [opacity, setOpacity] = useState(1)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Fade header on scroll (only on homepage)
  useEffect(() => {
    if (isApplyPage) return
    let rafId: number
    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        setOpacity(Math.max(0, 1 - window.scrollY / 180))
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [isApplyPage])

  // Close menu on outside click or Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    const onOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onOutside)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onOutside)
    }
  }, [])

  const scrollTo = (id: string) => {
    if (id === 'jobs') {
      router.push('/jobs')
      return
    }
    if (pathname !== '/') {
      router.push(`/#${id}`)
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navClass = isApplyPage
    ? 'fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-border'
    : 'fixed top-0 left-0 right-0 z-50'

  const textColor = isApplyPage ? 'text-ink' : 'text-white'
  const pointerEvents = opacity === 0 ? 'pointer-events-none' : ''

  return (
    <header
      className={`${navClass} ${pointerEvents}`}
      style={isApplyPage ? {} : { opacity }}
    >
      <div className="container-rwa h-[90px] flex items-center justify-between gap-4">
        {/* Brand badge */}
        <Link
          href="/"
          className="hidden sm:flex items-center gap-3 px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
          style={isApplyPage ? { background: 'transparent', border: 'none', backdropFilter: 'none' } : {}}
        >
          <Image
            src={LOGO}
            alt="RWA logo"
            width={68}
            height={68}
            className="w-[68px] h-[68px] object-contain flex-shrink-0"
            unoptimized
          />
          <span className={`font-bold text-base leading-tight ${isApplyPage ? 'text-ink' : 'text-white'}`}>
            Refugee Work Agency
          </span>
        </Link>

        {/* Mobile logo (small) */}
        <Link href="/" className="flex sm:hidden items-center gap-2">
          <Image
            src={LOGO}
            alt="RWA logo"
            width={56}
            height={56}
            className="h-14 w-auto"
            unoptimized
          />
        </Link>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-8">
          {(['about', 'jobs', 'contact'] as const).map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`font-bold text-sm hover:opacity-70 transition-opacity ${textColor}`}
            >
              {tx.nav[id]}
            </button>
          ))}
        </nav>

        {/* Kebab menu */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label="Menu"
            className={`flex flex-col items-center justify-center gap-1.5 w-10 h-10 rounded-full hover:bg-white/20 transition-colors ${textColor}`}
          >
            <span className={`block w-1 h-1 rounded-full ${isApplyPage ? 'bg-ink' : 'bg-white'}`} />
            <span className={`block w-1 h-1 rounded-full ${isApplyPage ? 'bg-ink' : 'bg-white'}`} />
            <span className={`block w-1 h-1 rounded-full ${isApplyPage ? 'bg-ink' : 'bg-white'}`} />
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-12 w-48 rounded-2xl border border-gray-border bg-white/90 backdrop-blur-lg shadow-xl overflow-hidden z-50">
              {/* Mobile nav links */}
              <div className="flex flex-col md:hidden border-b border-gray-border py-2">
                {(['about', 'jobs', 'contact'] as const).map((id) => (
                  <button
                    key={id}
                    onClick={() => { scrollTo(id); setMenuOpen(false) }}
                    className="text-left px-4 py-2.5 text-sm font-semibold text-ink hover:bg-sand transition-colors"
                  >
                    {tx.nav[id]}
                  </button>
                ))}
              </div>

              {/* Language options */}
              <div className="py-2">
                {(['en', 'nl', 'ar'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setMenuOpen(false) }}
                    className={`w-full text-left px-4 py-2.5 text-sm font-semibold transition-colors flex items-center gap-2
                      ${lang === l ? 'text-accent' : 'text-ink hover:bg-sand'}`}
                  >
                    <span>{l === 'en' ? '🇬🇧' : l === 'nl' ? '🇳🇱' : '🇸🇾'}</span>
                    {tx.lang[l]}
                    {lang === l && <span className="ml-auto text-xs">✓</span>}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
