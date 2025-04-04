// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSwcpY_E7hokgpjtu17mHgdpfMjG7dL24",
  authDomain: "netflix-gpt-9b90e.firebaseapp.com",
  projectId: "netflix-gpt-9b90e",
  storageBucket: "netflix-gpt-9b90e.firebasestorage.app",
  messagingSenderId: "543887162967",
  appId: "1:543887162967:web:ad3ed4ecc8026713c06d12",
  measurementId: "G-5562P9HHG2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
