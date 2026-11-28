import type { Lang } from '@/data/types'
import { messages } from '@/data'
import { SectionTitle } from '@/components/SectionTitle'
import { ProjectCard } from '@/components/ProjectCard'
import { Reveal } from '@/components/Reveal'

export function Projects({ lang }: { lang: Lang }) {
  const t = messages[lang].projects

  return (
    <section id="projetos" aria-labelledby="projetos-titulo" className="scroll-mt-24 bg-bg mx-auto max-w-content px-4 py-20 md:px-6">
      <SectionTitle id="projetos-titulo" eyebrow={t.eyebrow}>{t.title}</SectionTitle>
      <p className="mt-4 max-w-2xl text-muted">{t.intro}</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {t.items.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 80} className="h-full">
            <ProjectCard project={project} lang={lang} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
