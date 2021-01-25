// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'http://localhost:3000',
  firebaseConfig: {
    apiKey: "AIzaSyD553sG0S5TK4x855X912d7wbMgbrxO88c",
    authDomain: "elmenus-iti.firebaseapp.com",
    projectId: "elmenus-iti",
    storageBucket: "elmenus-iti.appspot.com",
    messagingSenderId: "435500855495",
    appId: "1:435500855495:web:726c08bf16255a0e90cee2",
    measurementId: "G-W28FCKR1R3"
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

/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.2.4/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyD553sG0S5TK4x855X912d7wbMgbrxO88c",
    authDomain: "elmenus-iti.firebaseapp.com",
    projectId: "elmenus-iti",
    storageBucket: "elmenus-iti.appspot.com",
    messagingSenderId: "435500855495",
    appId: "1:435500855495:web:726c08bf16255a0e90cee2",
    measurementId: "G-W28FCKR1R3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

*/
