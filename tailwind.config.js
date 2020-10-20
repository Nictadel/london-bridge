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
          primary: '#3EC7FF'
        }
      }
    }
});
