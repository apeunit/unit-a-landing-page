/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/images/rectangle.svg')",
      },
      colors: {
        primary: {
          100: "#E5E5E5",
          200: "#CBCBCB",
          300: "#B1B1B1",
          400: "#979797",
          500: "#7D7D7D",
          600: "#636363",
          700: "#494949",
          800: "#2E2E2E",
          900: "#141414"

        },
        secondary: {
          200: "#9A9A9A"
        },

      },
      fontSize: {
        "3.75": "0.9375rem",               //15px    
        "4.75": "1.1875rem",              //19px
        "9.5xl": "2.375rem",              //38px
        "11.75xl": "2.9375rem",           //47px
        "14.75xl": "3.6875rem",           //59px
        "18.25xl": "4.5625rem",           //73px
        "23xl": "5.75rem",                 //92px
      },

      letterSpacing: {
        "tightest": "0.15"
      },

      lineHeight: {
        "2.5": "0.625rem",
        "3.168": "0.792rem",
        "6.332": "1.583rem",
        "7.832": "1.958rem",
        "9.832": "2.458rem",
        "11.25": "2.8125rem",
        "12.168": "3.042rem",
        "14.25": "3.5625rem",
        "15.332": "3.833rem",
        "17.625": "4.4063rem",
        "22.125": "5.5313rem",
        "27.3375": "6.8438rem",
      },
      spacing:{
        '9.75': "2.4375rem",
        '11.75':'2.938rem'
      },

      borderRadius: {
        "8xl": "2rem" // 32px
      },

      width: {
        2.785: "0.69625rem",
        4.0725: "1.018125rem"
      },

      height: {
        2.785: "0.69625rem",
        4.1575: "1.039375rem"
      },

      fontFamily: {
        neufile: "Neufile"
      },
      

    },
  },
  plugins: [],
}
