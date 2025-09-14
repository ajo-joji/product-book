// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFnV-FMjHOD7d5Vi0KH-NjnSxVBOgRz78",
  authDomain: "mysodafactoryauth.firebaseapp.com",
  projectId: "mysodafactoryauth",
  storageBucket: "mysodafactoryauth.firebasestorage.app",
  messagingSenderId: "809722350600",
  appId: "1:809722350600:web:ac6d1e2d65e3cd8a9d55bd",
  measurementId: "G-E7RRS1E979"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);