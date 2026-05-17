'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '@/context/LanguageContext'
import { dict } from '@/lib/i18n'

export default function ContactSection() {
  const { lang } = useLang()
  const tx = dict[lang].contact
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
          {/* Form card — full width */}
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
