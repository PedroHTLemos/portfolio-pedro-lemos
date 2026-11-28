import { Link } from 'react-router-dom'
import type { Lang } from '@/data/types'
import { messages, site } from '@/data'
import { GithubIcon, LinkedinIcon } from '@/components/Icons'

const HIGHLIGHT_SLUGS = ['api-pedidos-estoque', 'async-task-hub', 'orkest']
const GRADIENT_TEXT = {
  backgroundImage: 'linear-gradient(90deg, #C084FC, #F472B6)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
} as const

/** Destaca a palavra "back-end" do cargo com a cor de acento */
function Role({ text }: { text: string }) {
  const parts = text.split('back-end')
  if (parts.length < 2) return <>{text}</>
  return (
    <>
      {parts[0]}
      <span className="text-accent">back-end</span>
      {parts.slice(1).join('back-end')}
    </>
  )
}

export function Hero({ lang }: { lang: Lang }) {
  const t = messages[lang].hero
  const home = lang === 'pt' ? '/' : '/en'
  const prefix = lang === 'pt' ? '' : '/en'
  const newTab = messages[lang].nav.newTab

  const highlights = HIGHLIGHT_SLUGS.map((slug) => messages[lang].projects.items.find((p) => p.slug === slug)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p),
  )

  return (
    <section aria-labelledby="hero-titulo" className="mx-auto max-w-content px-4 pb-16 pt-14 md:px-6 md:pt-24">
      <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs lowercase text-accent">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
        {t.available}
      </p>

      <h1
        id="hero-titulo"
        className="mt-6 font-sans text-[clamp(40px,7vw,72px)] font-semibold leading-[1.02] tracking-[-0.03em] text-fg"
      >
        {t.name}
        <span aria-hidden="true" style={GRADIENT_TEXT}>
          _
        </span>
      </h1>
      <p className="mt-4 text-xl font-medium tracking-[-0.01em] text-fg md:text-2xl">
        <Role text={t.role} />
      </p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{t.positioning}</p>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{t.seeking}</p>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link to={`${home}#projetos`} className="btn btn-primary">
          {t.ctaProjects} →
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

      <section aria-labelledby="destaques-titulo" className="mt-16">
        <h2 id="destaques-titulo" className="font-mono text-xs uppercase tracking-[0.12em] text-subtle">
          {t.highlightsTitle}
        </h2>
        <ul className="mt-4 grid grid-cols-1 border-y border-border md:grid-cols-3 md:border-x md:border-y md:divide-x md:divide-border [&>li]:border-b [&>li]:border-border md:[&>li]:border-b-0">
          {highlights.map((p) => (
            <li key={p.slug}>
              <Link
                to={`${prefix}/projetos/${p.slug}`}
                className="group flex h-full flex-col gap-2 p-6 transition-colors duration-200 hover:bg-surface"
              >
                <span className="text-sm text-muted">{p.title}</span>
                <span className="font-mono text-4xl font-semibold tracking-tight text-accent">{p.metric.value}</span>
                <span className="text-sm text-muted">{p.metric.label}</span>
                <span className="mt-auto pt-3 text-sm font-medium text-fg">
                  {messages[lang].projects.labels.caseStudy}{' '}
                  <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}
