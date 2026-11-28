import type { ReactNode } from 'react'

/** Rótulo "01 · Sobre" vira "01 / sobre": número em acento, resto em secundário */
function Eyebrow({ text }: { text: string }) {
  const match = text.match(/^(\d+)\s*·\s*(.*)$/)
  if (!match) return <span className="text-muted">{text}</span>
  const [, num, rest] = match
  return (
    <>
      <span className="text-accent">{num}</span>
      <span className="text-muted"> / {rest}</span>
    </>
  )
}

export function SectionTitle({ id, eyebrow, children }: { id: string; eyebrow?: string; children: ReactNode }) {
  return (
    <>
      {eyebrow && (
        <p className="mb-3 font-mono text-sm lowercase">
          <Eyebrow text={eyebrow} />
        </p>
      )}
      <h2 id={id} className="font-sans text-3xl font-semibold leading-tight tracking-[-0.03em] text-fg md:text-4xl">
        {children}
      </h2>
    </>
  )
}
