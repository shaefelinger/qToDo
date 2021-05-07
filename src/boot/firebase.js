import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDKWt3t40rH96vNUe1iBwJ9q1CIjU4vYg0",
  authDomain: "q-todo-quasar.firebaseapp.com",
  databaseURL:
    "https://q-todo-quasar-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "q-todo-quasar",
  storageBucket: "q-todo-quasar.appspot.com",
  messagingSenderId: "393570228235",
  appId: "1:393570228235:web:986be3882b4affd0580f0e"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDB = firebaseApp.database();

export { firebaseAuth, firebaseDB };
