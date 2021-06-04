module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Monument', 'sans-serif'],
      serif: ['serif'],
      display: ['Monument', 'serif'],
      body: ['Monument', 'sans-serif']
    },
    colors: {
      black: '#050010',
      white: '#ffeef8',
      transparent: 'transparent',
      danger: '#d54356'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
