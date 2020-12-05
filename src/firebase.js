import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBtfHf6l6YNi8vsq0d1XHONBaN7U-9vDzM",
  authDomain: "clone-1a0d7.firebaseapp.com",
  databaseURL: "https://clone-1a0d7.firebaseio.com",
  projectId: "clone-1a0d7",
  storageBucket: "clone-1a0d7.appspot.com",
  messagingSenderId: "117973535989",
  appId: "1:117973535989:web:548c2e76de23169e3249bc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
