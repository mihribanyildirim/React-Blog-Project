// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwGkBa2Z3mdn1ZXbPct0FdHMCj98twd5Y",
  authDomain: "blogproject-18b17.firebaseapp.com",
  projectId: "blogproject-18b17",
  storageBucket: "blogproject-18b17.appspot.com",
  messagingSenderId: "247069359261",
  appId: "1:247069359261:web:3b4f7d5b69ff4017992874"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();