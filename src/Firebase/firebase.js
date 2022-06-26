import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgI0lKJHMWSyLcBktA4Hq2hKXgyjDI0js",
  authDomain: "planimals-auth-development.firebaseapp.com",
  projectId: "planimals-auth-development",
  storageBucket: "planimals-auth-development.appspot.com",
  messagingSenderId: "109420384871",
  appId: "1:109420384871:web:689c5ba7c5c86a17a9fac2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleAuth = new GoogleAuthProvider();
googleAuth.addScope("https://www.googleapis.com/auth/contacts.readonly");
const firebase = { app, db, auth, googleAuth, signInWithPopup };

export default firebase;
