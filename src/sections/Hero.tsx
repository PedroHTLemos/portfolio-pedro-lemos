import { Link } from 'react-router-dom'
import type { Lang } from '@/data/types'
import { messages, site } from '@/data'
import { GithubIcon, LinkedinIcon } from '@/components/Icons'

const HIGHLIGHT_SLUGS = ['api-pedidos-estoque', 'async-task-hub', 'orkest']

export function Hero({ lang }: { lang: Lang }) {
  const t = messages[lang].hero
  const home = lang === 'pt' ? '/' : '/en'
  const prefix = lang === 'pt' ? '' : '/en'
  const newTab = messages[lang].nav.newTab

  const highlights = HIGHLIGHT_SLUGS.map((slug) => messages[lang].projects.items.find((p) => p.slug === slug)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p),
  )

  return (
    <section aria-labelledby="hero-titulo" className="relative isolate overflow-hidden">
      {/* Textura de pontos, esmaecida para baixo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(rgb(var(--border))_1px,transparent_1px)] bg-[length:24px_24px] opacity-70 [mask-image:linear-gradient(to_bottom,black_20%,transparent_85%)]"
      />
      <div className="mx-auto grid max-w-content gap-12 px-4 pb-20 pt-16 md:px-6 md:pt-24 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-green" />
            {t.available}
          </p>

          <h1 id="hero-titulo" className="mt-6 font-serif text-4xl font-medium leading-[1.1] text-fg md:text-6xl">
            {t.name}
          </h1>
          <p className="mt-4 text-xl text-fg md:text-2xl">{t.role}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{t.positioning}</p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{t.seeking}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to={`${home}#projetos`} className="btn btn-primary">
              {t.ctaProjects}
            </Link>
            {site.cvUrl && (
              <a href={site.cvUrl} download className="btn">
                {t.ctaCv}
              </a>
            )}
            <a href={site.githubUrl} target="_blank" rel="noopener noreferrer" className="btn">
              <GithubIcon />
              {t.ctaGithub}
              <span className="sr-only">{newTab}</span>
            </a>
            <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer" className="btn">
              <LinkedinIcon />
              {t.ctaLinkedin}
              <span className="sr-only">{newTab}</span>
            </a>
          </div>
        </div>

        <aside aria-labelledby="destaques-titulo" className="relative">
          {/* Brilho radial discreto atrás do painel */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-16 -z-10 bg-[radial-gradient(closest-side,rgb(var(--accent)/0.16),transparent)]"
          />
          <h2 id="destaques-titulo" className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
            {t.highlightsTitle}
          </h2>
          <ul className="mt-4 space-y-3">
            {highlights.map((p) => (
              <li key={p.slug}>
                <Link
                  to={`${prefix}/projetos/${p.slug}`}
                  className="group block rounded-lg border border-border bg-surface p-5 transition-colors duration-200 hover:border-accent"
                >
                  <span className="text-sm text-muted">{p.title}</span>
                  <span className="mt-1 block font-serif text-3xl font-medium text-accent">{p.metric.value}</span>
                  <span className="mt-1 block text-sm text-muted">{p.metric.label}</span>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent">
                    {messages[lang].projects.labels.caseStudy}
                    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
