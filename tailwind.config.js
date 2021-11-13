module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "title" : ["titleFont"]
    },
    extend: {
      height: {
        xxl: "455px"
       },
      backgroundImage: {
        "weather-background": "url('/src/images/background.jpg')",
      },
    backgroundColor: {
      'cardPrimary': '#291DA1',
      'cardSecondary': '#E8E6FF',
      },
    },
  },
  variants: {
    extend: {
      scale: ['active', 'group-hover'],
    },
  },
  plugins: [],
}
