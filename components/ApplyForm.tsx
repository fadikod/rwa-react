'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useLang } from '@/context/LanguageContext'
import { dict } from '@/lib/i18n'
import { getJob, jobTitle, jobSchedule, jobDescription, jobChips } from '@/lib/jobs'

export default function ApplyForm() {
  const { lang } = useLang()
  const tx = dict[lang]
  const searchParams = useSearchParams()
  const slug = searchParams.get('job') ?? ''
  const job = getJob(slug)

  const [submitted, setSubmitted] = useState(false)
  const [cvFile, setCvFile] = useState<File | null>(null)
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    availability: '',
    motivation: '',
    consent: false,
  })

  const handleFile = (file: File | null) => {
    if (!file) return
    if (file.size > 5 * 1024 * 1024) return
    setCvFile(file)
  }

  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const data = new FormData()
      data.append('_form_type', 'job-application')
      data.append('job', slug)
      data.append('firstName', form.firstName)
      data.append('lastName', form.lastName)
      data.append('email', form.email)
      data.append('phone', form.phone)
      data.append('availability', form.availability)
      data.append('motivation', form.motivation)
      if (cvFile) data.append('cv', cvFile)

      await fetch('https://formbold.com/s/9gBMM', {
        method: 'POST',
        body: data,
      })
      setSubmitted(true)
    } catch {
      // still show success to user — Formbold may have received it
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  const field = (label: string, children: React.ReactNode, span2 = false) => (
    <div className={`flex flex-col gap-1.5${span2 ? ' sm:col-span-2' : ''}`}>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted">{label}</label>
      {children}
    </div>
  )

  return (
    <div className="container-rwa py-12">
      <Link
        href="/#jobs"
        className="inline-flex items-center gap-1 text-sm font-semibold text-muted hover:text-ink transition-colors mb-8"
      >
        {tx.nav.back}
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* ── Form ── */}
        <div className="lg:col-span-2 bg-white border border-gray-border rounded-2xl p-8">
          <h1 className="font-extrabold text-ink mb-6" style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}>
            {tx.apply.title}{' '}
            {job && <span className="text-accent">{jobTitle(job, lang)}</span>}
          </h1>

          {submitted ? (
            <p className="text-accent font-semibold text-lg py-4">{tx.apply.success}</p>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {field(tx.apply.firstName,
                <input className="input" type="text" required
                  value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} />
              )}
              {field(tx.apply.lastName,
                <input className="input" type="text" required
                  value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} />
              )}
              {field(tx.apply.email,
                <input className="input" type="email" required
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              )}
              {field(tx.apply.phone,
                <input className="input" type="tel" pattern="[+\d\s\(\)\-]{6,}" required
                  value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              )}

              {field(tx.apply.availability,
                <select className="input" required
                  value={form.availability} onChange={e => setForm({ ...form, availability: e.target.value })}>
                  {tx.apply.availOptions.map((opt, i) => (
                    <option key={i} value={i === 0 ? '' : opt} disabled={i === 0}>{opt}</option>
                  ))}
                </select>,
                true
              )}

              {field(tx.apply.motivation,
                <textarea className="input" rows={4} placeholder={tx.apply.motivationPlaceholder} required
                  value={form.motivation} onChange={e => setForm({ ...form, motivation: e.target.value })} />,
                true
              )}

              {/* CV Upload */}
              {field(tx.apply.cvLabel,
                <div
                  className={`relative border-2 border-dashed rounded-xl p-5 flex flex-col items-center gap-2 cursor-pointer transition-colors
                    ${dragOver ? 'border-accent bg-accent/5' : 'border-gray-border hover:border-accent hover:bg-accent/5'}`}
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={e => { e.preventDefault(); setDragOver(true) }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={e => { e.preventDefault(); setDragOver(false); handleFile(e.dataTransfer.files[0]) }}
                >
                  <svg className="w-8 h-8 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 9.414V19a2 2 0 01-2 2z" />
                  </svg>
                  {cvFile ? (
                    <p className="text-sm font-semibold text-accent text-center">
                      {tx.apply.cvSelected} {cvFile.name}
                    </p>
                  ) : (
                    <p className="text-sm text-muted text-center">{tx.apply.cvHint}</p>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={e => handleFile(e.target.files?.[0] ?? null)}
                  />
                </div>,
                true
              )}

              {/* Consent */}
              <div className="sm:col-span-2 flex items-start gap-3">
                <input type="checkbox" id="consent" required
                  checked={form.consent} onChange={e => setForm({ ...form, consent: e.target.checked })}
                  className="mt-0.5 accent-accent w-4 h-4 rounded" />
                <label htmlFor="consent" className="text-sm text-muted leading-relaxed cursor-pointer">
                  {tx.apply.consent}
                </label>
              </div>

              <div className="sm:col-span-2">
                <button type="submit" className="btn-primary" disabled={submitting}>
                  {submitting ? '...' : tx.apply.submit}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* ── Job sidebar ── */}
        {job && (
          <div className="bg-white border border-gray-border rounded-2xl p-7 flex flex-col gap-5 sticky top-28">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted mb-2">
                {tx.apply.applyingFor}
              </p>
              <h2 className="font-extrabold text-ink text-xl leading-tight mb-3">
                {jobTitle(job, lang)}
              </h2>
              <div className="flex flex-wrap gap-2 text-xs text-muted">
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {job.city}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {jobSchedule(job, lang)}
                </span>
                <span>·</span>
                <span>{job.company}</span>
              </div>
            </div>

            <div className="border-t border-gray-border pt-4">
              <p className="text-xs font-bold uppercase tracking-widest text-muted mb-2">
                {tx.apply.aboutRole}
              </p>
              <p className="text-sm text-ink leading-relaxed">
                {jobDescription(job, lang)}
              </p>
            </div>

            <div className="border-t border-gray-border pt-4">
              <p className="text-xs font-bold uppercase tracking-widest text-muted mb-3">
                {tx.apply.requirements}
              </p>
              <div className="flex flex-wrap gap-2">
                {jobChips(job, lang).map(chip => (
                  <span key={chip} className="chip">{chip}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
