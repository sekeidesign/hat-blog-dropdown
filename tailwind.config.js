module.exports = {
  purge: [
    'public/index-justcss.html',
    'public/index.html',
    'animation.js'
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#30205E',
        'main-purple': '#613DC9',
        'mid-purple': '#F4F0FE',
        'light-purple': "#FAF9FB",
      }
    },
    fontFamily: {
      'sans': ['Poppins', 'system-ui','sans-serif']
    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
}
