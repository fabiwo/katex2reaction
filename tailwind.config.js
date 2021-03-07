module.exports = {
  purge: [
    './components/**/*.jsx',
    './components/**/*.js',
    './pages/**/*.js',
    './pages/**/*.jsx',
    './layouts/**/*.js',
    './layouts/**/*.jsx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'outer-space': {
          50: '#f4f4f5',
          100: '#e9eaea',
          200: '#c9cacb',
          300: '#a9aaac',
          400: '#686b6e',
          500: '#272b30',
          600: '#23272b',
          700: '#1d2024',
          800: '#171a1d',
          900: '#131518',
        },
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
