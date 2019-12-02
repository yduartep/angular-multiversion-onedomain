import * as packageData from '../../package.json';

export const environment = {
  production: true,
  appVersion: packageData['version'],
  angularVersion: packageData['dependencies']['@angular/core'],
  hostByRequest: {
    dogs: 'http://localhost',
    cats: 'http://localhost',
    help: 'http://localhost'
  },
  routesToRedirect: ['/dogs', '/help']
};
