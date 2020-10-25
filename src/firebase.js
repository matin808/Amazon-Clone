// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAcmBu4yFAvwP_hveiK712sPsBZlseU7aE",
  authDomain: "clone-d16e8.firebaseapp.com",
  databaseURL: "https://clone-d16e8.firebaseio.com",
  projectId: "clone-d16e8",
  storageBucket: "clone-d16e8.appspot.com",
  messagingSenderId: "415339012689",
  appId: "1:415339012689:web:b0742a341bb03e52828e70",
  measurementId: "G-36SCS43FGC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
