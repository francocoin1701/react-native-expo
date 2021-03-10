import firebase from 'firebase'

import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBgjGnqcNPvQxuXS4U4zjFFXNyTqHtRs9k",
    authDomain: "nuevaprueva-47514.firebaseapp.com",
    projectId: "nuevaprueva-47514",
    storageBucket: "nuevaprueva-47514.appspot.com",
    messagingSenderId: "1086203408222",
    appId: "1:1086203408222:web:7abd29942f62b62c1029cf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default {
      firebase,
      db
  }