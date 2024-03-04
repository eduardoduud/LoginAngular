/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      'loginSans': ['Trebuchet MS, sans-serif']
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
        lBlack:{
          700: '#323232',
          900: '#212121'
        },
        lBlue:{
          100: '#14FFEC',
          300: '#25B5A8',
          900: '#0D7377'
        },
        cinzaTwitch:{
          500: '#18181b'
        },
        brancoTwitch:{
          500: '#f7f7f8'
        }
      },
      spacing: {
        lxSmall: '.25rem' /*8px*/,
        lSpaceSmall: '.5rem' /*8px*/,
        lIconSmall: '0.75rem'/*12px*/,
        lIconDefault: '1rem'/*16px*/,
        lIconLarge: '1.125rem'/*18px*/,
      }
    },
  },
  plugins: [],
};
