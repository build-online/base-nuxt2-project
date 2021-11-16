module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#eb5757',
        'primary-80': '#EF7979',
        secondary: '#161616',
        tertiary: '#161616',
        success: '#34D399',
        warning: '#FCD34D',
      },
      borderColor: {
        primary: '#eb5757',
        'primary-80': '#EF7979',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
