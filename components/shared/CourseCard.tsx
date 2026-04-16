import Link from 'next/link'
import { ArrowRightIcon, ClockIcon, ComputerDesktopIcon, AcademicCapIcon } from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/20/solid'

interface CourseCardProps {
  id: string
  title: string
  level: string
  levelColor: string
  duration: string
  format: string
  description: string
  modules: string[]
  cta: string
}

const levelColors: Record<string, string> = {
  sage: 'bg-sage/10 text-sage',
  terracotta: 'bg-terracotta/10 text-terracotta',
  taupe: 'bg-taupe/10 text-taupe',
  dark: 'bg-dark/10 text-dark',
}

export default function CourseCard({
  id,
  title,
  level,
  levelColor,
  duration,
  format,
  description,
  modules,
  cta,
}: CourseCardProps) {
  const badgeClass = levelColors[levelColor] || levelColors.terracotta

  return (
    <div id={id} className="bg-white rounded-2xl border border-border-color card-hover overflow-hidden">
      {/* Card top accent */}
      <div className="h-1 bg-gradient-to-r from-terracotta to-taupe" />

      <div className="p-8">
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3 className="font-playfair text-xl font-medium text-dark leading-snug">{title}</h3>
          <span className={`tag-badge flex-shrink-0 text-[10px] ${badgeClass}`}>{level}</span>
        </div>

        <p className="font-inter text-sm text-light-text leading-relaxed mb-5">{description}</p>

        {/* Meta badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 font-inter text-xs text-taupe bg-beige px-3 py-1.5 rounded-full">
            <ClockIcon className="w-3.5 h-3.5" /> {duration}
          </span>
          <span className="inline-flex items-center gap-1.5 font-inter text-xs text-taupe bg-beige px-3 py-1.5 rounded-full">
            <ComputerDesktopIcon className="w-3.5 h-3.5" /> {format}
          </span>
        </div>

        {/* Modules */}
        <ul className="space-y-2 mb-6">
          {modules.slice(0, 4).map((module, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckIcon className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
              <span className="font-inter text-xs text-body-text">{module}</span>
            </li>
          ))}
          {modules.length > 4 && (
            <li className="font-inter text-xs text-light-text pl-6">
              +{modules.length - 4} meer modules
            </li>
          )}
        </ul>

        <Link
          href={`/contact?course=${id}`}
          className="btn-primary text-sm w-full justify-center"
        >
          <AcademicCapIcon className="w-4 h-4" />
          {cta}
        </Link>
      </div>
    </div>
  )
}
