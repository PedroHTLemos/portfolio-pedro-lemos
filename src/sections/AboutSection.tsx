import { aboutParagraphs, aboutSkillGroups } from '@/data/portfolio'
import { SectionHeader } from '@/components/SectionHeader'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const skillColorMap = {
  node: 'bg-brand-green/10 border-brand-green/20 text-brand-green hover:bg-brand-green/20',
  java: 'bg-brand-amber/10 border-brand-amber/20 text-brand-amber hover:bg-brand-amber/20',
  infra: 'bg-accent-3/10 border-accent-3/20 text-accent-3 hover:bg-accent-3/20',
  default: 'bg-accent/10 border-accent/20 text-accent-2 hover:bg-accent/20',
}

function ExperienceCards() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="flex flex-col gap-5 opacity-0 translate-y-8 transition-all duration-700 delay-200"
    >
      {[
        { company: 'Freelancer Full Stack', role: 'Desenvolvimento web autônomo', period: '2023 – presente', accent: 'bg-brand-green' },
        { company: 'dti digital', role: 'Estagiário de Desenvolvimento de Software', period: '2022 – 2023', accent: 'bg-accent' },
        { company: 'Linked – Empresa Júnior UFSJ', role: 'Diretor de Projetos', period: '2019 – 2022', accent: 'bg-brand-amber' },
      ].map(({ company, role, period, accent }) => (
        <div
          key={company}
          className="relative bg-bg-3/85 border border-border-subtle rounded-2xl px-7 py-6 backdrop-blur-sm hover:border-border hover:translate-x-1 transition-all duration-300 overflow-hidden"
        >
          <div className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-r-sm ${accent}`} />
          <div className="flex justify-between items-start">
            <div>
              <div className="font-syne font-bold text-base">{company}</div>
              <div className="text-sm text-text-2 font-light mt-1">{role}</div>
            </div>
            <div className="text-xs text-text-3 shrink-0 ml-4">{period}</div>
          </div>
        </div>
      ))}

      {/* Education card */}
      <div className="bg-bg-3/85 border border-border-subtle rounded-2xl px-7 py-6 backdrop-blur-sm">
        <div className="font-syne text-xs font-semibold tracking-[2px] uppercase text-text-3 mb-4">Formação</div>
        <div className="font-syne font-bold text-base">Ciência da Computação</div>
        <div className="text-sm text-text-2 font-light mt-1">Universidade Federal de São João del-Rei · UFSJ</div>
        <div className="text-xs text-accent-2 font-medium mt-2">2018 - 2026</div>
      </div>
    </div>
  )
}

export function AboutSection() {
  const textRef = useScrollReveal<HTMLDivElement>()

  return (
    <section id="sobre" className="relative z-10 py-32">
      <div className="max-w-[1100px] mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

          {/* Text */}
          <div
            ref={textRef}
            className="opacity-0 translate-y-8 transition-all duration-700"
          >
            <SectionHeader
              label="Sobre mim"
              title={<>Código limpo,<br />resultado real</>}
            />

            <div className="flex flex-col gap-5">
              {aboutParagraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[17px] text-text-2 leading-[1.8] font-light"
                  dangerouslySetInnerHTML={{ __html: p.replace(/<strong>/g, '<strong class="text-text-1 font-medium">') }}
                />
              ))}
            </div>

            {/* Skill tags */}
            <div className="mt-10 flex flex-col gap-3">
              {aboutSkillGroups.map(({ color, skills }) => (
                <div key={skills[0]} className="flex flex-wrap gap-2.5">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`skill-tag ${skillColorMap[color]} cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Cards */}
          <ExperienceCards />
        </div>
      </div>
    </section>
  )
}
