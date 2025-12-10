// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJVuo7lsYmOoAqOAfPHBSKwjnHB8pKH0A",
  authDomain: "dragon-news-2025-42365.firebaseapp.com",
  projectId: "dragon-news-2025-42365",
  storageBucket: "dragon-news-2025-42365.firebasestorage.app",
  messagingSenderId: "487869709472",
  appId: "1:487869709472:web:0a8f142bdb7bc4b60e5dc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;