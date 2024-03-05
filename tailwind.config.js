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
          900: '#18181b',
          200: '#67676B',
          100: '#939399'
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
      },
      boxShadow: {
        lBorder: 'inset 0px 0px 0px 2px rgba(20, 255, 236, 1), 0px 0px 0px 2px rgba(20, 255, 236, 1)',
        lHover: 'inset 0px 0px 0px 2px rgba(103, 103, 107, 1)'
      }
    },
  },
  plugins: [],
};
