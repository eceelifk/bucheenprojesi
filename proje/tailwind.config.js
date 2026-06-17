/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPeach: '#FE7466',
        brandPurple: '#7A75D7',
        textDark: '#2D2D2D',
        textGray: '#7D7D7D',
        bgLight: '#FFFAF8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}
