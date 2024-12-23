export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jostLight: ['Jost-Light', 'sans-serif'],
        jostRegular: ['Jost-Regular', 'sans-serif'],
        jostMedium: ['Jost-Medium', 'sans-serif'],
        jostBold: ['Jost-Bold', 'sans-serif'],
        jostBlack: ['Jost-Black', 'sans-serif'],
      },
      colors: {
        'dim-gray': 'rgb(85, 85, 85)',
      },
    },
  },
  plugins: [],
}
