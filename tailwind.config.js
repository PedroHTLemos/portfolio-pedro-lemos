/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        bg: {
          DEFAULT: '#0a0a0f',
          2: '#111118',
          3: '#18181f',
        },
        accent: {
          DEFAULT: '#6c63ff',
          2: '#a78bfa',
          3: '#38bdf8',
        },
        brand: {
          green: '#34d399',
          pink: '#f472b6',
          amber: '#fbbf24',
        },
        text: {
          1: '#f0f0f8',
          2: '#9090aa',
          3: '#5a5a72',
        },
        border: {
          DEFAULT: 'rgba(108,99,255,0.18)',
          subtle: 'rgba(240,240,248,0.07)',
        },
      },
      animation: {
        'pulse-dot': 'pulseDot 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out 1s infinite',
        'hero-in': 'heroIn 0.8s ease 0.2s forwards',
        'fade-up': 'fadeUp 0.7s ease forwards',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        heroIn: {
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
