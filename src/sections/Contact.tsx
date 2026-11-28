import { Mail, MapPin } from 'lucide-react'
import type { Lang } from '@/data/types'
import { messages, site } from '@/data'
import { SectionTitle } from '@/components/SectionTitle'
import { GithubIcon, LinkedinIcon } from '@/components/Icons'
import { ExternalLink } from '@/components/ExternalLink'

export function Contact({ lang }: { lang: Lang }) {
  const t = messages[lang].contact

  return (
    <section id="contato" aria-labelledby="contato-titulo" className="mx-auto max-w-content px-4 py-20 md:px-6">
      <SectionTitle id="contato-titulo">{t.title}</SectionTitle>
      <p className="mt-4 max-w-2xl text-muted">{t.intro}</p>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        <li>
          <a href={`mailto:${site.email}`} className="flex items-center gap-3 rounded-md border border-border p-4 text-fg transition-colors hover:border-accent hover:text-accent">
            <Mail size={18} aria-hidden="true" />
            <span>
              <span className="block text-xs uppercase tracking-[0.12em] text-muted">{t.labels.email}</span>
              {site.email}
            </span>
          </a>
        </li>
        <li>
          <ExternalLink href={site.linkedinUrl} lang={lang} className="flex items-center gap-3 rounded-md border border-border p-4 text-fg transition-colors hover:border-accent hover:text-accent">
            <LinkedinIcon />
            <span>
              <span className="block text-xs uppercase tracking-[0.12em] text-muted">{t.labels.linkedin}</span>
              {site.linkedinUrl.replace('https://', '')}
            </span>
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href={site.githubUrl} lang={lang} className="flex items-center gap-3 rounded-md border border-border p-4 text-fg transition-colors hover:border-accent hover:text-accent">
            <GithubIcon />
            <span>
              <span className="block text-xs uppercase tracking-[0.12em] text-muted">{t.labels.github}</span>
              {site.githubUrl.replace('https://', '')}
            </span>
          </ExternalLink>
        </li>
        <li className="flex items-center gap-3 rounded-md border border-border p-4 text-fg">
          <MapPin size={18} aria-hidden="true" />
          <span>
            <span className="block text-xs uppercase tracking-[0.12em] text-muted">{t.labels.location}</span>
            {t.location}
          </span>
        </li>
      </ul>
    </section>
  )
}
