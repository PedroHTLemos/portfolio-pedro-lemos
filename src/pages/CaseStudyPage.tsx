import { Link, useParams } from 'react-router-dom'
import type { Lang } from '@/data/types'
import { messages } from '@/data'
import { Layout } from '@/components/Layout'
import { ExternalLink } from '@/components/ExternalLink'
import { FlowDiagram } from '@/components/FlowDiagram'

export function CaseStudyPage({ lang }: { lang: Lang }) {
  const { slug } = useParams()
  const t = messages[lang]
  const home = lang === 'pt' ? '/' : '/en'
  const project = t.projects.items.find((p) => p.slug === slug && p.caseStudy)

  if (!project || !project.caseStudy) {
    return (
      <Layout lang={lang}>
        <section className="mx-auto max-w-content px-4 py-24 md:px-6">
          <h1 className="font-serif text-3xl font-medium text-fg">{t.caseStudy.notFound}</h1>
          <Link to={home} className="link mt-6 inline-block">
            {t.caseStudy.notFoundLink}
          </Link>
        </section>
      </Layout>
    )
  }

  const cs = project.caseStudy
  const labels = t.projects.labels
  const sectionClass = 'border-t border-border py-12'
  const headingClass = 'font-serif text-2xl font-medium text-fg'

  return (
    <Layout lang={lang}>
      <article className="mx-auto max-w-content px-4 pb-20 pt-12 md:px-6">
        <Link to={`${home}#projetos`} className="link text-sm">
          ← {t.caseStudy.back}
        </Link>

        <header className="mt-8 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
            {t.projects.statusLabels[project.status]} · {project.period}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium leading-tight text-fg md:text-5xl">{project.title}</h1>
          {project.note && <p className="mt-4 text-muted">{project.note}</p>}
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {project.repoUrl && (
              <li>
                <ExternalLink href={project.repoUrl} lang={lang} className="link">
                  {t.caseStudy.repoCta}
                </ExternalLink>
              </li>
            )}
            {project.readmeUrl && (
              <li>
                <ExternalLink href={project.readmeUrl} lang={lang} className="link">
                  {t.caseStudy.readmeCta}
                </ExternalLink>
              </li>
            )}
          </ul>
        </header>

        <section className={`${sectionClass} mt-12`} aria-labelledby="cs-problema">
          <h2 id="cs-problema" className={headingClass}>{t.caseStudy.problemTitle}</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">{cs.problem}</p>
        </section>

        <section className={sectionClass} aria-labelledby="cs-decisoes">
          <h2 id="cs-decisoes" className={headingClass}>{t.caseStudy.decisionsTitle}</h2>
          <ol className="mt-6 space-y-8">
            {cs.decisions.map((d, i) => (
              <li key={d.title} className="grid gap-2 md:grid-cols-[48px_minmax(0,1fr)]">
                <span className="font-serif text-lg text-accent" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-medium text-fg">{d.title}</h3>
                  <p className="mt-1 max-w-3xl leading-relaxed text-muted">{d.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className={sectionClass} aria-labelledby="cs-numeros">
          <h2 id="cs-numeros" className={headingClass}>{t.caseStudy.numbersTitle}</h2>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {cs.numbers.map((n) => (
              <li key={n.label} className="grid gap-2 py-5 md:grid-cols-[180px_minmax(0,1fr)_auto] md:items-baseline md:gap-6">
                <span className="font-serif text-2xl font-medium text-fg">{n.value}</span>
                <span className="text-muted">{n.label}</span>
                <ExternalLink href={n.sourceHref} lang={lang} className="link text-sm">
                  {n.sourceLabel}
                </ExternalLink>
              </li>
            ))}
          </ul>
        </section>

        <section className={sectionClass} aria-labelledby="cs-evidencias">
          <h2 id="cs-evidencias" className={headingClass}>{t.caseStudy.evidenceTitle}</h2>
          <div className="mt-6 space-y-12">
            {cs.evidence.map((ev, i) =>
              ev.type === 'image' ? (
                <figure key={ev.src}>
                  <img
                    src={ev.src}
                    alt={ev.alt}
                    width={1440}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    className="w-full rounded-md border border-border"
                  />
                  <figcaption className="mt-3 text-sm text-muted">{ev.caption}</figcaption>
                </figure>
              ) : (
                <FlowDiagram key={`${i}-${ev.title}`} title={ev.title} steps={ev.steps} label={t.caseStudy.flowLabel} />
              ),
            )}
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="cs-limitacoes">
          <h2 id="cs-limitacoes" className={headingClass}>{t.caseStudy.limitationsTitle}</h2>
          <ul className="mt-6 max-w-3xl list-disc space-y-3 pl-5 leading-relaxed text-muted marker:text-border">
            {cs.limitations.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </section>

        <p className="mt-12 text-sm text-muted">{labels.stack}: {project.stack.join(', ')}</p>
      </article>
    </Layout>
  )
}
