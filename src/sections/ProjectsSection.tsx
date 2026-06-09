import * as LucideIcons from 'lucide-react'
import { projects, type Project } from '@/data/portfolio'
import { SectionHeader } from '@/components/SectionHeader'
import { useScrollReveal } from '@/hooks/useScrollReveal'

// ─── COLOR MAPS ─────────────────────────────────────────────────────────────

const cardAccentMap = {
  purple: 'after:from-accent/8',
  green:  'after:from-brand-green/8',
  blue:   'after:from-accent-3/8',
  pink:   'after:from-brand-pink/8',
}

const iconBgMap = {
  purple: 'bg-accent/12',
  green:  'bg-brand-green/12',
  blue:   'bg-accent-3/12',
  pink:   'bg-brand-pink/12',
}

const iconColorMap = {
  purple: 'text-accent-2',
  green:  'text-brand-green',
  blue:   'text-accent-3',
  pink:   'text-brand-pink',
}

// ─── DYNAMIC LUCIDE ICON ─────────────────────────────────────────────────────

function Icon({ name, size = 18, className = '' }: { name: string; size?: number; className?: string }) {
  const LucideIcon = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[name]
  if (!LucideIcon) return null
  return <LucideIcon size={size} className={className} />
}

// ─── STEALTH PANEL ───────────────────────────────────────────────────────────

function StealthPanel({ stats }: { stats: NonNullable<Project['stats']> }) {
  return (
    <div className="grid grid-cols-2 gap-3 mt-1">

      {/* Lona — painel escuro com textura diagonal */}
      <div
        className="relative rounded-xl overflow-hidden flex items-center justify-center py-7"
        style={{ background: 'linear-gradient(135deg, #0d0d14 0%, #13131f 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(255,255,255,0.018) 4px, rgba(255,255,255,0.018) 5px)',
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: 'rgba(255,255,255,0.06)' }} />
        <div className="relative z-10 text-center select-none">
          <Icon name="EyeOff" size={28} className="mx-auto mb-2 opacity-15 text-white" />
          <p className="text-[9px] tracking-[0.18em] uppercase" style={{ color: 'rgba(255,255,255,0.18)' }}>
            Detalhes em breve
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-col gap-2">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="flex-1 bg-bg-2/60 border border-border-subtle rounded-xl px-3 py-2.5 flex flex-col justify-center"
          >
            <div className="font-syne text-[17px] font-extrabold text-text-1 leading-none">
              {value}
              <span className="text-accent text-sm ml-0.5">+</span>
            </div>
            <div className="text-[10px] text-text-3 mt-0.5 leading-tight">{label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── PROJECT CARD ────────────────────────────────────────────────────────────

function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`
        group relative flex flex-col gap-4 p-8 rounded-2xl border backdrop-blur-sm cursor-default
        bg-bg-3/85 border-border-subtle
        hover:border-border hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
        transition-all duration-300
        opacity-0 translate-y-8
        ${project.featured
          ? 'md:col-span-2 border-accent/30 bg-gradient-to-br from-accent/10 to-bg-3/85'
          : ''
        }
        after:content-[''] after:absolute after:inset-0 after:rounded-2xl
        after:bg-gradient-to-b ${cardAccentMap[project.color ?? 'purple']} after:to-transparent
        after:opacity-0 after:hover:opacity-100 after:transition-opacity after:duration-300 after:pointer-events-none
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >

      {/* ── Featured stealth layout ── */}
      {project.featured && project.stealth ? (
        <div className="flex flex-col gap-4 md:grid md:grid-cols-[1fr_280px] md:gap-8">

          <div className="flex flex-col gap-4">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-accent/15 border border-accent/30 rounded text-[11px] text-accent-2 font-medium uppercase tracking-widest">
                ✦ Destaque
              </div>
              {project.statusLabel && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-brand-amber/10 border border-brand-amber/20 rounded text-[11px] text-brand-amber font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-amber animate-pulse-dot" />
                  {project.statusLabel}
                </div>
              )}
            </div>

            {/* Icon + actions */}
            <div className="flex justify-between items-start">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBgMap[project.color ?? 'purple']}`}>
                <Icon name={project.icon} size={22} className={iconColorMap[project.color ?? 'purple']} />
              </div>
              <div className="flex gap-2.5">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-white/4 border border-border-subtle rounded-lg flex items-center justify-center text-text-2 hover:bg-accent hover:border-accent hover:text-white transition-all duration-200"
                    title="Ver projeto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Icon name="ExternalLink" size={14} />
                  </a>
                )}
                {project.privateRepo && (
                  <div
                    className="w-9 h-9 bg-white/4 border border-border-subtle rounded-lg flex items-center justify-center text-text-3"
                    title="Repositório privado"
                  >
                    <Icon name="Lock" size={14} />
                  </div>
                )}
              </div>
            </div>

            {/* Eyebrow + title + description */}
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-text-3 -mb-2">
              Projeto confidencial · SaaS
            </p>
            <h3 className="font-syne font-bold text-xl tracking-tight">{project.title}</h3>
            <p className="text-sm text-text-2 leading-relaxed font-light">{project.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 bg-white/4 border border-border-subtle rounded text-xs text-text-3">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Lona + stats */}
          {project.stats && <StealthPanel stats={project.stats} />}
        </div>

      ) : (
        /* ── Normal card ── */
        <>
          {project.featured && (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-accent/15 border border-accent/30 rounded text-[11px] text-accent-2 font-medium uppercase tracking-widest self-start">
              ✦ Destaque
            </div>
          )}

          <div className="flex justify-between items-start">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBgMap[project.color ?? 'purple']}`}>
              <Icon name={project.icon} size={22} className={iconColorMap[project.color ?? 'purple']} />
            </div>
            <div className="flex gap-2.5">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/4 border border-border-subtle rounded-lg flex items-center justify-center text-text-2 hover:bg-accent hover:border-accent hover:text-white transition-all duration-200"
                  title="GitHub"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Icon name="Github" size={14} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/4 border border-border-subtle rounded-lg flex items-center justify-center text-text-2 hover:bg-accent hover:border-accent hover:text-white transition-all duration-200"
                  title="Ver demo"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Icon name="ExternalLink" size={14} />
                </a>
              )}
              {project.privateRepo && (
                <div
                  className="w-9 h-9 bg-white/4 border border-border-subtle rounded-lg flex items-center justify-center text-text-3"
                  title="Repositório privado"
                >
                  <Icon name="Lock" size={14} />
                </div>
              )}
            </div>
          </div>

          <h3 className="font-syne font-bold text-xl tracking-tight">{project.title}</h3>
          <p className="text-sm text-text-2 leading-relaxed font-light flex-1">{project.description}</p>

          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 bg-white/4 border border-border-subtle rounded text-xs text-text-3">
                {tag}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// ─── SECTION ────────────────────────────────────────────────────────────────

export function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="relative z-10 py-32"
      style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(108,99,255,0.03) 50%, transparent 100%)' }}
    >
      <div className="max-w-[1100px] mx-auto px-5 md:px-20">
        <SectionHeader
          label="Projetos"
          title="O que eu construí"
          subtitle="Projetos que me orgulho — do acadêmico ao freelance, sempre com foco em qualidade e impacto real."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}