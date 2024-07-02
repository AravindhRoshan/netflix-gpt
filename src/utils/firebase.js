// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeV_ERRE27GD--vOfQP7mkeJyYtQRWLJA",
  authDomain: "netflixgpt-4d03f.firebaseapp.com",
  projectId: "netflixgpt-4d03f",
  storageBucket: "netflixgpt-4d03f.appspot.com",
  messagingSenderId: "889518074802",
  appId: "1:889518074802:web:cefb81c2c3cc4602a692ab",
  measurementId: "G-XBB695PMR8",
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
