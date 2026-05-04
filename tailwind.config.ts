import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg:      'hsl(var(--bg) / <alpha-value>)',
        elev:    'hsl(var(--bg-elev) / <alpha-value>)',
        surface: 'hsl(var(--surface) / <alpha-value>)',
        border:  'hsl(var(--border) / <alpha-value>)',
        fg:      'hsl(var(--fg) / <alpha-value>)',
        accent:  'hsl(var(--accent) / <alpha-value>)',
        accent2: 'hsl(var(--accent-2) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SF Mono', 'Menlo', 'monospace'],
      },
      animation: {
        float:     'float 4s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2.4s ease-in-out infinite',
        dashFlow:  'dashFlow 4s linear infinite',
        blink:     'blink 1s step-end infinite',
      },
      keyframes: {
        float:     { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' } },
        pulseGlow: { '0%,100%': { opacity: '0.55' }, '50%': { opacity: '1' } },
        dashFlow:  { to: { strokeDashoffset: '-200' } },
        blink:     { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
      },
    },
  },
  plugins: [],
}

export default config
