import { useState } from 'react'
import { contactLinks, siteMeta } from '@/data/portfolio'
import { SectionHeader } from '@/components/SectionHeader'
import { useScrollReveal } from '@/hooks/useScrollReveal'

function ContactLinks() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <div ref={ref} className="opacity-0 translate-y-8 transition-all duration-700">
      <SectionHeader
        label="Contato"
        title={<>Vamos construir<br />algo juntos?</>}
        subtitle="Estou disponível para posições full stack, backend ou Java, e projetos freelance. Me manda uma mensagem — respondo rápido."
      />

      <div className="flex flex-col gap-4">
        {contactLinks.map(({ id, label, value, icon, href }) => (
          <a
            key={id}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="flex items-center gap-4 px-5 py-4 bg-bg-3/85 border border-border-subtle rounded-lg hover:border-border hover:translate-x-1 transition-all duration-200 text-text-1 no-underline group"
          >
            <div className="w-10 h-10 bg-accent/12 rounded-lg flex items-center justify-center text-lg shrink-0">
              {icon}
            </div>
            <div>
              <span className="block text-xs text-text-3 font-normal mb-0.5">{label}</span>
              <span className="block text-sm font-medium group-hover:text-accent-2 transition-colors duration-200">{value}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

function ContactForm() {
  const ref = useScrollReveal<HTMLDivElement>()
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = () => {
    // Opens mailto with form data — replace with your preferred form handler (EmailJS, Formspree, etc.)
    const { name, email, subject, message } = form
    const body = encodeURIComponent(`De: ${name} (${email})\n\n${message}`)
    const sub = encodeURIComponent(subject || 'Contato via portfólio')
    window.location.href = `mailto:${siteMeta.email}?subject=${sub}&body=${body}`
    setStatus('sent')
  }

  const inputClass =
    'w-full px-4 py-3 bg-bg-3 border border-border-subtle rounded-lg text-text-1 text-sm font-dm outline-none focus:border-accent transition-colors duration-200 placeholder:text-text-3'

  return (
    <div
      ref={ref}
      className="flex flex-col gap-4 opacity-0 translate-y-8 transition-all duration-700 delay-200"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-xs text-text-2">Nome</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Seu nome"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs text-text-2">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs text-text-2">Assunto</label>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Proposta, projeto, parceria..."
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs text-text-2">Mensagem</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Conte um pouco sobre o projeto ou oportunidade..."
          rows={5}
          className={`${inputClass} resize-y min-h-[120px]`}
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={status === 'sending'}
        className="w-full py-3.5 bg-accent text-white rounded-lg text-[15px] font-medium hover:bg-accent/85 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(108,99,255,0.35)] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sent' ? '✓ Mensagem enviada!' : 'Enviar Mensagem ✈'}
      </button>
    </div>
  )
}

export function ContactSection() {
  return (
    <section id="contato" className="relative z-10 py-32 pb-40">
      <div className="max-w-[1100px] mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <ContactLinks />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
