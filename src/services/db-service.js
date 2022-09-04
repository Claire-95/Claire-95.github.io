import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgI0lKJHMWSyLcBktA4Hq2hKXgyjDI0js",
  authDomain: "planimals-auth-development.firebaseapp.com",
  projectId: "planimals-auth-development",
  storageBucket: "planimals-auth-development.appspot.com",
  messagingSenderId: "109420384871",
  appId: "1:109420384871:web:689c5ba7c5c86a17a9fac2",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const counterCollectionRef = collection(db, "counters");
