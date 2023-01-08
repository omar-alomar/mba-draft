/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Nunito': ['"Nunito"', '"sans-serif"'],
        'Fira': ['"Fira Sans"', '"sans-serif"']
      },
      colors: {
        mbaRed: '#6B293C',
        hoverRed: '#B85873',
        'submit': {
          DEFAULT: '#34CF7F',
          'hover': '#289E61'
        },
        'edit': {
          DEFAULT: '#E4B538',
          'hover': '#E8C76D'
        }
      }
    },
  },
  plugins: [],
}
