module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/Layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      blue: {
        50: '#F8F9FA',
        70: '#EBF2FF',
        80: '#F4F8FF',
        100: '#DEEDFF',
        150: '#B2CDFF',
        200: '#6590FF',
        300: '#2464E6',
      },
      gray: {
        5: '#FAFAFB',
        10: '#F1F1F4',
        15: '#DFDFE2',
        30: '#AFAFB1',
        40: '#99999B',
        50: '#EDEDED',
        100: '#EAEAEA',
        150: '#D4D4D6',
        200: '#BEBEBE',
        300: '#979797',
        400: '#898A8D',
        500: '#6F6F6F',
        600: '#F8F9FA',
        700: '#9F9F9F',
        800: '#C6C6C8',
        900: '#4E4E50',
      },
      green: {
        50: '#D1ECE1',
        100: '#73CBA1',
      },
      purple: '#E9DEFF',
      orange: '#FFEEDE',
      pink: {
        50: '#FFDEE6',
        100: '#FF8ED2',
      },
      red: {
        100: '#FA4D56',
      },
    },
    boxShadow: {
      lg: '0px 2px 20px rgba(38, 36, 131, 0.25)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    },
    borderRadius: {
      xs: '3px',
      sm: '5px',
      md: '10px',
      full: '50px',
    },
    minWidth: {
      tagWidth: '6.6rem',
    },
    extend: {
      fontSize: {
        caption: '12px',
        body: '16px',
        title: '20px',
      },
      spacing: {
        '4xs': '0.125rem', // 2px
        '3xs': '0.188rem', // 3px
        '2xs': '0.438rem', // 7px
        xs: '0.938rem', // 15px
        sm: '1.375rem', // 22px
        md: '1.5rem', // 24px
        lg: '1.75rem', // 28px
        xl: '1.875rem', // 30px
        '2xl': '4.5rem', // 72px
      },
      dropShadow: {
        recommend: '0px 4px 4px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'recommend-first': 'linear-gradient(139deg, #2464E6, #6590FF)',
        'recommend-second': 'linear-gradient(139deg, #6590FF, #2464E6)',
      },
      animation: {
        loader: 'loading 3s linear infinite',
      },
      keyframes: {
        loading: {
          '0%': { left: '-30%' },
          '40%': { left: '0%', width: '100%' },
          '70%': { left: '0%', width: '100%' },
          '100%': { left: '100%', width: '50%' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
