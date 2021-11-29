const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');
const em = (px, base) => `${round(px / base)}em`;

module.exports = {
  mode: 'jit',
  purge: [
    '../templates/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
            h2: {
              // margin-top is replaced by padding-top to make sure links don't fall under the header
              marginTop: 0,
              paddingTop: em(32, 20),
            }
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
