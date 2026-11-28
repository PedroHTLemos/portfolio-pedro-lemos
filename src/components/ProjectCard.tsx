import { Link } from 'react-router-dom'
import type { Lang, Project } from '@/data/types'
import { messages } from '@/data'
import { ExternalLink } from '@/components/ExternalLink'

export function ProjectCard({ project, lang }: { project: Project; lang: Lang }) {
  const t = messages[lang].projects
  const prefix = lang === 'pt' ? '' : '/en'
  const headingId = `projeto-${project.slug}`
  const statusTone = { product: 'text-warm', portfolio: 'text-accent', freelance: 'text-green' }[project.status]

  return (
    <article aria-labelledby={headingId} className="grid gap-8 border-t border-border py-10 md:grid-cols-[minmax(0,1fr)_260px]">
      <div>
        <p className={`text-xs font-medium uppercase tracking-[0.12em] ${statusTone}`}>
          {t.statusLabels[project.status]} <span className="text-muted">· {project.period}</span>
        </p>
        <h3 id={headingId} className="mt-2 font-serif text-2xl font-medium leading-snug text-fg">
          {project.title}
        </h3>

        <dl className="mt-6 space-y-5 text-[15px] leading-relaxed">
          <div>
            <dt className="font-medium text-fg">{t.labels.problem}</dt>
            <dd className="mt-1 text-muted">{project.problem}</dd>
          </div>
          <div>
            <dt className="font-medium text-fg">{t.labels.built}</dt>
            <dd className="mt-1 text-muted">{project.built}</dd>
          </div>
          <div>
            <dt className="font-medium text-fg">{t.labels.decision}</dt>
            <dd className="mt-1 text-muted">{project.decision}</dd>
          </div>
        </dl>

        {project.note && <p className="mt-5 text-sm text-muted">{project.note}</p>}
      </div>

      <aside className="space-y-6">
        <div className="rounded-md border border-border p-5">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">{t.labels.metric}</p>
          <p className="mt-2 font-serif text-4xl font-medium text-warm">{project.metric.value}</p>
          <p className="mt-1 text-sm text-muted">{project.metric.label}</p>
          <ExternalLink href={project.metric.sourceHref} lang={lang} className="link mt-3 inline-block text-sm">
            {project.metric.sourceLabel}
          </ExternalLink>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-[0.12em] text-muted">{t.labels.stack}</h4>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {project.stack.map((item) => (
              <li key={item} className="rounded border border-border px-2 py-0.5 text-xs text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {project.caseStudy && (
            <li>
              <Link to={`${prefix}/projetos/${project.slug}`} className="link">
                {t.labels.caseStudy}
              </Link>
            </li>
          )}
          {project.repoUrl && (
            <li>
              <ExternalLink href={project.repoUrl} lang={lang} className="link">
                {t.labels.repo}
              </ExternalLink>
            </li>
          )}
          {project.readmeUrl && (
            <li>
              <ExternalLink href={project.readmeUrl} lang={lang} className="link">
                {t.labels.readme}
              </ExternalLink>
            </li>
          )}
          {project.liveUrl && (
            <li>
              <ExternalLink href={project.liveUrl} lang={lang} className="link">
                {t.labels.live}
              </ExternalLink>
            </li>
          )}
        </ul>
      </aside>
    </article>
  )
}
