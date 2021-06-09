module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
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
      black: '#050010',
      white: '#ffeef8',
      transparent: 'transparent',
      danger: '#d54356',
      dim: 'rgba(255, 238, 248, 0.7)'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
