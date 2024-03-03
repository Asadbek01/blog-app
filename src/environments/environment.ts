// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    baseUrl: 'http://localhost:4500/',//https://ssrvottak.devkom.pro/
    apiUrl: 'https://cms-asadbek.azamjonov.eu',
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
    bearerToken: "0659f44e8eae57c77d38663516a0a660e9c0613b56fa0d0b2221d4e14a6f0c380f4fed04c6648677110b537358afe81d4cec1e6c1c29840dbc068f784046cdb860f8b055b6c4413c4489ea7626f2451da27d22dbf693e26d4fce8d4ad39bdf49427d2179d745a3f6d1fb075ed56c15d741111f125a91ebf273846a6b74a0578a"
  };

  
  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
  