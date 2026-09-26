/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f7f0',
          100: '#dcecdc',
          200: '#bcd6bc',
          300: '#8db88e',
          400: '#5a925b',
          500: '#3a733b',
          600: '#2c5c2d',
          700: '#244a25',
          800: '#1e3c20',
          900: '#163017',
          950: '#0d1f0e',
        },
        charcoal: {
          50: '#f6f7f7',
          100: '#e2e5e5',
          200: '#c6cbcc',
          300: '#9fa6a8',
          400: '#717b7e',
          500: '#555f62',
          600: '#444d50',
          700: '#3a4244',
          800: '#2f3537',
          900: '#252a2b',
          950: '#1a1e1f',
        },
        techblue: {
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
        accent: {
          green: '#4ade80',
          lime: '#a3e635',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['clamp(2.5rem, 6vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-xl': ['clamp(2rem, 4.5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'route-draw': 'routeDraw 2.5s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'dash-flow': 'dashFlow 1.5s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bar-grow': 'barGrow 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        routeDraw: {
          '0%': { strokeDashoffset: '1000' },
          '50%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '-1000' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        dashFlow: {
          '0%': { strokeDashoffset: '40' },
          '100%': { strokeDashoffset: '0' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(20px)' },
          '50%': { opacity: '0.7', filter: 'blur(30px)' },
        },
        barGrow: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
    },
  },
  plugins: [],
};
