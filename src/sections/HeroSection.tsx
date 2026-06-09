import { siteMeta, heroStats } from '@/data/portfolio'

function CodeCard() {
  return (
    <div className="relative w-[340px] h-[420px]">
      {/* Behind cards */}
      <div
        className="absolute inset-0 bg-bg-3 border border-border-subtle rounded-2xl opacity-30"
        style={{ transform: 'rotate(-6deg)', top: 40, left: -40, right: 40 }}
      />
      <div
        className="absolute inset-0 bg-bg-3 border border-border-subtle rounded-2xl opacity-60"
        style={{ transform: 'rotate(-3deg)', top: 20, left: -20, right: 20 }}
      />

      {/* Main card */}
      <div className="absolute inset-0 bg-bg-3 border border-border-subtle rounded-2xl p-6 z-10">
        {/* Traffic lights */}
        <div className="flex gap-1.5 mb-5">
          <div className="code-dot-r" />
          <div className="code-dot-y" />
          <div className="code-dot-g" />
        </div>

        {/* Code */}
        <div className="font-mono text-[13px] leading-[1.8]">
          <span className="text-text-3">// api.service.ts</span>
          <br />
          <br />
          <span className="text-accent-2">export const</span>{' '}
          <span className="text-accent-3">getReport</span>{' '}
          <span className="text-accent-2">= async</span> () {'=>'} {'{'}
          <br />
          &nbsp; <span className="text-text-3">// ~40% faster after optimization</span>
          <br />
          &nbsp; <span className="text-accent-2">const</span>{' '}
          <span className="text-text-1">result</span>{' '}
          <span className="text-accent-2">=</span>{' '}
          <span className="text-accent-2">await</span> db
          <br />
          &nbsp;&nbsp;&nbsp; .<span className="text-accent-3">query</span>(
          <span className="text-brand-green">'SELECT * FROM...'</span>)
          <br />
          &nbsp;&nbsp;&nbsp; .<span className="text-accent-3">withIndex</span>(
          <span className="text-brand-green">'idx_financial'</span>)
          <br />
          &nbsp;&nbsp;&nbsp; .<span className="text-accent-3">execute</span>();
          <br />
          <br />
          &nbsp; <span className="text-accent-2">return</span> {'{ '}
          <span className="text-text-1">data</span>: result,{' '}
          <span className="text-text-1">status</span>:{' '}
          <span className="text-brand-amber">200</span> {'}'};
          <br />
          {'}'}
        </div>
      </div>

      {/* Float badges */}
      <div
        className="absolute z-20 flex items-center gap-2 bg-bg-3 border border-border rounded-lg px-4 py-2.5 text-xs font-medium whitespace-nowrap animate-float"
        style={{ bottom: 20, right: -20 }}
      >
        <span>⚡</span>
        Deploy:{' '}
        <strong className="text-brand-green">8 min</strong> → CI/CD
      </div>
      <div
        className="absolute z-20 flex items-center gap-2 bg-bg-3 border border-border rounded-lg px-4 py-2.5 text-xs font-medium whitespace-nowrap animate-float-delayed"
        style={{ bottom: -20, left: -10 }}
      >
        <span>🧪</span>
        Test coverage:{' '}
        <strong className="text-accent-2">81%</strong>
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
            <CodeCard />
          </div>
        </div>
      </div>
    </section>
  )
}
