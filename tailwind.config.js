/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        bg: {
          DEFAULT: 'rgb(var(--bg) / <alpha-value>)',
          2: 'rgb(var(--bg-2) / <alpha-value>)',
          3: 'rgb(var(--bg-3) / <alpha-value>)',
        },
        accent: {
          DEFAULT: '#6c63ff',
          2: 'rgb(var(--accent-2) / <alpha-value>)',
          3: 'rgb(var(--accent-3) / <alpha-value>)',
        },
        brand: {
          green: 'rgb(var(--brand-green) / <alpha-value>)',
          pink: 'rgb(var(--brand-pink) / <alpha-value>)',
          amber: 'rgb(var(--brand-amber) / <alpha-value>)',
        },
        text: {
          1: 'rgb(var(--text-1) / <alpha-value>)',
          2: 'rgb(var(--text-2) / <alpha-value>)',
          3: 'rgb(var(--text-3) / <alpha-value>)',
        },
        border: {
          DEFAULT: 'var(--border)',
          subtle: 'var(--border-subtle)',
        },
        overlay: 'rgb(var(--overlay) / <alpha-value>)',
      },
      animation: {
        'pulse-dot':      'pulseDot 2s infinite',
        'float-1':        'float1 3.8s ease-in-out infinite',
        'float-2':        'float2 4.3s ease-in-out 0.7s infinite',
        'float-3':        'float3 3.6s ease-in-out 1.4s infinite',
        'hero-in':        'heroIn 0.8s ease 0.2s forwards',
        'fade-up':        'fadeUp 0.7s ease forwards',
        'connector-draw': 'connectorDraw 1.2s ease 0.5s forwards',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.5', transform: 'scale(0.8)' },
        },
        float1: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
        float3: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        heroIn: {
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        connectorDraw: {
          to: { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
}