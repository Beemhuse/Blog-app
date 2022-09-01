// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from  "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi6E2rpk1jrDy379LAdjt0K6bny1YwcoM",
  authDomain: "photoapp-4b41d.firebaseapp.com",
  databaseURL: "https://photoapp-4b41d-default-rtdb.firebaseio.com",
  projectId: "photoapp-4b41d",
  storageBucket: "photoapp-4b41d.appspot.com",
  messagingSenderId: "242385319310",
  appId: "1:242385319310:web:7a0a00bf6b6984033560df",
  measurementId: "G-9PDPXLVPRN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();