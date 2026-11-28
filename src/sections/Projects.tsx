import type { Lang } from '@/data/types'
import { messages } from '@/data'
import { SectionTitle } from '@/components/SectionTitle'
import { ProjectCard } from '@/components/ProjectCard'

export function Projects({ lang }: { lang: Lang }) {
  const t = messages[lang].projects

  return (
    <section id="projetos" aria-labelledby="projetos-titulo" className="scroll-mt-24 border-t border-border mx-auto max-w-content px-4 py-20 md:px-6">
      <SectionTitle id="projetos-titulo" eyebrow={t.eyebrow}>{t.title}</SectionTitle>
      <p className="mt-4 max-w-2xl text-muted">{t.intro}</p>
      <ul className="mt-10 border-b border-border">
        {t.items.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} lang={lang} />
          </li>
        ))}
      </ul>
    </section>
  )
}
