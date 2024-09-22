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
      colors: {
        'main-light': '#1BE58E',
        'main-dark': '#1BED92',
        'basic-light': '#FFFFFF',
        'basic-dark': '#101312',
      },
    }
  },
  plugins: [],
}
