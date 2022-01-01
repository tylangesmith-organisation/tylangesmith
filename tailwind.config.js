const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      rose: colors.rose,
      pink: colors.pink,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      violet: colors.violet,
      indigo: colors.indigo,
      blue: colors.blue,
      sky: colors.sky,
      cyan: colors.cyan,
      teal: colors.teal,
      emerald: colors.emerald,
      green: colors.green,
      lime: colors.lime,
      yellow: colors.yellow,
      amber: colors.amber,
      orange: colors.orange,
      red: colors.red,
      warmGray: colors.warmGray,
      trueGray: colors.trueGray,
      gray: colors.gray,
      blueGray: colors.blueGray,
      coolGray: colors.coolGray
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
            'blockquote p:first-of-type::before': {
              content: '""'
            },
            'blockquote p:first-of-type::after': {
              content: '""'
            }
          }
        }
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
