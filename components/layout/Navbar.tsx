'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import LanguageToggle from '@/components/shared/LanguageToggle'

export default function Navbar() {
  const { t } = useLanguage()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/diensten', label: t(content.nav.diensten) },
    { href: '/opleidingen', label: t(content.nav.opleidingen) },
    { href: '/over-ons', label: t(content.nav.overOns) },
    { href: '/contact', label: t(content.nav.contact) },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/95 backdrop-blur-sm shadow-sm border-b border-border-color' : 'bg-transparent'
      }`}
    >
      <nav className="container-max px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="font-playfair text-xl font-600 text-dark tracking-wide group-hover:text-terracotta transition-colors">
              [Studio Name]
            </span>
            <span className="font-cormorant text-xs text-light-text tracking-[0.2em] uppercase mt-0.5">
              Beauty & Styling
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-inter text-sm tracking-wide transition-colors ${
                  isActive(link.href)
                    ? 'text-terracotta font-medium'
                    : 'text-body-text hover:text-terracotta'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: lang toggle + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle />
            <Link href="/contact" className="btn-primary text-sm">
              {t(content.nav.bookCta)}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-dark"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-border-color px-6 py-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`font-inter text-base transition-colors ${
                isActive(link.href) ? 'text-terracotta font-medium' : 'text-body-text'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-2 border-t border-border-color">
            <LanguageToggle />
            <Link href="/contact" className="btn-primary text-sm" onClick={() => setMobileOpen(false)}>
              {t(content.nav.bookCta)}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
