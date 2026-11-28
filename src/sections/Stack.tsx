import type { Lang, StackGroup } from '@/data/types'
import { messages } from '@/data'
import { SectionTitle } from '@/components/SectionTitle'

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item} className="rounded border border-border px-2.5 py-1 text-sm text-muted">
          {item}
        </li>
      ))}
    </ul>
  )
}

function Group({ group }: { group: StackGroup }) {
  return (
    <div>
      <h4 className="text-sm font-medium text-fg">{group.label}</h4>
      <Chips items={group.items} />
    </div>
  )
}

export function Stack({ lang }: { lang: Lang }) {
  const t = messages[lang].stack
  const { groups, labels } = t

  return (
    <section id="stack" aria-labelledby="stack-titulo" className="mx-auto max-w-content px-4 py-20 md:px-6">
      <SectionTitle id="stack-titulo">{t.title}</SectionTitle>
      <p className="mt-4 max-w-2xl text-muted">{t.intro}</p>

      <h3 className="mt-10 font-serif text-xl font-medium text-fg">{labels.used}</h3>
      <div className="mt-6 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {groups.used.map((group) => (
          <Group key={group.label} group={group} />
        ))}
      </div>

      <div className="mt-12 grid gap-x-10 gap-y-8 border-t border-border pt-10 md:grid-cols-3">
        <div>
          <h4 className="text-sm font-medium text-fg">{labels.known}</h4>
          <Chips items={groups.known.items} />
        </div>
        <div>
          <h4 className="text-sm font-medium text-fg">{labels.academic}</h4>
          <Chips items={groups.academic.items} />
        </div>
        <div>
          <h4 className="text-sm font-medium text-fg">{labels.studying}</h4>
          <Chips items={groups.studying.items} />
        </div>
      </div>
    </section>
  )
}
