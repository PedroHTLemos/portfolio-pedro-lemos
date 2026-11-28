import type { AnchorHTMLAttributes, ReactNode } from 'react'
import type { Lang } from '@/data/types'
import { messages } from '@/data'

/** Link externo com aviso de nova aba para leitores de tela */
export function ExternalLink({
  href,
  lang,
  children,
  className,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; lang: Lang; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
      {children}
      <span className="sr-only"> {messages[lang].nav.newTab}</span>
    </a>
  )
}
