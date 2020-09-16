import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClfn64MPggmyoO8DOIgCTCs_CWQohcaEA",
  authDomain: "facebook-clone-d0f04.firebaseapp.com",
  databaseURL: "https://facebook-clone-d0f04.firebaseio.com",
  projectId: "facebook-clone-d0f04",
  storageBucket: "facebook-clone-d0f04.appspot.com",
  messagingSenderId: "580920614085",
  appId: "1:580920614085:web:c4afacb5f792dfdb01e4ac",
  measurementId: "G-GNK5DQB4ZR"
};  

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;