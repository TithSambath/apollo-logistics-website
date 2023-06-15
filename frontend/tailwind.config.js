/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['NotoSans', ...defaultTheme.fontFamily.sans],
      heading: ['NotoSans', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        orange: '#F6921E',
        blue: '#1683BF',
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms'),]
};
