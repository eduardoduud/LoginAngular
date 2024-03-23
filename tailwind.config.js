/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
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
          200: '#F4F9FD',
          300: '#f7f7f8',
          400: '#C3C6C9'
        },
        lBlack: {
          700: '#323232',
          900: '#212121'
        },
        lBlue: {
          100: '#14FFEC',
          300: '#25B5A8',
          600: '#1F384D',
          700: '#182B3B',
          800: '#0B141B'
        },
        lGreen: {
          400: '#21C063',
          500: '#188A47'
        },
        lGrey: {
          100: '#939399',
          200: '#67676B',
          900: '#18181b'
        }
      },
      padding: {
        xSmall: '.25rem' /*4px*/,
        small: '.625rem' /*10px*/,
        default: '1rem' /*16px*/,
        big: '1.25rem' /*20px*/,
        bigger: '1.5rem' /*24px*/,
        biggest: '2rem' /*32px*/
      },
      spacing: {
        spaceXSmall: '.25rem' /*4px*/,
        spaceSmall: '.5rem' /*8px*/,
        spaceTiny: '.9rem' /*8px*/,
        spaceDefault: '1rem' /*16px*/,
        spaceBig: '1.25rem' /*20px*/,
        spaceBigger: '1.5rem' /*24px*/,
        spaceBiggest: '2rem' /*32px*/
      },
      boxShadow: {
        lBorder: 'inset 0px 0px 0px 0.5px rgba(33, 192, 99, 1), 0px 0px 0px 2px rgba(33, 192, 99, 1)',
        lHover: 'inset 0px 0px 0px 2px rgba(103, 103, 107, 1)'
      },
      height: {
        lIconSmall: '0.75rem'/*12px*/,
        lIconDefault: '1rem'/*16px*/,
        lIconLarge: '1.125rem'/*18px*/
      },
      width: {
        lIconSmall: '0.75rem'/*12px*/,
        lIconDefault: '1rem'/*16px*/,
        lIconLarge: '1.125rem'/*18px*/,
        teste: '290px'
      },
      maxWidth: {
        lMaxHeaderW: `calc(100vw / 4)`
      }
    }
  },
  plugins: []
};
