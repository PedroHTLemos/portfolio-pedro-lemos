import { useState } from 'react'
import { Mail, MapPin } from 'lucide-react'
import { siteMeta } from '@/data/portfolio'
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

      <div className="flex items-center gap-3 mt-2">
        {/* Email */}
        <a
          href={`mailto:${siteMeta.email}`}
          className="w-11 h-11 bg-bg-3 border border-border-subtle rounded-xl flex items-center justify-center text-text-2 hover:border-accent hover:text-accent-2 hover:-translate-y-0.5 transition-all duration-200"
          title={siteMeta.email}
        >
          <Mail size={18} />
        </a>

        {/* LinkedIn */}
        <a
          href={siteMeta.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 bg-bg-3 border border-border-subtle rounded-xl flex items-center justify-center text-text-2 hover:border-accent hover:text-accent-2 hover:-translate-y-0.5 transition-all duration-200"
          title="LinkedIn"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
          </svg>
        </a>

        {/* GitHub */}
        <a
          href={siteMeta.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 bg-bg-3 border border-border-subtle rounded-xl flex items-center justify-center text-text-2 hover:border-accent hover:text-accent-2 hover:-translate-y-0.5 transition-all duration-200"
          title="GitHub"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
        </a>

        {/* Localização */}
        <div className="flex items-center gap-1.5 ml-2 text-xs text-text-3">
          <MapPin size={12} />
          São João del-Rei, MG · Brasil
        </div>
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
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Seu nome" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs text-text-2">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="seu@email.com" className={inputClass} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs text-text-2">Assunto</label>
        <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Proposta, projeto, parceria..." className={inputClass} />
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