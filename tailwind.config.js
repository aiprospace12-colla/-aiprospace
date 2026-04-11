/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        bg:     'var(--bg)',
        card:   'var(--card)',
        border: 'var(--border)',
        tx:     'var(--text)',
        muted:  'var(--muted)',
        hover:  'var(--hover)',
      },
    },
  },
  plugins: [],
}
