import { Moon, Sun } from 'lucide-react'
import type { Lang } from '@/data/types'
import { messages } from '@/data'
import { useTheme } from '@/hooks/useTheme'

export function ThemeToggle({ lang }: { lang: Lang }) {
  const { theme, toggleTheme } = useTheme()
  const t = messages[lang].nav
  const label = theme === 'dark' ? t.themeToLight : t.themeToDark

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {theme === 'dark' ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
    </button>
  )
}
