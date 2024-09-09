/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'russo': ['"Russo One"', 'sans-serif'],
        'roboto': ['"Roboto Slab"', 'sans-serif'],
        'comfortaa': ['Comfortaa', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
