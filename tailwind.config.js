/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      'loginSans': ['Inter, sans-serif']
    },
    fontWeight: {
      normal: '300',
      semiBold: '500',
      bold: '700'
    },
    extend: {
      backgroundImage: {
        'login-image': '<URL-HERE>'
      },
      colors: {
        primaryButton: '',
        secondaryButton: '',
        lWhite: {
          200: '#F4F9FD'
        },
        lBlack:{
          700: '#323232',
          900: '#212121'
        },
        lBlue:{
          100: '#14FFEC',
          300: '#25B5A8',
          600: '#0D7377',
          800: '#0B141B'
        },
        lGreen: {
          400: '#21C063'
        },
        cinzaTwitch:{
          100: '#939399',
          200: '#67676B',
          900: '#18181b'
        },
        brancoTwitch:{
          500: '#f7f7f8'
        }
      },
      padding: {
        xSmall: '.25rem' /*4px*/,
        small: '.625rem' /*10px*/
      },
      spacing: {
        spaceXSmall: '.25rem' /*4px*/,
        spaceSmall: '.5rem' /*8px*/
      },
      boxShadow: {
        lBorder: 'inset 0px 0px 0px 2px rgba(20, 255, 236, 1), 0px 0px 0px 2px rgba(20, 255, 236, 1)',
        lHover: 'inset 0px 0px 0px 2px rgba(103, 103, 107, 1)'
      },
      height: {
        lIconSmall: '0.75rem'/*12px*/,
        lIconDefault: '1rem'/*16px*/,
        lIconLarge: '1.125rem'/*18px*/,
      },
      width:{
        lIconSmall: '0.75rem'/*12px*/,
        lIconDefault: '1rem'/*16px*/,
        lIconLarge: '1.125rem'/*18px*/,
      },
      maxWidth: {
        lMaxHeaderW: `calc(100vw / 4)`
      }
    },
  },
  plugins: [],
};
