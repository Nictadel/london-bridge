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
        secondary: '#0F5B69',
        warning: '#DA6B2F',
        ok: '#7CEC81',
        info: '#2289AD',
        caution: '#F0BE4A'
      }
    }
  }
});
