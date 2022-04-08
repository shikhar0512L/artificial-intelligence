import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCT5TZu3YTL24pwit0o_g8drhM8RJSGje4",
  authDomain: "artificial-inteliigence.firebaseapp.com",
  projectId: "artificial-inteliigence",
  storageBucket: "artificial-inteliigence.appspot.com",
  messagingSenderId: "233262227484",
  appId: "1:233262227484:web:173c77cbd8d24d4ff9ffd9",
  measurementId: "G-YKC5X8VZWP"
});

var db = firebaseApp.firestore();

export { db };