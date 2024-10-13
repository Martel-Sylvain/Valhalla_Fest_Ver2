
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textWhite: '#f1f5f9',
        textYellow: '#f5ba00',
        textBlack: '#18181b',
        textGold: '#75683b',
        bgGold: '#75683b',
        bgBlack: '#1c1917',
        glitchR: '#fe3e3e',
        glitchG: '#3df0cf',
        glitchW: '#f1f1f1'
      },
      fontFamily: {
        fontTitle: ['COPRGBT']
      },
      fontSize: {
        '9xl': '7rem',
        '10xl': '8rem',
        '11xl': '9rem',
        '12xl': '10rem',
        '13xl': '11rem',
        '14xl': '12rem',
      }
    },
  },
  plugins: [],
}

