import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyALpzy-VmcZ9Smb_GUGGByy-bKxzJzR8lc",
  authDomain: "alatorre-tesla-clone.firebaseapp.com",
  databaseURL: "https://alatorre-tesla-clone.firebaseio.com",
  projectId: "alatorre-tesla-clone",
  storageBucket: "alatorre-tesla-clone.appspot.com",
  messagingSenderId: "340519301972",
  appId: "1:340519301972:web:4079d134b620e1f72c8ec1",
  measurementId: "G-WF9MYJ78EK",
});

const db = firebaseApp.firestore();

export { db };
