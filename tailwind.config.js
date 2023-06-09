/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1400px',
        contentContainer: '1240px',
        containerSmall: '1024px',
        containerxs: '768px'
      },

      screens: {
        xs: '320px',
        sm: '500px',
        md: '667px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px'
      },


      fontFamily: {
        Cuprum: ['Cuprum', 'sans-serif'],
        Inter: ['Inter', 'sans-serif']
      },
      colors: {
        bodyColor: '#00172F',
        textYellow: '#F9C747',
        textLigth: '#ccd6f6',
        textDark: '#8892b0',
        hoverColor: 'rgba(100,255,218,0.1)',
        iconBackground: 'rgba(254, 255, 254, 0.06)',
        borderColor:'1px solid #192E44',
        background:'linear-gradient(151.76deg, rgba(66, 112, 251, 0) -8.92%, #4270FB 115.63%)'
      },
      backgroundImage:{
        "footerbackground":"url('./src/assets/footer/footer.svg')"
      }

    },
  },
  plugins: [],
}

