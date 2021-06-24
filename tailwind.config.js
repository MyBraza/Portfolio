const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Jura', 'sans-serif'],
      serif: ['serif'],
      display: ['Jura', 'serif'],
      body: ['Jura', 'sans-serif'],
      mono: ['RubikMono']
    },
    colors: {
      black: colors.black,
      eerie: '#1B1B1B',
      white: colors.white,
      ivory: '#FFFFF0',
      transparent: 'transparent',
      danger: '#d54356',
      dim: 'rgba(255, 238, 248, 0.7)'
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      centered: '0px 0px 20px 5px rgba(34, 60, 80, 0.4)',
      none: 'none'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
