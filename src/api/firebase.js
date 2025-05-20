// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDoFUMEiCvWw79gyhUa1lGQh2mep6PgP5A",
    authDomain: "shotlinn.firebaseapp.com",
    databaseURL: "https://shotlinn-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "shotlinn",
    storageBucket: "shotlinn.firebasestorage.app",
    messagingSenderId: "610760785298",
    appId: "1:610760785298:web:6116e4565266e4e85f554b",
    measurementId: "G-DLM1TL6PTG"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
