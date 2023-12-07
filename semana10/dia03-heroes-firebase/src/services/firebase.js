import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6F0YABy460iXCbneaQv27clI99ikn0pY",
  authDomain: "react-hero-app-9a581.firebaseapp.com",
  projectId: "react-hero-app-9a581",
  storageBucket: "react-hero-app-9a581.appspot.com",
  messagingSenderId: "543105591512",
  appId: "1:543105591512:web:d4d226831482a9c9890fad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)