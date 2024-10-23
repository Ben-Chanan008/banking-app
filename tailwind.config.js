/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,tsx,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      },
      // borderBottom: {
      //   '1':
      // }
    },
  },
  plugins: [],
}

