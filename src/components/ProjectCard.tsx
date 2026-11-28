import { Link } from 'react-router-dom'
import type { Lang, Project } from '@/data/types'
import { messages } from '@/data'
import { ExternalLink } from '@/components/ExternalLink'

/** Linha da lista de projetos: título, status, descrição curta e stack. Sem imagens. */
export function ProjectCard({ project, lang }: { project: Project; lang: Lang }) {
  const t = messages[lang].projects
  const prefix = lang === 'pt' ? '' : '/en'
  const headingId = `projeto-${project.slug}`
  const tagClass =
    project.status === 'product' ? 'tag-gradient' : 'border border-border text-muted'
  const to = project.caseStudy ? `${prefix}/projetos/${project.slug}` : null
  const externalHref = project.liveUrl ?? project.repoUrl

  const content = (
    <>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-3">
          <h3
            id={headingId}
            className="text-lg font-medium leading-snug text-fg transition-colors duration-200 group-hover:text-accent"
          >
            {project.title}
          </h3>
          <span className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] lowercase ${tagClass}`}>
            {t.statusLabels[project.status]}
          </span>
        </div>
        <p className="mt-2 line-clamp-2 text-[15px] text-muted md:line-clamp-1">{project.problem}</p>
        <p className="mt-2 font-mono text-xs lowercase text-subtle">{project.stack.join(' · ')}</p>
      </div>
      <span
        aria-hidden="true"
        className="mt-1 shrink-0 font-mono text-lg text-muted transition-[transform,color] duration-200 group-hover:translate-x-1 group-hover:text-accent"
      >
        {to ? '→' : '↗'}
      </span>
    </>
  )

  const rowClass = 'group flex items-start justify-between gap-6 border-t border-border py-6'

  if (to) {
    return (
      <Link to={to} className={rowClass} aria-labelledby={headingId}>
        {content}
      </Link>
    )
  }
  if (externalHref) {
    return (
      <ExternalLink href={externalHref} lang={lang} className={rowClass} aria-labelledby={headingId}>
        {content}
      </ExternalLink>
    )
  }
  return <div className={rowClass}>{content}</div>
}
