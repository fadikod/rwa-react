'use client'

import { useRef } from 'react'
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

  return (
    <section id="jobs" className="bg-sand pt-16 pb-20">
      <div className="container-rwa">
        {/* Header row */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-extrabold text-ink" style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}>
            {tx.jobs.title}
          </h2>
          <Link
            href="/jobs"
            className="text-sm font-semibold text-muted border border-gray-border rounded-xl px-3 py-2 hover:border-accent hover:text-accent transition-colors"
          >
            {tx.jobs.viewAll}
          </Link>
        </div>

        {/* Jobs grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"
        >
          {JOBS.slice(0, 8).map((job, i) => (
            <motion.article
              key={job.slug}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
              className="bg-white border border-gray-border rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-ink text-lg leading-tight">
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

              <Link
                href={`/apply?job=${job.slug}`}
                className="btn-primary self-start mt-1"
              >
                {tx.jobs.applyBtn}
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
