/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",  "./src/**/*.ts",  "./src/**/*.less",
],
theme: {
  colors: {
    primary: '#ce2d2d',
      black: '#000',
      w: '#fff',
      indigo: '#9289FF',
      bg: {
        f2: '#F2F4F7',
    },
    gray: {
      70: '#707070',
        97: '#979DA2',
        24: '#24272A',
        f2: '#f2f2f2',
        f8: '#F8F8F8',
        d3: '#d3d3d3',
        e3: '#E3E3E3',
        d8: '#D8DDE4',
        c8: '#8C9298',
    },
    error: '#EB7171',
      red: '#ED302A',
      warning: '#FBAD29'
  },
  borderWidth: {
    half: "0.5px",
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
  },
  borderRadius: {
    2: "2px",
      4: "4px",
      8: '8px',
      20: '20px',
      full: '100%',
  },
  extend: {
    boxShadow: {
      '3-20': '0 3px 20px #DBDBDB80',
    },
    fontFamily: {
      neueNormal: ["neueNormal","sans-serif"],
        neueMedium: ["neueMedium","sans-serif"],
        neueBold: ["neueBold","sans-serif"],
    },
    fontSize: {
      '12': '12px',
        '14': '14px',
        '15': '15px',
        '16': '16px',
        '18': '18px',
    },
    minWidth: {
      '500': '500px',
        '700': '700px',
        '900': '900px',
    },
    width: {
      '24': '24px',
        '32': '32px',
        '36': '36px',
        '44': '44px',
        '52': '52px',
        '56': '56px',
        '122': '122px',
        '127': '127px',
        '170': '170px',
    },
    height: {
      '24': '24px',
        '32': '32px',
        '36': '36px',
        '44': '44px',
        '52': '52px',
        '56': '56px',
        '77': '77px',
        '120': '120px',
        '240': '240px',
        '275': '275px',
        '470': '470px',
        '540': '540px',
        '580': '580px',
        '600': '600px',
    },
    flexBasis: {
      '32': '32px',
        '52': '52px',
    }
  },
},
plugins: [],
}
