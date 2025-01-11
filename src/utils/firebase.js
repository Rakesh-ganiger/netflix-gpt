// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvvAulSTK-GTynrI3O4KaS3InE8-nMSaU",
  authDomain: "netflixgpt-7c630.firebaseapp.com",
  projectId: "netflixgpt-7c630",
  storageBucket: "netflixgpt-7c630.firebasestorage.app",
  messagingSenderId: "836443525913",
  appId: "1:836443525913:web:271157d90ade83ef266b88",
  measurementId: "G-CE0J2MBRDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();