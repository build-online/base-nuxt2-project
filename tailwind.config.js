module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#eb5757',
        'primary-80': '#EF7979',
        'primary-50': '#F5ABAB',
        'primary-15': '#FCE6E6',
        secondary: '#060E2C',
        tertiary: '#161616',
        success: '#34D399',
        warning: '#FCD34D',
        danger: '#F87171'
      },
      borderColor: {
        primary: '#eb5757',
        success: '#34D399',
        warning: '#FCD34D',
        danger: '#F87171',
        'primary-80': '#EF7979'
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled']
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
