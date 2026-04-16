import Link from 'next/link'
import Image from 'next/image'
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
  image?: string
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
  image,
}: ServiceCardProps) {
  const Icon = iconMap[icon] || SparklesIcon

  return (
    <div className={`bg-white rounded-2xl border border-border-color card-hover flex flex-col overflow-hidden group`}>
      {/* Photo thumbnail */}
      {image && (
        <div className="relative h-44 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
          {/* Tag on photo */}
          <span className="absolute top-3 right-3 tag-badge bg-white/90 text-taupe text-[10px]">{tag}</span>
        </div>
      )}

      <div className={compact ? 'p-6 flex flex-col flex-1' : 'p-8 flex flex-col flex-1'}>
        {/* Icon (only when no image) */}
        {!image && (
          <div className="flex items-start justify-between mb-5">
            <div className="w-12 h-12 rounded-xl bg-beige flex items-center justify-center flex-shrink-0">
              <Icon className="w-6 h-6 text-terracotta" />
            </div>
            <span className="tag-badge bg-beige text-taupe text-[10px]">{tag}</span>
          </div>
        )}

        {/* Icon when image present */}
        {image && (
          <div className="w-10 h-10 rounded-xl bg-beige flex items-center justify-center flex-shrink-0 mb-4">
            <Icon className="w-5 h-5 text-terracotta" />
          </div>
        )}

        <h3 className={`font-playfair font-medium text-dark mb-3 ${compact ? 'text-lg' : 'text-xl'}`}>
          {title}
        </h3>

        <p className="font-inter text-sm text-light-text leading-relaxed flex-1 mb-5">
          {description}
        </p>

        {(duration || format) && (
          <div className="flex flex-wrap gap-2 mb-5">
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
          className="inline-flex items-center gap-1.5 font-inter text-sm font-medium text-terracotta hover:text-terracotta-dark transition-colors group/link"
        >
          Meer info <ArrowRightIcon className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
