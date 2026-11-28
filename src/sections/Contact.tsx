import { useEffect, useState } from 'react'
import { Mail, MapPin } from 'lucide-react'
import type { Lang } from '@/data/types'
import { messages, site } from '@/data'
import { SectionTitle } from '@/components/SectionTitle'
import { GithubIcon, LinkedinIcon } from '@/components/Icons'
import { ExternalLink } from '@/components/ExternalLink'

export function Contact({ lang }: { lang: Lang }) {
  const t = messages[lang].contact
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const id = window.setTimeout(() => setCopied(false), 2000)
    return () => window.clearTimeout(id)
  }, [copied])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
    } catch {
      // Clipboard indisponível: o e-mail continua visível e clicável
    }
  }

  return (
    <section id="contato" aria-labelledby="contato-titulo" className="scroll-mt-24 bg-bg mx-auto max-w-content px-4 py-20 md:px-6">
      <SectionTitle id="contato-titulo" eyebrow={t.eyebrow}>
        {t.title}
      </SectionTitle>
      <p className="mt-4 max-w-2xl text-muted">{t.intro}</p>

      <div className="mt-10 rounded-xl border border-border bg-surface p-6 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">{t.labels.email}</p>
            <a href={`mailto:${site.email}`} className="mt-1 block break-all font-sans tracking-[-0.03em] text-2xl font-semibold text-fg hover:text-accent md:text-3xl">
              {site.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={copyEmail} className="btn btn-primary">
              <Mail size={16} aria-hidden="true" />
              {copied ? t.copied : t.copy}
            </button>
            <span role="status" aria-live="polite" className="sr-only">
              {copied ? t.copied : ''}
            </span>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <ExternalLink
            href={site.linkedinUrl}
            lang={lang}
            className="flex items-center justify-between gap-3 rounded-lg border border-border p-5 text-fg transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            <span className="flex min-w-0 items-center gap-3">
              <LinkedinIcon width={20} height={20} />
              <span className="min-w-0 break-all">
                <span className="block text-xs uppercase tracking-[0.12em] text-muted">{t.labels.linkedin}</span>
                {site.linkedinUrl.replace('https://', '')}
              </span>
            </span>
            <span aria-hidden="true">→</span>
          </ExternalLink>
          <ExternalLink
            href={site.githubUrl}
            lang={lang}
            className="flex items-center justify-between gap-3 rounded-lg border border-border p-5 text-fg transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            <span className="flex min-w-0 items-center gap-3">
              <GithubIcon width={20} height={20} />
              <span className="min-w-0 break-all">
                <span className="block text-xs uppercase tracking-[0.12em] text-muted">{t.labels.github}</span>
                {site.githubUrl.replace('https://', '')}
              </span>
            </span>
            <span aria-hidden="true">→</span>
          </ExternalLink>
        </div>

        <p className="mt-6 flex items-center gap-2 text-sm text-muted">
          <MapPin size={16} aria-hidden="true" className="text-accent" />
          <span className="sr-only">{t.labels.location}: </span>
          {t.location}
        </p>
      </div>
    </section>
  )
}
