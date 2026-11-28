import type { Lang } from '@/data/types'
import { messages } from '@/data'
import { SectionTitle } from '@/components/SectionTitle'

export function About({ lang }: { lang: Lang }) {
  const t = messages[lang].about

  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="mx-auto max-w-content px-4 py-20 md:px-6">
      <SectionTitle id="sobre-titulo">{t.title}</SectionTitle>
      <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted">
        {t.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <ul className="mt-8 max-w-3xl space-y-2 border-t border-border pt-6 text-[15px] text-muted">
        <li>{t.education}</li>
        <li>{t.english}</li>
      </ul>
    </section>
  )
}
