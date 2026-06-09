import { siteMeta, heroStats } from '@/data/portfolio'

function MetricsCard() {
  return (
    <div className="relative w-[320px] h-[300px]">

      {/* Orb central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-full"
        style={{ background: 'rgba(108,99,255,0.06)' }}
      />

      {/* Linhas tracejadas */}
      <svg className="absolute inset-0 pointer-events-none" width="320" height="300" viewBox="0 0 320 300" fill="none" aria-hidden="true">
        <line x1="155" y1="148" x2="90" y2="55" stroke="rgba(108,99,255,0.1)" strokeWidth="1" strokeDasharray="4 5" />
        <line x1="155" y1="148" x2="248" y2="125" stroke="rgba(108,99,255,0.1)" strokeWidth="1" strokeDasharray="4 5" />
        <line x1="155" y1="148" x2="100" y2="252" stroke="rgba(108,99,255,0.1)" strokeWidth="1" strokeDasharray="4 5" />
        <circle cx="155" cy="148" r="3.5" fill="#6c63ff" fillOpacity="0.45" />
      </svg>

      {/* Chip 1 — Query performance */}
      <div className="absolute top-0 left-0 animate-float
        flex items-center gap-3 px-[18px] py-[14px]
        bg-bg-3 border border-accent/20 rounded-2xl"
      >
        <div className="w-9 h-9 rounded-[9px] bg-accent/15 flex items-center justify-center text-[17px] shrink-0">⚡</div>
        <div>
          <div className="font-syne text-[20px] font-extrabold text-accent leading-none">−40%</div>
          <div className="text-[11px] text-text-3 mt-0.5">query response time</div>
        </div>
      </div>

      {/* Chip 2 — Zero downtime */}
      <div className="absolute top-[95px] right-0 animate-float-delayed
        flex items-center gap-3 px-[18px] py-[14px]
        bg-bg-3 border border-brand-green/20 rounded-2xl"
      >
        <div className="w-9 h-9 rounded-[9px] bg-brand-green/10 flex items-center justify-center text-[17px] shrink-0">🛡️</div>
        <div>
          <div className="font-syne text-[20px] font-extrabold leading-none">
            <span className="text-brand-green">0</span>
            <span className="text-text-1"> downtime</span>
          </div>
          <div className="text-[11px] text-text-3 mt-0.5">1 ano em produção</div>
        </div>
        <span className="w-[7px] h-[7px] rounded-full bg-brand-green animate-pulse-dot ml-1 shrink-0" />
      </div>

      {/* Chip 3 — Deploy */}
      <div className="absolute bottom-0 left-5 animate-float
        flex items-center gap-3 px-[18px] py-[14px]
        bg-bg-3 border border-brand-amber/20 rounded-2xl"
        style={{ animationDelay: '1.3s' }}
      >
        <div className="w-9 h-9 rounded-[9px] bg-brand-amber/10 flex items-center justify-center text-[17px] shrink-0">🚀</div>
        <div>
          <div className="font-syne text-[20px] font-extrabold leading-none">
            <span className="text-text-3 text-sm font-normal">45 → </span>
            <span className="text-brand-amber">8</span>
            <span className="text-brand-amber text-[13px] font-normal"> min</span>
          </div>
          <div className="text-[11px] text-text-3 mt-0.5">deploy via CI/CD</div>
        </div>
      </div>

    </div>
  )
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex items-center pt-[70px]"
    >
      <div className="w-full max-w-[1100px] mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <div className="opacity-0 -translate-y-5 animate-hero-in">
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-medium text-accent-2 border border-accent/30 bg-accent/10 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse-dot" />
              Disponível para novas oportunidades
            </div>

            {/* Headline */}
            <h1 className="font-syne font-extrabold leading-[1.05] tracking-[-2px] mb-6" style={{ fontSize: 'clamp(42px, 6vw, 72px)' }}>
              Full Stack<br />
              <span className="text-accent">Developer</span><br />
              <span className="text-text-2 font-normal">& Problem Solver</span>
            </h1>

            {/* Description */}
            <p className="text-[17px] text-text-2 leading-relaxed mb-10 max-w-[480px] font-light">
              Olá, sou <strong className="text-text-1 font-medium">{siteMeta.name}</strong> — desenvolvedor Full Stack
              formado em Ciência da Computação pela UFSJ. Construo APIs, sistemas e
              interfaces que <strong className="text-text-1 font-medium">realmente funcionam em produção</strong>.{' '}
              {siteMeta.tagline}.
            </p>

            {/* Actions */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="#projetos"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projetos')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white rounded-lg text-[15px] font-medium hover:bg-accent/85 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(108,99,255,0.35)] transition-all duration-200"
              >
                Ver Projetos ↓
              </a>
              <a
                href="#contato"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-border-subtle text-text-1 rounded-lg text-[15px] font-normal hover:border-accent hover:text-accent-2 hover:-translate-y-0.5 transition-all duration-200"
              >
                Entrar em Contato
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-14 pt-10 border-t border-border-subtle">
              {heroStats.map(({ value, suffix, label }) => (
                <div key={label}>
                  <div className="font-syne text-4xl font-extrabold text-text-1 leading-none">
                    {value}<span className="text-accent">{suffix}</span>
                  </div>
                  <div className="text-xs text-text-3 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual — hidden on mobile */}
          <div className="hidden md:flex justify-center items-center">
            <MetricsCard />
          </div>
        </div>
      </div>
    </section>
  )
}
