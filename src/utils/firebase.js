// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_6UBqmrnZZBW1YGCCRUAUDQB3qNJxSwo",
  authDomain: "netflixgpt-ceaf2.firebaseapp.com",
  projectId: "netflixgpt-ceaf2",
  storageBucket: "netflixgpt-ceaf2.appspot.com",
  messagingSenderId: "463973537203",
  appId: "1:463973537203:web:fb6613faf4bae7c7c627c6",
  measurementId: "G-N1JF61B2BP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);