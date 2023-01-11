/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        unit8: "url('/assets/images/unit8.svg')",
        lab3: "url('/assets/images/Lab3.jpg')",
        "hero-pattern": "url('/assets/images/rectangle.svg')",
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
          900: "#141414",
        },
        secondary: {
          200: "#9A9A9A",
        },
      },
      fontSize: {
        3.75: "0.9375rem", //15px
        4.75: "1.1875rem", //19px
        "9.5xl": "2.375rem", //38px
        "11.75xl": "2.9375rem", //47px
        "14.75xl": "3.6875rem", //59px
        "18.25xl": "4.5625rem", //73px
        "23xl": "5.75rem", //92px
      },

      letterSpacing: {
        tightest: "0.15",
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
        9.75: "2.4375rem",
        11.75:'2.938rem',
        11.75:'2.938rem',
        
        2.5: "0.625rem",
        3.168: "0.792rem",
        6.332: "1.583rem",
        7.832: "1.958rem",
        9.832: "2.458rem",
        11.25: "2.8125rem",
        12.168: "3.042rem",
        14.25: "3.5625rem",
        15.332: "3.833rem",
        17.625: "4.4063rem",
        22.125: "5.5313rem",
        27.3375: "6.8438rem",
      },
      spacing:{
        6.5: "1.625rem",
        9.75: "2.4375rem",
        11.75:'2.938rem',
        12.5: "3.125rem",
        14.25: "3.5625rem",
        32.75: "8.1875rem",
        26.5: "6.6250rem",
      },

      borderRadius: {
        "8xl": "2rem", // 32px
      },

      width: {
        2.785: "0.69625rem",
        4.0725: "1.018125rem",
        18.75:"4.688rem",
        8.6825: "2.170625",
        8.715: "2.17875rem",
        47.3375 : "11.8344rem",
        64.5 : "16.125rem",
        66 : "16.5rem",
        84.5 : "21.125rem",
        141.25 : "35.3125rem",
        153.5 : "38.375rem",
        239 : "59.75rem"

      },

      maxWidth: {
        107.5: "26.875rem",
        147.5: "39.375rem",
        container: "89.17%",
      },

      minWidth: {
        147.5: "39.375rem",
      },

      height: {
        2.785: "0.69625rem",
        4.1575: "1.039375rem",
        48.25: "12.0625rem", //193px,
        61: "15.25rem",
        43.675: "10.91873rem",
        44.75: "11.1875rem",
        77.25: "19.3125rem",
        102: "25.5rem",
      },

      padding: {
        9.5: "2.375rem",
        20: "5rem",
        8.25:"2.063rem",
        61 : "15.25rem",
        43.675 : "10.91873rem",
        44.75 : "11.1875rem",
        43.675: "10.91873rem",
        44.75: "11.1875rem",
        48.25: "12.0625rem", //193px
        61: "15.25rem",
      },

      padding:{
        4.5 : "1.125",
        8.57: "2.1875",
        9.5 : "2.375rem",
        20: "5rem",
        20.25 :"5.0625rem"
       },



      maxHeight: {
        115.75: "28.9375rem", // 463px
        170: "42.5rem", // 680px
      },

      borderRadius: {
        "8xl": "2rem", // 32px
      },

      fontFamily: {
        neufile: "Neufile",
      },
    },
  },
  plugins: [],
};
