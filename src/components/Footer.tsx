import { siteMeta } from '@/data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-border-subtle px-5 md:px-20 py-8 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-text-3">
      <span>© {year} {siteMeta.name} · Desenvolvedor Full Stack</span>
    </footer>
  )
}
