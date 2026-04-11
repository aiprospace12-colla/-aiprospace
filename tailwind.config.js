/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#06060f',
        surface: '#0d0d1a',
        surface2: '#13131f',
        border: 'rgba(255,255,255,0.07)',
        purple: {
          DEFAULT: '#7b5ea7',
          light: '#9b7ec8',
          dark: '#5a4080',
          glow: 'rgba(123,94,167,0.4)',
        },
        cyan: {
          DEFAULT: '#00d4ff',
          glow: 'rgba(0,212,255,0.3)',
        },
        red: {
          accent: '#ff6b6b',
        },
        text: {
          primary: '#f0f0ff',
          muted: '#8888aa',
        },
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        dm: ['var(--font-dm-sans)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern':
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite 1s',
        'float-fast': 'float 4s ease-in-out infinite 2s',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(2deg)' },
          '66%': { transform: 'translateY(10px) rotate(-1deg)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'glow-purple': '0 0 30px rgba(123,94,167,0.5), 0 0 60px rgba(123,94,167,0.2)',
        'glow-cyan': '0 0 30px rgba(0,212,255,0.4), 0 0 60px rgba(0,212,255,0.15)',
        'glow-sm-purple': '0 0 15px rgba(123,94,167,0.4)',
        'glow-sm-cyan': '0 0 15px rgba(0,212,255,0.3)',
        glass: '0 8px 32px 0 rgba(0,0,0,0.4)',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#f0f0ff',
            a: { color: '#00d4ff' },
            h1: { color: '#f0f0ff', fontFamily: 'var(--font-syne)' },
            h2: { color: '#f0f0ff', fontFamily: 'var(--font-syne)' },
            h3: { color: '#f0f0ff', fontFamily: 'var(--font-syne)' },
            strong: { color: '#f0f0ff' },
            code: { color: '#00d4ff', backgroundColor: '#0d0d1a' },
            blockquote: { borderLeftColor: '#7b5ea7', color: '#8888aa' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
