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
        // Le Charme brand palette — extracted from official menu
        rouge:   { DEFAULT: '#cc3f35', dark: '#a8342b', light: '#e05048' },
        or:      { DEFAULT: '#f2a636', dark: '#d4891a', light: '#f7c068' },
        creme:   { DEFAULT: '#faf9f7', dark: '#f0ece6', warm: '#fff8f6' },
        encre:   '#1a0e0a',
        brun:    '#3d1e18',
        muted:   '#8a6a65',
        // Aliases for convenience
        brand:   '#cc3f35',
        gold:    '#f2a636',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono:    ['"DM Mono"', 'monospace'],
      },
      animation: {
        'scroll-pulse': 'scrollPulse 2s ease-in-out infinite',
      },
      keyframes: {
        scrollPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%':      { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
