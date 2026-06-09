import { stackCategories, type StackCategory } from '@/data/portfolio'
import { SectionHeader } from '@/components/SectionHeader'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const itemColorMap: Record<StackCategory['color'], string> = {
  purple: 'bg-accent/10 border-accent/25 text-accent-2 hover:bg-accent/20 hover:-translate-y-0.5',
  green:  'bg-brand-green/10 border-brand-green/25 text-brand-green hover:bg-brand-green/20 hover:-translate-y-0.5',
  blue:   'bg-accent-3/10 border-accent-3/25 text-accent-3 hover:bg-accent-3/20 hover:-translate-y-0.5',
  amber:  'bg-brand-amber/10 border-brand-amber/25 text-brand-amber hover:bg-brand-amber/20 hover:-translate-y-0.5',
  pink:   'bg-brand-pink/10 border-brand-pink/25 text-brand-pink hover:bg-brand-pink/20 hover:-translate-y-0.5',
  gray:   'bg-text-2/8 border-text-2/15 text-text-2 hover:bg-text-2/15 hover:-translate-y-0.5',
}

function StackCard({ category, delay = 0 }: { category: StackCategory; delay?: number }) {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="bg-bg-3/85 border border-border-subtle rounded-2xl p-7 backdrop-blur-sm hover:border-border transition-all duration-300 opacity-0 translate-y-8"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="font-syne text-xs font-semibold tracking-[2px] uppercase text-text-3 mb-5 flex items-center gap-2">
        <span>{category.emoji}</span>
        {category.label}
      </div>
      <div className="flex flex-wrap gap-2">
        {category.items.map((item) => (
          <span
            key={item}
            className={`px-3.5 py-1.5 rounded-md text-[13px] font-medium border transition-all duration-200 cursor-default ${itemColorMap[category.color]}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export function StackSection() {
  return (
    <section id="stack" className="relative z-10 py-32">
      <div className="max-w-[1100px] mx-auto px-5 md:px-20">
        <SectionHeader
          label="Tech Stack"
          title="Ferramentas do ofício"
          subtitle="O que eu uso diariamente para construir software de qualidade."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stackCategories.map((cat, i) => (
            <StackCard key={cat.id} category={cat} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
