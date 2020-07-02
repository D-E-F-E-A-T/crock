import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyCQAHgDdPe_cAvV7tq7_I7uez1L9IAzg7g",
    authDomain: "crock-79424.firebaseapp.com",
    databaseURL: "https://crock-79424.firebaseio.com",
    projectId: "crock-79424",
    storageBucket: "crock-79424.appspot.com",
    messagingSenderId: "420494475799",
    appId: "1:420494475799:web:4edf1f9400de363a361252",
    measurementId: "G-K2ZF7QTKX7"
  };

  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
    // firebase.analytics();
  }

  export default firebase;
