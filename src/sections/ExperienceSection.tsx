import { experiences } from '@/data/portfolio'
import { SectionHeader } from '@/components/SectionHeader'
import { useScrollReveal } from '@/hooks/useScrollReveal'

function TimelineItem({ experience, delay = 0 }: { experience: typeof experiences[0]; delay?: number }) {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="pl-12 pb-16 last:pb-0 relative opacity-0 translate-y-8 transition-all duration-700"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Dot */}
      <div
        className={`absolute left-[-6px] top-[6px] w-[13px] h-[13px] rounded-full border-2 border-bg
          ${experience.current
            ? 'bg-accent shadow-[0_0_0_4px_rgba(108,99,255,0.2)]'
            : 'bg-text-3 shadow-[0_0_0_4px_rgba(90,90,114,0.2)]'
          }`}
      />

      {/* Period */}
      <p className="text-sm text-accent-2 font-medium mb-2.5 tracking-wide">
        {experience.period}
        {experience.current && (
          <span className="ml-2 px-2 py-0.5 bg-brand-green/10 border border-brand-green/20 rounded text-[11px] text-brand-green font-medium">
            atual
          </span>
        )}
      </p>

      {/* Role & Company */}
      <h3 className="font-syne font-bold text-[22px] tracking-tight mb-1">
        {experience.role}
      </h3>
      <p className="text-[15px] text-text-2 font-light mb-6">
        {experience.company} · {experience.location}
      </p>

      {/* Points */}
      <div className="flex flex-col gap-3 mb-5">
        {experience.points.map((point, i) => (
          <div key={i} className="flex items-start gap-3 text-[15px] text-text-2 font-light leading-relaxed">
            <span className="text-accent text-xs shrink-0 mt-[3px]">▸</span>
            <span dangerouslySetInnerHTML={{ __html: point.replace(/<strong>/g, '<strong class="text-text-1 font-medium">') }} />
          </div>
        ))}
      </div>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {experience.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-accent/8 border border-accent/15 rounded text-xs text-accent-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export function ExperienceSection() {
  return (
    <section id="experiencia" className="relative z-10 py-32">
      <div className="max-w-[1100px] mx-auto px-5 md:px-20">
        <SectionHeader
          label="Experiência"
          title="Minha trajetória"
          subtitle="De liderança na Empresa Júnior a APIs em produção — e hoje como freelancer Full Stack."
        />

        {/* Timeline */}
        <div
          className="relative pl-0"
          style={{
            borderLeft: '1px solid',
            borderImageSlice: 1,
            borderImageSource: 'linear-gradient(180deg, transparent, rgba(108,99,255,0.4), rgba(108,99,255,0.6), rgba(108,99,255,0.4), transparent)',
          }}
        >
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.id} experience={exp} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  )
}
