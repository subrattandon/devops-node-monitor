'use strict';

/**
 * New Relic agent configuration.
 */
exports.config = {
  app_name: ['Monitoring-App'],   // Apne app ka naam de sakte ho
  license_key: '9edfba126cab74e71ada07a02603476cFFFFNRAL',
  logging: {
    level: 'info'
  },
  allow_all_headers: true,
  attributes: {
    exclude: [
      'request.headers.cookie',
      'request.headers.authorization',
      'request.headers.proxyAuthorization',
      'request.headers.setCookie*',
      'request.headers.x*'
    ]
  }
};
