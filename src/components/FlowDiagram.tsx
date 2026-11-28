/**
 * Fluxo em passos numerados, em HTML e CSS (sem imagem), para mecanismos
 * que não cabem em um print. Horizontal no desktop, vertical no mobile.
 */
export function FlowDiagram({ title, steps, label }: { title: string; steps: string[]; label: string }) {
  return (
    <figure>
      <figcaption className="mb-4 text-sm font-medium text-fg">
        <span className="text-muted">{label}: </span>
        {title}
      </figcaption>
      <ol className="grid gap-3 md:grid-cols-[repeat(var(--cols),minmax(0,1fr))]" style={{ ['--cols' as string]: steps.length }}>
        {steps.map((step, i) => (
          <li key={step} className="relative rounded-md border border-border p-4">
            <span className="block font-mono text-base text-accent" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="mt-2 block text-sm leading-relaxed text-muted">{step}</span>
          </li>
        ))}
      </ol>
    </figure>
  )
}
