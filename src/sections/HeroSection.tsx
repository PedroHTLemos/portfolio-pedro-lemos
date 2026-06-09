import { siteMeta, heroStats } from '@/data/portfolio'
import { Zap, Shield, Rocket } from 'lucide-react'

function MetricsCard() {
  return (
    <div className="relative w-[300px] h-[280px]">

      {/* Orb central */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.08) 0%, transparent 70%)' }}
      />

      {/* Linhas conectoras */}
      <svg className="absolute inset-0 pointer-events-none" width="300" height="280" viewBox="0 0 300 280" fill="none" aria-hidden="true">
        <line x1="150" y1="140" x2="70"  y2="42"  stroke="rgba(108,99,255,0.1)" strokeWidth="1" strokeDasharray="4 5" />
        <line x1="150" y1="140" x2="240" y2="130" stroke="rgba(108,99,255,0.1)" strokeWidth="1" strokeDasharray="4 5" />
        <line x1="150" y1="140" x2="80"  y2="248" stroke="rgba(108,99,255,0.1)" strokeWidth="1" strokeDasharray="4 5" />
        <circle cx="150" cy="140" r="3" fill="rgba(108,99,255,0.45)" />
      </svg>

      {/* Chip 1 — −40% query (top-left) */}
      <div className="absolute top-0 left-0 animate-float-1 flex items-center gap-3 px-4 py-3 bg-bg-3 border border-accent/25 rounded-2xl shadow-[0_8px_32px_rgba(108,99,255,0.12)]">
        <div className="w-8 h-8 rounded-[8px] bg-accent/15 flex items-center justify-center shrink-0">
          <Zap size={14} className="text-accent" />
        </div>
        <div>
          <div className="font-syne text-[18px] font-extrabold text-accent leading-none tracking-tight">−40%</div>
          <div className="text-[10px] text-text-3 mt-0.5">query response time</div>
        </div>
      </div>

      {/* Chip 2 — 0 downtime (right) */}
      <div className="absolute top-[100px] right-0 animate-float-2 flex items-center gap-3 px-4 py-3 bg-bg-3 border border-brand-green/25 rounded-2xl shadow-[0_8px_32px_rgba(52,211,153,0.08)]">
        <div className="w-8 h-8 rounded-[8px] bg-brand-green/12 flex items-center justify-center shrink-0">
          <Shield size={14} className="text-brand-green" />
        </div>
        <div>
          <div className="font-syne text-[18px] font-extrabold leading-none tracking-tight">
            <span className="text-brand-green">0</span>
            <span className="text-text-1"> downtime</span>
          </div>
          <div className="text-[10px] text-text-3 mt-0.5 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse-dot inline-block" />
            1 ano em produção
          </div>
        </div>
      </div>

      {/* Chip 3 — deploy (bottom-left) */}
      <div className="absolute bottom-0 left-4 animate-float-3 flex items-center gap-3 px-4 py-3 bg-bg-3 border border-brand-amber/25 rounded-2xl shadow-[0_8px_32px_rgba(251,191,36,0.08)]">
        <div className="w-8 h-8 rounded-[8px] bg-brand-amber/12 flex items-center justify-center shrink-0">
          <Rocket size={14} className="text-brand-amber" />
        </div>
        <div>
          <div className="font-syne text-[18px] font-extrabold leading-none tracking-tight">
            <span className="text-text-3 text-xs font-normal mr-0.5">45→</span>
            <span className="text-brand-amber">8</span>
            <span className="text-brand-amber text-xs font-normal"> min</span>
          </div>
          <div className="text-[10px] text-text-3 mt-0.5">deploy via CI/CD</div>
        </div>
      </div>

    </div>
  )
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative z-10 flex items-center pt-[70px]"
      style={{ minHeight: '100dvh' }}
    >
      <div className="w-full max-w-[1100px] mx-auto px-5 md:px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Content */}
          <div className="opacity-0 -translate-y-5 animate-hero-in">

            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-medium text-accent-2 border border-accent/30 bg-accent/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse-dot" />
              Disponível para novas oportunidades
            </div>

            {/* Headline — menor, tracking menos apertado, peso 700 */}
            <h1 className="font-syne font-bold leading-[1.08] mb-5" style={{ fontSize: 'clamp(36px, 5vw, 58px)', letterSpacing: '-0.02em' }}>
              Full Stack<br />
              <span className="text-accent">Developer</span><br />
              <span className="text-text-2 font-normal" style={{ fontSize: 'clamp(28px, 4vw, 46px)' }}>& Problem Solver</span>
            </h1>

            {/* Description */}
            <p className="text-[16px] text-text-2 leading-relaxed mb-8 max-w-[460px] font-light">
              Olá, sou <strong className="text-text-1 font-medium">{siteMeta.name}</strong> — desenvolvedor Full Stack
              formado em Ciência da Computação pela UFSJ. Construo APIs, sistemas e
              interfaces que <strong className="text-text-1 font-medium">realmente funcionam em produção</strong>.{' '}
              {siteMeta.tagline}.
            </p>

            {/* Actions */}
            <div className="flex gap-4 flex-wrap mb-10">
              <a
                href="#projetos"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projetos')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 px-7 py-3 bg-accent text-white rounded-lg text-[15px] font-medium hover:bg-accent/85 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(108,99,255,0.35)] transition-all duration-200"
              >
                Ver Projetos ↓
              </a>
              <a
                href="#contato"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 px-7 py-3 border border-border-subtle text-text-1 rounded-lg text-[15px] font-normal hover:border-accent hover:text-accent-2 hover:-translate-y-0.5 transition-all duration-200"
              >
                Entrar em Contato
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border-subtle">
              {heroStats.map(({ value, suffix, label }) => (
                <div key={label}>
                  <div className="font-syne text-3xl font-extrabold text-text-1 leading-none">
                    {value}<span className="text-accent">{suffix}</span>
                  </div>
                  <div className="text-xs text-text-3 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics card */}
          <div className="hidden md:flex justify-center items-center">
            <MetricsCard />
          </div>

        </div>
      </div>
    </section>
  )
}