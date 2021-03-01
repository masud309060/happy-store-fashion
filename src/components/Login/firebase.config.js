import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBd4EGU8796vWMjE6NtzR2ASo4jQDhXm4M",
  authDomain: "happy-store-fashion.firebaseapp.com",
  projectId: "happy-store-fashion",
  storageBucket: "happy-store-fashion.appspot.com",
  messagingSenderId: "765578460916",
  appId: "1:765578460916:web:0fbd9272b842b8ef4328a1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

// export const db = firebaseApp.firestore()
// export const auth = firebaseApp.auth()
