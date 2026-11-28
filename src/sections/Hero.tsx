import { Link } from 'react-router-dom'
import type { Lang } from '@/data/types'
import { messages, site } from '@/data'
import { GithubIcon, LinkedinIcon } from '@/components/Icons'

export function Hero({ lang }: { lang: Lang }) {
  const t = messages[lang].hero
  const home = lang === 'pt' ? '/' : '/en'

  return (
    <section aria-labelledby="hero-titulo" className="mx-auto max-w-content px-4 pb-20 pt-16 md:px-6 md:pt-24">
      <h1 id="hero-titulo" className="font-serif text-4xl font-medium leading-[1.1] text-fg md:text-6xl">
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
          <span className="sr-only">{messages[lang].nav.newTab}</span>
        </a>
        <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer" className="btn">
          <LinkedinIcon />
          {t.ctaLinkedin}
          <span className="sr-only">{messages[lang].nav.newTab}</span>
        </a>
      </div>
    </section>
  )
}
