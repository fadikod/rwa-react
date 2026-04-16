interface SectionHeaderProps {
  tag?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeader({ tag, title, subtitle, centered = false, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {tag && (
        <span className={`tag-badge mb-4 ${light ? 'bg-white/10 text-cream/70' : 'bg-beige text-terracotta'}`}>
          {tag}
        </span>
      )}
      <h2
        className={`font-playfair text-3xl md:text-4xl lg:text-5xl font-medium leading-tight whitespace-pre-line ${
          light ? 'text-cream' : 'text-dark'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-inter text-base md:text-lg leading-relaxed mt-4 max-w-2xl ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-cream/70' : 'text-light-text'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
