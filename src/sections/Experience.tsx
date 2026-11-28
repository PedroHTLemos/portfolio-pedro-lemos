import type { Lang } from '@/data/types'
import { messages } from '@/data'
import { SectionTitle } from '@/components/SectionTitle'

export function Experience({ lang }: { lang: Lang }) {
  const t = messages[lang].experience

  return (
    <section id="experiencia" aria-labelledby="experiencia-titulo" className="scroll-mt-24 border-t border-border mx-auto max-w-content px-4 py-20 md:px-6">
      <SectionTitle id="experiencia-titulo" eyebrow={t.eyebrow}>{t.title}</SectionTitle>
      <p className="mt-4 max-w-2xl text-muted">{t.intro}</p>

      <ol className="mt-10 border-l border-border">
        {t.items.map((item) => (
          <li key={item.id} className="relative pb-12 pl-8 last:pb-0">
            <span
              aria-hidden="true"
              className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ${item.current ? 'bg-accent ring-4 ring-accent/20' : 'border-2 border-accent bg-bg'}`}
            />
            <p className="text-sm text-muted">
              {item.period}
              {item.current && <span className="ml-2 font-medium text-accent">{t.current}</span>}
            </p>
            <h3 className="mt-1 font-sans tracking-[-0.03em] text-xl font-semibold text-fg">{item.role}</h3>
            <p className="text-[15px] text-muted">
              {item.company}
              {item.location && ` · ${item.location}`}
            </p>
            <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted marker:text-border">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
