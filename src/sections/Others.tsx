import type { Lang } from '@/data/types'
import { messages } from '@/data'
import { SectionTitle } from '@/components/SectionTitle'

export function Others({ lang }: { lang: Lang }) {
  const t = messages[lang].others

  return (
    <section id="outros" aria-labelledby="outros-titulo" className="mx-auto max-w-content px-4 py-20 md:px-6">
      <SectionTitle id="outros-titulo">{t.title}</SectionTitle>
      <p className="mt-4 max-w-2xl text-muted">{t.intro}</p>

      <ul className="mt-10 space-y-6">
        {t.items.map((item) => (
          <li key={item.title} className="border-t border-border pt-6">
            <h3 className="font-serif text-xl font-medium text-fg">{item.title}</h3>
            <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-muted">{item.description}</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <li key={tag} className="rounded border border-border px-2 py-0.5 text-xs text-muted">
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
