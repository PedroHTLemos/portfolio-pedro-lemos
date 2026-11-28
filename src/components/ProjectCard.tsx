import { Link } from 'react-router-dom'
import type { Lang, Project } from '@/data/types'
import { messages } from '@/data'

/**
 * Linha da lista de projetos. O título é o link principal; um overlay (after:) faz a
 * linha inteira clicável sem aninhar <a> dentro de <a>. Os links de loja ficam acima
 * do overlay (z-10), como irmãos do link principal.
 */
export function ProjectCard({ project, lang }: { project: Project; lang: Lang }) {
  const t = messages[lang].projects
  const nt = messages[lang].nav.newTab
  const prefix = lang === 'pt' ? '' : '/en'
  const headingId = `projeto-${project.slug}`
  const tagClass = project.status === 'product' ? 'tag-gradient' : 'border border-border text-muted'
  const to = project.caseStudy ? `${prefix}/projetos/${project.slug}` : null
  const externalHref = project.liveUrl ?? project.repoUrl
  const href = to ?? externalHref
  const mainLinkClass =
    'text-lg font-medium leading-snug text-fg after:absolute after:inset-0 after:content-[""] transition-colors duration-200 group-hover:text-accent focus-visible:outline-none focus-visible:underline underline-offset-4'

  const title = to ? (
    <Link to={to} className={mainLinkClass}>
      {project.title}
    </Link>
  ) : href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={mainLinkClass}>
      {project.title}
      <span className="sr-only"> {nt}</span>
    </a>
  ) : (
    project.title
  )

  return (
    <div className="group relative flex items-start justify-between gap-6 border-t border-border py-6">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-3">
          <h3 id={headingId}>{title}</h3>
          <span className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] lowercase ${tagClass}`}>
            {t.statusLabels[project.status]}
          </span>
        </div>
        <p className="mt-2 text-[15px] text-muted">{project.problem}</p>
        <p className="mt-2 font-mono text-xs lowercase text-subtle">{project.stack.join(' · ')}</p>
        {(project.appStoreUrl || project.playStoreUrl) && (
          <p className="relative z-10 mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs lowercase">
            {project.appStoreUrl && (
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.labels.appStoreAria} ${nt}`}
                className="text-muted underline-offset-4 transition-colors duration-200 hover:text-accent hover:underline"
              >
                {t.labels.appStore} ↗
              </a>
            )}
            {project.playStoreUrl && (
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.labels.playStoreAria} ${nt}`}
                className="text-muted underline-offset-4 transition-colors duration-200 hover:text-accent hover:underline"
              >
                {t.labels.playStore} ↗
              </a>
            )}
          </p>
        )}
      </div>
      <span
        aria-hidden="true"
        className="mt-1 shrink-0 font-mono text-lg text-muted transition-[transform,color] duration-200 group-hover:translate-x-1 group-hover:text-accent"
      >
        {to ? '→' : '↗'}
      </span>
    </div>
  )
}
