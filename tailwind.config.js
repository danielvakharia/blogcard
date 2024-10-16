/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['Figtree', 'san-serif']
      },
      dropShadow: {
        '3xl': '10px 10px 0px rgb(0, 0, 0)',
      }
    },
  },
  plugins: [],
}

