import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}','./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        noir: '#0e0b08', encre: '#1a1410',
        bordeaux: { DEFAULT: '#6b1f2a', light: '#8b2d3a' },
        or: { DEFAULT: '#c9a84c', light: '#e8c97a' },
        creme: { DEFAULT: '#f5efe6', dark: '#ede4d6', warm: '#faf6f0' },
        brun: '#3d2b1a', muted: '#8a7a6a',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      animation: { 'scroll-pulse': 'scrollPulse 2s ease-in-out infinite' },
      keyframes: { scrollPulse: { '0%, 100%': { opacity: '0.4' }, '50%': { opacity: '1' } } },
    },
  },
  plugins: [],
}
export default config
