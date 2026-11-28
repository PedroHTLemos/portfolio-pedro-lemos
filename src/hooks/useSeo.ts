import { useEffect } from 'react'
import type { Lang } from '@/data/types'
import { site } from '@/data/site'

export interface SeoInput {
  lang: Lang
  title: string
  description: string
  /** Caminho sem domínio, em PT (ex.: /projetos/orkest). O EN é derivado com o prefixo /en. */
  ptPath: string
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`
  let el = document.head.querySelector<HTMLLinkElement>(selector)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    if (hreflang) el.setAttribute('hreflang', hreflang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/** Define título, descrição, Open Graph, canonical e alternates de idioma da página */
export function useSeo({ lang, title, description, ptPath }: SeoInput) {
  useEffect(() => {
    const enPath = ptPath === '/' ? '/en' : `/en${ptPath}`
    const currentPath = lang === 'pt' ? ptPath : enPath
    const url = `${site.url}${currentPath}`
    const image = `${site.url}/og.png`
    const ogLocale = lang === 'pt' ? 'pt_BR' : 'en_US'

    document.title = title
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'

    setMeta('name', 'description', description)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', site.name)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', image)
    setMeta('property', 'og:image:width', '1200')
    setMeta('property', 'og:image:height', '630')
    setMeta('property', 'og:locale', ogLocale)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', image)

    setLink('canonical', url)
    setLink('alternate', `${site.url}${ptPath}`, 'pt-BR')
    setLink('alternate', `${site.url}${enPath}`, 'en')
    setLink('alternate', `${site.url}${ptPath}`, 'x-default')
  }, [lang, title, description, ptPath])
}
