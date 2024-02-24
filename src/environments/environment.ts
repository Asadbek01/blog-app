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
    bearerToken: "a9d1c0668555523a82ab31253dcbdd5d57bc83c56e688a67e1ed3635ed3bc3ff2ab438fed1fa53aa4528561afc663094e2d91ee0aaa58081769c0f3f3b41d4398899515c815fbc5b845ee8c24d9461e7c82cebb3273f6399f8b5eea0b596b22e627808af07e630db32f7abc65d3ffe8d90b649e19ad8367f6bc8d149cdf7761e"
  };

  
  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
  