// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYjCPXuT_9rShg1-M93HIPFq09uG909NM",
  authDomain: "myportfolio-bf368.firebaseapp.com",
  projectId: "myportfolio-bf368",
  storageBucket: "myportfolio-bf368.appspot.com",
  messagingSenderId: "492582023130",
  appId: "1:492582023130:web:2123d18aef4a761ef69ae3",
  measurementId: "G-GMLZV143PF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

export default app;
