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
        basil: '#AFB49C',
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
      dropShadow: {
        evergreen: '3px 5px 4px rgba(51, 85, 52, 0.8)',
        myrtle: '3px 5px 1px rgba(14, 46, 3, 0.8)',
      },
      boxShadow: {
        'deep': '0 1px 18px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        teachers: ['Teachers', 'cursive'],
        bosk: ['Bosk', 'sans-serif'],
        biskiL: ['Biski', 'sans-serif'],
      },
      keyframes: {
        grow: {
          '0%': { height: '0%' },
          '100%': { height: '85%' }, // or whatever final height matches your layout
        },
      },
      animation: {
        'grow-stalk': 'grow 2s ease-out forwards',
      },
    },
  },
  plugins: [],
}
