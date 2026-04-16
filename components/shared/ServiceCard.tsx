import Link from 'next/link'
import {
  SparklesIcon,
  SwatchIcon,
  IdentificationIcon,
  BriefcaseIcon,
  UserCircleIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  sparkles: SparklesIcon,
  swatch: SwatchIcon,
  identification: IdentificationIcon,
  briefcase: BriefcaseIcon,
  'user-circle': UserCircleIcon,
  'building-office': BuildingOfficeIcon,
}

interface ServiceCardProps {
  icon: string
  title: string
  tag: string
  description: string
  duration?: string
  format?: string
  href?: string
  compact?: boolean
}

export default function ServiceCard({
  icon,
  title,
  tag,
  description,
  duration,
  format,
  href = '/diensten',
  compact = false,
}: ServiceCardProps) {
  const Icon = iconMap[icon] || SparklesIcon

  return (
    <div className={`bg-white rounded-2xl border border-border-color card-hover flex flex-col ${compact ? 'p-6' : 'p-8'}`}>
      <div className="flex items-start justify-between mb-5">
        <div className="w-12 h-12 rounded-xl bg-beige flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-terracotta" />
        </div>
        <span className="tag-badge bg-beige text-taupe text-[10px]">{tag}</span>
      </div>

      <h3 className={`font-playfair font-medium text-dark mb-3 ${compact ? 'text-lg' : 'text-xl'}`}>
        {title}
      </h3>

      <p className="font-inter text-sm text-light-text leading-relaxed flex-1 mb-5">
        {description}
      </p>

      {(duration || format) && (
        <div className="flex gap-3 mb-5">
          {duration && (
            <span className="font-inter text-xs text-taupe bg-beige px-3 py-1 rounded-full">
              {duration}
            </span>
          )}
          {format && (
            <span className="font-inter text-xs text-taupe bg-beige px-3 py-1 rounded-full">
              {format}
            </span>
          )}
        </div>
      )}

      <Link
        href={href}
        className="inline-flex items-center gap-1.5 font-inter text-sm font-medium text-terracotta hover:text-terracotta-dark transition-colors group"
      >
        {tag === 'Corporate' || tag === 'Business' ? (
          <>Meer info <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></>
        ) : (
          <>Meer info <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></>
        )}
      </Link>
    </div>
  )
}
