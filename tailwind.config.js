/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        unit8: "url('/assets/images/unit8-project.svg')",
        lab3: "url('/assets/images/lab3.jpg')",
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
        3.75: "0.9375rem",
        4.5: "1.125rem",
        4.75:"1.1875rem",
        5.75:"1.4375rem",
        6:"1.5rem",
        6.5:"1.625rem",
        7.25:"1.8125rem",
        9.5: "2.375rem",
        11.75: "2.9375rem",
        14.75: "3.6875rem",
        18.25: "4.5625rem",
        23: "5.75rem",
      },

      letterSpacing: {
        0.015: "0.015em",
        0.02: "0.02em",
        0.6: "0.15",
       
      },

      lineHeight: {
        2.5: "0.625rem",
        3.17: "0.792rem",
        4.95: "1.2375rem",
        5.5:"1.375rem",
        6.32:"1.58125rem",
        6.33: "1.583rem",
        6.75:"1.6875rem",
        7.15:"1.7875rem",
        7.5:"1.875rem",
        7.83: "1.958rem",
        9.5: "2.375rem",
        9.83: "2.458rem",
        11:"2.75rem",
        11.25: "2.8125rem",
        12.17: "3.042rem",
        12:"3rem",
        12.25:"3.0625rem",
        14.25: "3.5625rem",
        14.75:"3.6875rem",
        15.33: "3.833rem",
        17.63: "4.4063rem",
        18.5:"4.625rem",
        22:"5.5rem",
        22.13: "5.53125rem",
        22.75:"5.6875rem",
        27.34: "6.8438rem",
      },
      spacing: {
        0.13: "0.03125rem",
        2.5: "0.625rem",
        2.75:"0.6875rem",
        2.79: "0.69625rem",
        2.99:"0.7475rem",
        3.17: "0.792rem",
        4.07: "1.018125rem",
        4.15: "1.0375rem",
        4.16: "1.039375rem",
        4.5:"1.125rem",
        4.75: "1.1875rem",
        4.85: "1.2125rem",
        5.5: "1.375rem",
        5.75:"1.4375rem",
        6.33: "1.583rem",
        6.37 : "1.594rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        7.83: "1.958rem",
        8.25: "2.0625rem",
        8.68: "2.170625",
        8.72: "2.17875rem",
        9.25: "2.3125rem",
        9.5: "2.375rem",
        9.75: "2.4375rem",
        9.83: "2.458rem",
        10.5: "2.625rem",
        10.75: "2.6880rem",
        11.25: "2.8125rem",
        11.75: "2.9375rem",
        12.17: "3.042rem",
        12.5: "3.125rem",
        12.75: "3.1875rem",
        13.5: "3.375rem",
        13.75: "3.438rem",
        14.25: "3.5625rem",
        15.15: "3.7875rem",
        15.25: "3.813rem",
        15.33: "3.833rem",
        16.5: "4.125rem",
        17:"4.25rem",
        17.15: "4.2875rem",
        17.5: "4.375rem",
        17.63: "4.4063rem",
        18.75: "4.688rem",
        19.75: "4.9375rem",
        20: "5rem",
        20.25: "5.0625rem",
        22.13: "5.5313rem",
        23: "5.75rem",
        23.25:"5.8125rem",
        23.5:"5.875rem",
        24.25: "6.063rem",
        25.49: "6.37125rem",
        26: "6.5rem",
        26.5: "6.6250rem",
        27.34: "6.8438rem",
        27.5: "6.875rem",
        30.25:"7.5625rem",
        30.75: "7.688rem",
        31.25: "7.8125rem",
        32.75: "8.1875rem",
        33: "8.25rem",
        35:"8.75rem",
        36.25:"9.0625rem",
        39.25: "9.8125rem",
        40: "10rem",
        43.68: "10.91873rem",
        44.75: "11.1875rem",
        45: "11.25rem",
        47.25: "11.8125rem",
        47.34: "11.8344rem",
        48.25: "12.0625rem",
        48.5: "12.125rem",
        55.25: "13.8125rem",
        57.25: "14.3125rem",
        57.75: "14.4375rem",
        58.75:"14.6875rem",
        59.5: "14.875rem",
        61: "15.25rem",
        64.5: "16.125rem",
        66: "16.5rem",
        69.25: "17.3125rem",
        75: "18.75rem",
        77.25: "19.3125rem",
        84.5: "21.125rem",
        95.5: "23.875rem",
        97.5: "24.375rem",
        102: "25.5rem",
        107.5: "26.875rem",
        115.75: "28.9375rem",
        141.25: "35.3125rem",
        147.5: "39.375rem",
        150: "37.5rem",
        153.5: "38.375rem",
        157.5: "39.375rem",
        162.5: "40.625rem",
        170: "42.5rem",
        212.5: "53.125rem",
        233: "58.25rem",
        239: "59.75rem",
        295.25: "73.8125rem",
        320: "80rem",
        74.69: "74.69%",
        87.38: "87.38%",
        87.65: "87.65%",
        "3.73/5": "74.69%",
        "4.37/5": "87.38%",
        "4.38/5": "87.65%",
        "3.7/4": "92.5%",
      },

      maxWidth: {
        97.5: "24.375rem",
        107.5: "26.875rem",
        147.5: "39.375rem",
        70: "24.375rem",
        233: "58.25rem",
        260:'65rem',
      },

      borderRadius: {
        8: "2rem",
        11.25: "4.5rem"
      },
    },
  },
  plugins: [],
};
