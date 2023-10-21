// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    baseUrl: 'http://localhost:4200/',//https://ssrvottak.devkom.pro/
    apiUrl: 'https://azamjonov-apis-f853756263d3.herokuapp.com/',
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
    bearerToken: "ac52580333570ad4db977fb220bed6a4f24ae0ce695cf6ecbbfe35e73e4337772e944d391f010e6a0ec7d82ba5eb15f872a00042e9a7a46cc66e16908306ec869f0c55367a3d111f2b1d85a366d400b1d84b01fc6f011d29710556c44d69cc5951999be5fbb99b89710f7b2a39fda96e7773b580ce7328657260bac5d6e4da36"
  };

  
  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
  