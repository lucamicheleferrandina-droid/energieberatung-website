/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Salbeigrün aus Lucas Kundenpräsentation (Basiston #a7bf61 = brand-400)
        brand: {
          50: '#f9fbf4',
          100: '#edf2de',
          200: '#d7e2b6',
          300: '#bed08b',
          400: '#a7bf61',
          500: '#8ea744',
          600: '#63742f',
          700: '#4a5723',
          800: '#37411a',
          900: '#252c12',
        },
        ink: {
          900: '#171717',
          700: '#404040',
          500: '#737373',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
