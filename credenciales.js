// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0i4uCHZFGOEwkMKcxUjYfP2W1Y9t2n60",
  authDomain: "milogin-34c53.firebaseapp.com",
  projectId: "milogin-34c53",
  storageBucket: "milogin-34c53.appspot.com",
  messagingSenderId: "103813425586",
  appId: "1:103813425586:web:f8fe4904a15f6091e3dcab"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase