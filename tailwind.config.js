module.exports = (isProd) => ({
  prefix: '',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: {
    enabled: isProd,
    content: ['**/*.html', '**/*.ts']
  },
  theme: {
    extend: {
      colors: {
        dark: '#2C3035',
        primary: '#3EC7FF',
        secondary: '#0F5B69'
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '108': '27rem',
        '120': '30rem',
      }
    }
  }
});
