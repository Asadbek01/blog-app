// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    baseUrl: 'http://localhost:4500/',//https://ssrvottak.devkom.pro/
    apiUrl: 'http://localhost:1337',
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
    },
    bearerToken: "6c59be9292c6020f80f1b15e39ea0d6025eba4c5a3077528218c6e2267cb0e2c83241d19aba395326ac1d8560f716497328a3a7c77695427a9f15b88082c0b346eef68263826db2ce877898c4858b929c7c3395c326adff2fcaa8e7c6cce1e51d4e36c1ed533bc322b58f3754ba6e501c5fc3292aaccea60969b2b11ec25fcf4"
  };

  
  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
  