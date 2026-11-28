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
    <article
      aria-labelledby={headingId}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
        <img
          src={project.cover.src}
          alt={project.cover.alt}
          width={1600}
          height={1000}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className={`absolute left-3 top-3 rounded-full bg-bg/90 px-3 py-1 text-xs font-medium backdrop-blur ${statusTone}`}>
          {t.statusLabels[project.status]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm text-muted">{project.period}</p>
        <h3 id={headingId} className="mt-1 font-sans tracking-[-0.03em] text-2xl font-semibold leading-snug text-fg">
          {project.title}
        </h3>

        <dl className="mt-5 space-y-4 text-[15px] leading-relaxed">
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

        {project.note && <p className="mt-4 text-sm text-muted">{project.note}</p>}

        <div className="mt-6 rounded-md border border-border p-4">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">{t.labels.metric}</p>
          <p className="mt-1 font-sans tracking-[-0.03em] text-4xl font-semibold text-warm">{project.metric.value}</p>
          <p className="mt-1 text-sm text-muted">{project.metric.label}</p>
          <ExternalLink href={project.metric.sourceHref} lang={lang} className="link mt-2 inline-block text-sm">
            {project.metric.sourceLabel}
          </ExternalLink>
        </div>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((item) => (
            <li key={item} className="rounded border border-border px-2 py-0.5 text-xs text-muted">
              {item}
            </li>
          ))}
        </ul>

        <ul className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-6 text-sm">
          {project.caseStudy && (
            <li>
              <Link to={`${prefix}/projetos/${project.slug}`} className="link font-medium">
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
      </div>
    </article>
  )
}
