// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  SOCKET_ENDPOINT_MONGO: 'http://127.0.0.1:3031',
  SOCKET_ENDPOINT_MYSQL: 'http://127.0.0.1:8088',
  DEV_URL_MONGO: 'http://127.0.0.1:3031/api',
  DEV_BASEURL_MONGO: 'http://127.0.0.1:3031',
  DEV_URL_MYSQL: 'http://127.0.0.1:8088/api',
  DEV_BASEURL_MYSQL: 'http://127.0.0.1:8088'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
