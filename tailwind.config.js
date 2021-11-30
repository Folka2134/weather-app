module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "title" : ["titleFont"]
    },
    extend: {
      height: {
        xxl: "475px"
       },
      backgroundImage: {
        "weather-background": "url('/src/images/background.jpg')",
      },
    backgroundColor: {
      'cardPrimary': '#291DA1',
      'cardSecondary': '#E8E6FF',
      'cardPrimary2': '#111B14',
      'cardSecondary2': '#2A4F4A',
      'buttonPrimary' : "#81A4FD"
      },
    textColor: {
      'textTitle': '#A78BFA',
    }
    },
  },
  variants: {
    extend: {
      scale: ['active', 'group-hover', 'hover'],
    },
  },
  plugins: [],
}
