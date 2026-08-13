import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      colors: {
        brand: {
          50: 'rgb(var(--brand-50) / <alpha-value>)',
          100: 'rgb(var(--brand-100) / <alpha-value>)',
          200: 'rgb(var(--brand-200) / <alpha-value>)',
          300: 'rgb(var(--brand-300) / <alpha-value>)',
          400: 'rgb(var(--brand-400) / <alpha-value>)',
          500: 'rgb(var(--brand-500) / <alpha-value>)',
          600: 'rgb(var(--brand-600) / <alpha-value>)',
          700: 'rgb(var(--brand-700) / <alpha-value>)',
          800: 'rgb(var(--brand-800) / <alpha-value>)',
          900: 'rgb(var(--brand-900) / <alpha-value>)',
          950: 'rgb(var(--brand-950) / <alpha-value>)'
        },
        steel: {
          50: 'rgb(var(--steel-50) / <alpha-value>)',
          100: 'rgb(var(--steel-100) / <alpha-value>)',
          200: 'rgb(var(--steel-200) / <alpha-value>)',
          300: 'rgb(var(--steel-300) / <alpha-value>)',
          400: 'rgb(var(--steel-400) / <alpha-value>)',
          500: 'rgb(var(--steel-500) / <alpha-value>)',
          600: 'rgb(var(--steel-600) / <alpha-value>)',
          700: 'rgb(var(--steel-700) / <alpha-value>)',
          800: 'rgb(var(--steel-800) / <alpha-value>)',
          900: 'rgb(var(--steel-900) / <alpha-value>)',
          950: 'rgb(var(--steel-950) / <alpha-value>)'
        },
        // Semantic tokens — values flip with `.dark` via the CSS variables.
        background: 'rgb(var(--color-background) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        'surface-2': 'rgb(var(--color-surface-2) / <alpha-value>)',
        ink: {
          DEFAULT: 'rgb(var(--color-ink) / <alpha-value>)',
          soft: 'rgb(var(--color-ink-soft) / <alpha-value>)'
        },
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        'border-strong': 'rgb(var(--color-border-strong) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        accent: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          soft: 'rgb(var(--color-accent-soft) / <alpha-value>)'
        },
        success: {
          DEFAULT: 'rgb(var(--color-success) / <alpha-value>)',
          soft: 'rgb(var(--color-success-soft) / <alpha-value>)'
        },
        warning: {
          DEFAULT: 'rgb(var(--color-warning) / <alpha-value>)',
          soft: 'rgb(var(--color-warning-soft) / <alpha-value>)'
        },
        error: {
          DEFAULT: 'rgb(var(--color-error) / <alpha-value>)',
          soft: 'rgb(var(--color-error-soft) / <alpha-value>)'
        }
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Space Grotesk Variable"', '"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif']
      },
      fontSize: {
        // Fluid display scale — floor, preferred (vw), cap
        display: ['clamp(2.75rem, 1.5rem + 4.5vw, 4.75rem)', { lineHeight: '1.02', letterSpacing: '-0.035em', fontWeight: '500' }],
        h1: ['clamp(2.25rem, 1.25rem + 3vw, 3.5rem)', { lineHeight: '1.08', letterSpacing: '-0.028em', fontWeight: '500' }],
        h2: ['clamp(1.875rem, 1.125rem + 2vw, 2.75rem)', { lineHeight: '1.12', letterSpacing: '-0.024em', fontWeight: '500' }],
        h3: ['clamp(1.5rem, 1.125rem + 1vw, 1.875rem)', { lineHeight: '1.25', letterSpacing: '-0.018em', fontWeight: '500' }],
        h4: ['1.25rem', { lineHeight: '1.35', letterSpacing: '-0.012em', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.65' }],
        body: ['1rem', { lineHeight: '1.6' }],
        small: ['0.875rem', { lineHeight: '1.5' }],
        caption: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.02em' }]
      },
      spacing: {
        'section': 'clamp(4.5rem, 3rem + 6vw, 8rem)',
        'section-sm': 'clamp(3rem, 2rem + 4vw, 5rem)'
      },
      borderRadius: {
        xs: '0.125rem',
        sm: '0.25rem',
        md: '0.375rem',
        DEFAULT: '0.5rem',
        lg: '0.625rem',
        xl: '1rem',
        '2xl': '1.25rem'
      },
      boxShadow: {
        xs: '0 1px 2px rgb(11 26 44 / 0.05)',
        sm: '0 1px 3px rgb(11 26 44 / 0.06), 0 1px 2px rgb(11 26 44 / 0.04)',
        md: '0 4px 12px rgb(11 26 44 / 0.07), 0 2px 4px rgb(11 26 44 / 0.04)',
        lg: '0 12px 32px rgb(11 26 44 / 0.10), 0 4px 8px rgb(11 26 44 / 0.05)',
        xl: '0 24px 60px rgb(11 26 44 / 0.14), 0 8px 16px rgb(11 26 44 / 0.06)',
        ring: '0 0 0 3px rgb(var(--color-accent) / 0.25)',
        'brand-glow': '0 8px 24px rgb(37 97 155 / 0.28)'
      },
      transitionDuration: {
        fast: '150ms',
        base: '250ms',
        slow: '400ms'
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.2, 0, 0, 1)',
        emphasized: 'cubic-bezier(0.22, 1, 0.36, 1)'
      },
      maxWidth: {
        container: '75rem'
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(1rem)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-down': {
          from: { opacity: '0', transform: 'translateY(-1rem)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.96)' },
          to: { opacity: '1', transform: 'scale(1)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 400ms cubic-bezier(0.2, 0, 0, 1) both',
        'slide-up': 'slide-up 500ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'slide-down': 'slide-down 400ms cubic-bezier(0.2, 0, 0, 1) both',
        'scale-in': 'scale-in 300ms cubic-bezier(0.22, 1, 0.36, 1) both'
      }
    }
  },
  plugins: []
}
