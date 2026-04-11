import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rouge:  { DEFAULT: '#cc3f35', dark: '#a8342b', light: '#e05048' },
        or:     { DEFAULT: '#f2a636', dark: '#d4891a', light: '#f7c068' },
        creme:  { DEFAULT: '#faf8f5', warm: '#fff4ef', dark: '#f0e8e0' },
        encre:  { DEFAULT: '#1a0e0a', light: '#2d1a14' },
        brun:   '#3d1e18',
        muted:  '#7a6058',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono:    ['"DM Mono"', 'monospace'],
      },
      animation: {
        'scroll-pulse': 'scrollPulse 2s ease-in-out infinite',
        'fade-in':      'fadeIn 0.6s ease both',
      },
      keyframes: {
        scrollPulse: { '0%, 100%': { opacity: '0.4' }, '50%': { opacity: '1' } },
        fadeIn:      { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'none' } },
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
export default config
