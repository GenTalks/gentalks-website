/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        evergreen: '#335534',
        forest: '#507C46',
        sprout: '#78B36D',
        honeydew: '#C7E2A5',
        matcha: '#A0BC4B',
        moss: '#84AB59',
        myrtle: '#0E2E03',
        laurel: '#8D9878',
        beaver: '#B1957D',
        chocolate: '#725036',
        capybara: '#B5855E',
        butter: '#FFDB6D',
        toffee: '#C6AC6D',
        canary: '#FBFFD7',
        fog: '#484743',
        sage: '#BAC4A6',
        caramel: '#FFF7F0',
        cream: '#FFFBF8',
      },
      /*
      fontFamily: {
        bosk: ['Poppins', 'sans-serif'],
        biski: ['Pacifico', 'cursive'],
        acherus: ['Montserrat', 'sans-serif'],
      },
      */
    },
  },
  plugins: [],
}
