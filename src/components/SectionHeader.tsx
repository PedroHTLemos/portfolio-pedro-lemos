import { useScrollReveal } from '@/hooks/useScrollReveal'

interface SectionHeaderProps {
  label: string
  title: React.ReactNode
  subtitle?: string
}

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className="mb-16 opacity-0 translate-y-8 transition-all duration-700"
    >
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="text-base text-text-2 max-w-[560px] font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
