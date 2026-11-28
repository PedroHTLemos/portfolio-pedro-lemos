/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist Variable', 'Geist Fallback', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono Variable', 'Geist Mono Fallback', 'ui-monospace', 'monospace'],
      },
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        fg: 'rgb(var(--fg) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        subtle: 'rgb(var(--subtle) / <alpha-value>)',
      },
      maxWidth: {
        content: '1120px',
      },
    },
  },
  plugins: [],
}
