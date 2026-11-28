// Calcula os valores de fonte de reserva (size-adjust, ascent/descent/line-gap-override)
// a partir das métricas publicadas em @capsizecss/metrics 4.4.0 (dev only).
// Uso: node scripts/fallback-metrics.mjs  (os valores impressos ficam fixos em src/index.css)
import geist from '@capsizecss/metrics/geist'
import geistMono from '@capsizecss/metrics/geistMono'
import arial from '@capsizecss/metrics/arial'
import courierNew from '@capsizecss/metrics/courierNew'

const pct = (v) => `${(v * 100).toFixed(2)}%`

function fallback(main, fb) {
  // Largura média do caractere (xWidthAvg) normalizada pelo em de cada fonte
  const mainWidth = main.xWidthAvg / main.unitsPerEm
  const fbWidth = fb.xWidthAvg / fb.unitsPerEm
  // size-adjust escala a reserva para a mesma largura média da fonte principal
  const sizeAdjust = mainWidth / fbWidth
  // Overrides em relação ao em já ajustado: divide pelo size-adjust
  return {
    sizeAdjust: pct(sizeAdjust),
    ascentOverride: pct(main.ascent / main.unitsPerEm / sizeAdjust),
    descentOverride: pct(Math.abs(main.descent) / main.unitsPerEm / sizeAdjust),
    lineGapOverride: pct(main.lineGap / main.unitsPerEm / sizeAdjust),
  }
}

const results = {
  'Geist Fallback Arial  (principal: Geist, reserva: Arial)': fallback(geist, arial),
  'Geist Mono Fallback Courier (principal: Geist Mono, reserva: Courier New)': fallback(geistMono, courierNew),
}

for (const [name, v] of Object.entries(results)) {
  console.log(name)
  for (const [k, val] of Object.entries(v)) console.log(`  ${k}: ${val}`)
}
