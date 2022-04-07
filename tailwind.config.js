module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1090px',
      },
    },
    extend: {
      colors: {
        brand: {
          light: '',
          DEFAULT: '#00FEFF',
          dark: '#001E42',
          },
        },
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
      },
    },
  },
  plugins: [],
}