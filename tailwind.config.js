module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        "my-purple": "#5267DF",
        "my-red": "#FA5959",
        "my-blue": "#242A45",
        "my-grey": "#9194A2",
        "my-white": "#f7f7f7"
      }
    },
    fontFamily:{
      Poppins: ["Poppo=ins, sans-serif"]
    },
    container:{
      center: true,
      padding:'1rem',
      screens:{
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px'
      }
    }
  },
  plugins: [],
}
