/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        un: {
           blue: '#0052B1',
        },
        gold: {
           accent: '#C5A059', // Subtle gold
        }
      },
      fontFamily: {
        sans: ['var(--font-funnel)', 'sans-serif'],
        heading: ['var(--font-lexend)', 'sans-serif'],
        mono: ['var(--font-courier)', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
