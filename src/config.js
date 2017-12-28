const _ = require('lodash');

const environment = {
  development: {
    isProduction: false,
    apiBaseUrl: 'http://54.154.2.21/api',
    // apiBaseUrl: process.env.API_URL || 'http://localhost:3000',
    port: 8080,
  },
  production: {
    isProduction: true,
    // TODO: setup valid live URLS, requires host & port 443
    apiBaseUrl: process.env.API_URL || 'https://domestly.com/api',
    // TODO: setup valid live URLS
  }
}[process.env.NODE_ENV || 'development'];
const defaults = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8080,
  apiBaseUrl: process.env.API_URL || 'http://54.154.2.21/api',
  // apiBaseUrl: process.env.API_URL || 'http://54.154.2.21/api',
  app: {
    googleAnalytics: {
      appId: process.env.GOOGLE_ANALYTIC_ID || 'UA-109527899-1'
    },
    googleMapsApiKey: 'AIzaSyDcoTMCr0Nku16yyfNnW42-sgv7RLqCk6k',
    title: 'Domestly.com | On-Demand Cleaning Services',
    description: 'Domestly.com | On-Demand Cleaning Services',
    head: {
      titleTemplate: 'Domestly.com | On-Demand Cleaning Services',
      meta: [
      //   { name: 'description', content: 'Moneyversity - Online Financial Education' },
      //   { charset: 'utf-8' },
        { property: 'og:site_name', content: 'Domestly.com | On-Demand Cleaning Services' },
        { property: 'og:image', content: 'https://facebook.github.io/react/img/logo_og.png' },
      //   { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: 'Share the spotless experience & get R100 off' },
        { property: 'og:description', content: 'Share the Domestly experience' },
      //   { property: 'og:card', content: 'summary' },
      //   { property: 'og:site', content: '@xkawi' },
      //   { property: 'og:creator', content: '@xkawi' },
      //   { property: 'og:image:width', content: '200' },
      //   { property: 'og:image:height', content: '200' }
      ]
    }
  },
  domestlyContactEmail: 'support@domestly.com',
  domestlyContactNumber: '087 095 3426'
};
const config = _.merge(defaults, environment);
module.exports = config;
