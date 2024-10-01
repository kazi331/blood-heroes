const { i18n } = require('./next-i18next.config');
module.exports = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // i18n: {
  //   locales: ['en', 'en-US', 'bn'],
  //   defaultLocale: 'en-US',
  //   localeDetection: true,
  //   // domains: [],
  // },
  i18n,
  trailingSlash: true,
};
