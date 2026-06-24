/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        neutral__900: '#1C1A19',
        neutral__800: '#2D2E1D',
        neutral__700: '#34302D',
        neutral__600: '#4A4846',
        neutral__400: '#C8C8BF',
        neutral__300: '#D8DCD6',
        neutral__200: '#EFEDEB',
        neutral__100: '#FBF9F7',
        neutral__0: '#FFFFFF',

        blue__200: '#E1F1FE',
        blue__500: '#93C9FC',
        blue__700: '#75B0DE',
        blue__800: '#5792C0',
        blue__900: '#022B4A',

        green__200: '#E9F5EA',
        green__500: '#9DD3A9',
        green__700: '#008531',
        green__900: '#132A18',

        yellow__200: '#FFF5E1',
        yellow__500: '#FFCC79',
        yellow__700: '#F6A800',
        yellow__900: '#4A3003',

        red__400: '#FC4438',
        red__600: '#DD2D20',
      },
    },
  },
  plugins: [],
};
