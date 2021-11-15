// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url: 'https://platzi-store.herokuapp.com',
  // Confifuración del proyecto en Firebase
  firebase: {
    apiKey: 'AIzaSyAOEHxUBemyD8Av9rJWMvQs29NtBSkxqK8',
    authDomain: 'angular-training-store.firebaseapp.com',
    //databaseURL: '<your-database-URL>',
    projectId: 'angular-training-store',
    storageBucket: 'angular-training-store.appspot.com',
    messagingSenderId: '509895602841',
    appId: '1:509895602841:web:6720fd2e696d61bb543e08',
    measurementId: 'G-XV0F2M865Z'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
