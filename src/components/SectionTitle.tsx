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

export function SectionTitle({
  id,
  eyebrow,
  large = false,
  children,
}: {
  id: string
  eyebrow?: string
  large?: boolean
  children: ReactNode
}) {
  return (
    <>
      {eyebrow && (
        <p className="mb-3 font-mono text-sm lowercase">
          <Eyebrow text={eyebrow} />
        </p>
      )}
      <h2
        id={id}
        className={`font-sans font-semibold leading-tight tracking-[-0.03em] text-fg ${large ? 'text-5xl md:text-6xl' : 'text-3xl md:text-4xl'}`}
      >
        {children}
      </h2>
    </>
  )
}
