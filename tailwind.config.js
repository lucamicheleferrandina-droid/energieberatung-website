/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eefdf3',
          100: '#d6f9e0',
          200: '#aef0c4',
          300: '#78e2a2',
          400: '#43cb7d',
          500: '#22b063',
          600: '#158f4f',
          700: '#127242',
          800: '#125a37',
          900: '#0f4a2f',
        },
        ink: {
          900: '#1a2420',
          700: '#3a473f',
          500: '#5c6b62',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
