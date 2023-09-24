// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    baseUrl: 'http://localhost:4200/',//https://ssrvottak.devkom.pro/
    production: false,
    staging: false,
    appVersion: "staging 0.0.1",
    fcmTopic: "blog-app-all",
    firebase: {
        apiKey: "AIzaSyAFAlX7mJpfkO3BU6SwA_p2ted7Qmaa_L0",
        authDomain: "blog-app-82b8d.firebaseapp.com",
        projectId: "blog-app-82b8d",
        storageBucket: "blog-app-82b8d.appspot.com",
        messagingSenderId: "508509277854",
        appId: "1:508509277854:web:493ebe45c64df1db9b358f",
        measurementId: "G-GPPGV2YBCE"
    }
  };
  
  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
  