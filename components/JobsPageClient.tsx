'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '@/context/LanguageContext'
import { dict } from '@/lib/i18n'
import { JOBS, jobTitle, jobSchedule, jobDescription, jobChips } from '@/lib/jobs'

const SCHEDULES_EN = ['Full-time', 'Part-time', 'Flexible']

export default function JobsPageClient() {
  const { lang } = useLang()
  const tx = dict[lang]

  const [search, setSearch] = useState('')
  const [cityFilter, setCityFilter] = useState('all')
  const [scheduleFilter, setScheduleFilter] = useState('all')

  const cities = useMemo(() => {
    const unique = Array.from(new Set(JOBS.map((j) => j.city))).sort()
    return unique
  }, [])

  const filtered = useMemo(() => {
    return JOBS.filter((job) => {
      const title = jobTitle(job, lang).toLowerCase()
      const desc = jobDescription(job, lang).toLowerCase()
      const chips = jobChips(job, lang).join(' ').toLowerCase()
      const q = search.toLowerCase()

      const matchesSearch =
        !q ||
        title.includes(q) ||
        desc.includes(q) ||
        job.city.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        chips.includes(q)

      const matchesCity = cityFilter === 'all' || job.city === cityFilter

      const matchesSchedule =
        scheduleFilter === 'all' ||
        job.schedule.en === scheduleFilter

      return matchesSearch && matchesCity && matchesSchedule
    })
  }, [search, cityFilter, scheduleFilter, lang])

  const scheduleLabel = (s: string) => {
    if (s === 'Full-time') return lang === 'nl' ? 'Voltijd' : 'Full-time'
    if (s === 'Part-time') return lang === 'nl' ? 'Deeltijd' : 'Part-time'
    if (s === 'Flexible') return lang === 'nl' ? 'Flexibel' : 'Flexible'
    return s
  }

  const clearFilters = () => {
    setSearch('')
    setCityFilter('all')
    setScheduleFilter('all')
  }

  const hasFilters = search || cityFilter !== 'all' || scheduleFilter !== 'all'

  return (
    <div className="bg-sand min-h-screen pt-[90px]">
      {/* Page header */}
      <div className="bg-white border-b border-gray-border">
        <div className="container-rwa py-8">
          <h1 className="font-extrabold text-ink mb-1" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
            {tx.jobs.title}
          </h1>
          <p className="text-muted text-sm">
            {filtered.length} {lang === 'nl' ? 'vacatures gevonden' : 'positions found'}
          </p>
        </div>
      </div>

      {/* Filter bar */}
      <div className="bg-white border-b border-gray-border sticky top-[90px] z-30 shadow-sm">
        <div className="container-rwa py-4 flex flex-wrap gap-3 items-center">
          {/* Search */}
          <div className="relative flex-1 min-w-[200px]">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              className="input pl-9 w-full"
              type="text"
              placeholder={lang === 'nl' ? 'Zoek op functie, stad of bedrijf…' : 'Search by title, city or company…'}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* City filter */}
          <select
            className="input w-auto min-w-[150px]"
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
          >
            <option value="all">{lang === 'nl' ? 'Alle steden' : 'All cities'}</option>
            {cities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          {/* Schedule filter */}
          <select
            className="input w-auto min-w-[150px]"
            value={scheduleFilter}
            onChange={(e) => setScheduleFilter(e.target.value)}
          >
            <option value="all">{lang === 'nl' ? 'Alle contracten' : 'All contract types'}</option>
            {SCHEDULES_EN.map((s) => (
              <option key={s} value={s}>{scheduleLabel(s)}</option>
            ))}
          </select>

          {/* Clear */}
          {hasFilters && (
            <button
              onClick={clearFilters}
              className="text-sm font-semibold text-accent hover:text-accent-dark transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              {lang === 'nl' ? 'Wis filters' : 'Clear filters'}
            </button>
          )}
        </div>
      </div>

      {/* Jobs grid */}
      <div className="container-rwa py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted text-lg mb-3">
              {lang === 'nl' ? 'Geen vacatures gevonden.' : 'No positions found.'}
            </p>
            <button onClick={clearFilters} className="btn-primary">
              {lang === 'nl' ? 'Wis filters' : 'Clear filters'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((job, i) => (
                <motion.article
                  key={job.slug}
                  layout
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                  className="bg-white border border-gray-border rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-ink text-lg leading-tight">
                    {jobTitle(job, lang)}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 text-xs text-muted">
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
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

                  <p className="text-muted text-sm leading-relaxed flex-1">
                    {jobDescription(job, lang)}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {jobChips(job, lang).map((chip) => (
                      <span key={chip} className="chip">{chip}</span>
                    ))}
                  </div>

                  <Link
                    href={`/apply?job=${job.slug}`}
                    className="btn-primary self-start mt-1"
                  >
                    {tx.jobs.applyBtn}
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  )
}
