'use client'

import { useRef, useState, useMemo } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useLang } from '@/context/LanguageContext'
import { dict } from '@/lib/i18n'
import { JOBS, jobTitle, jobSchedule, jobChips } from '@/lib/jobs'

export default function JobsSection() {
  const { lang } = useLang()
  const tx = dict[lang]
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [city, setCity] = useState('')

  const cities = useMemo(() => Array.from(new Set(JOBS.map(j => j.city))).sort(), [])

  const filtered = useMemo(() =>
    JOBS.filter(j => !city || j.city === city).slice(0, 8),
    [city]
  )

  return (
    <section id="jobs" className="bg-sand pt-16 pb-20">
      <div className="container-rwa">
        {/* Header row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <h2 className="font-extrabold text-ink" style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}>
            {tx.jobs.title}
          </h2>
          <div className="flex items-center gap-3">
            <select
              value={city}
              onChange={e => setCity(e.target.value)}
              className="input text-sm py-2 w-auto"
              style={{ minWidth: 140 }}
            >
              <option value="">{lang === 'nl' ? 'Alle steden' : lang === 'ar' ? 'كل المدن' : 'All cities'}</option>
              {cities.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <Link
              href="/jobs"
              className="text-sm font-semibold text-muted border border-gray-border rounded-xl px-3 py-2 hover:border-accent hover:text-accent transition-colors whitespace-nowrap"
            >
              {tx.jobs.viewAll}
            </Link>
          </div>
        </div>

        {/* Jobs grid */}
        <div ref={ref} className="grid grid-cols-2 xl:grid-cols-4 gap-3">
          {filtered.map((job, i) => (
            <motion.article
              key={job.slug}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
              className="bg-white border border-gray-border rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-ink text-base leading-tight">
                {jobTitle(job, lang)}
              </h3>
              <div className="flex flex-wrap gap-1.5 text-xs text-muted">
                <span>{job.city}</span>
                <span>·</span>
                <span>{jobSchedule(job, lang)}</span>
                <span>·</span>
                <span>{job.company}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {jobChips(job, lang).map((chip) => (
                  <span key={chip} className="chip">{chip}</span>
                ))}
              </div>
              <Link href={`/apply?job=${job.slug}`} className="btn-primary self-start mt-auto">
                {tx.jobs.applyBtn}
              </Link>
            </motion.article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted py-12">
            {lang === 'nl' ? 'Geen vacatures gevonden voor deze stad.' : lang === 'ar' ? 'لا توجد وظائف لهذه المدينة.' : 'No jobs found for this city.'}
          </p>
        )}
      </div>
    </section>
  )
}
