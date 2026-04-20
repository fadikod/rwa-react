'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useLang } from '@/context/LanguageContext'
import { dict } from '@/lib/i18n'

const RUBY_IMG = 'https://rwa-demo-fadi.netlify.app/assets/Ruby-pracht2.jpeg'

export default function ContactSection() {
  const { lang } = useLang()
  const tx = dict[lang].contact
  const about = dict[lang].about
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ role: '', name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-sand py-20">
      <div className="container-rwa">
        {/* Title row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-8">
          <h2 className="font-extrabold text-ink" style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}>
            {tx.title}
          </h2>
          <p className="text-muted text-sm">{tx.sub}</p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col gap-4"
        >
          {/* Top row: form + Meet Ruby card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Form card */}
            <div className="bg-white border border-gray-border rounded-2xl p-8">
              {sent ? (
                <p className="text-accent font-semibold py-4">{tx.sent}</p>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <select
                    className="input"
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    required
                  >
                    <option value="">{tx.roleLabel}</option>
                    <option value="candidate">{tx.roleCandidate}</option>
                    <option value="employer">{tx.roleEmployer}</option>
                  </select>

                  <input
                    className="input"
                    type="text"
                    placeholder={tx.namePlaceholder}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />

                  <input
                    className="input sm:col-span-2"
                    type="email"
                    placeholder={tx.emailPlaceholder}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />

                  <textarea
                    className="input sm:col-span-2"
                    rows={5}
                    placeholder={tx.messagePlaceholder}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />

                  <div className="sm:col-span-2">
                    <button type="submit" className="btn-primary">
                      {tx.send}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Meet Ruby card */}
            <div className="bg-white rounded-2xl p-6 flex flex-col justify-center gap-5"
              style={{ border: '1.5px solid #d4a96a' }}>
              <div className="flex items-center gap-5">
                <div className="relative flex-shrink-0 rounded-full overflow-hidden"
                  style={{ width: 96, height: 96, border: '2.5px solid #d4a96a' }}>
                  <Image
                    src={RUBY_IMG}
                    alt="Ruby Pracht"
                    fill
                    className="object-cover object-top"
                    unoptimized
                  />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-ink text-base mb-2">{lang === 'ar' ? 'تعرّف على روبي' : 'Meet Ruby'}</p>
                  <p className="text-sm text-ink leading-relaxed">
                    {about.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Address bar */}
          <div className="bg-white border border-gray-border rounded-2xl px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
            style={{ borderLeft: '4px solid var(--accent, #b46c3e)' }}
          >
            <p className="text-sm">
              <span className="font-semibold text-accent">{tx.emailLabel}:</span>{' '}
              <span className="text-ink">{tx.emailValue}</span>
            </p>
            <p className="text-sm">
              <span className="font-semibold text-accent">{tx.phoneLabel}:</span>{' '}
              <span className="text-ink">{tx.phoneValue}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
