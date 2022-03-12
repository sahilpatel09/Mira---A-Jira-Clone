module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'logo': '#2684FF',
        'logofill':'#0052CC',
        'asidecolor': 'rgb(7,71,166)',
      },
      fontFamily: {
        'display': ['-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',],
      }
    },
  },
  plugins: [],
}