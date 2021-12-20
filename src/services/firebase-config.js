// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC37l0eI_EmFyJa8dK4wtU7KhYfWU6F01Y",
  authDomain: "quranin-3a09e.firebaseapp.com",
  databaseURL:
    "https://quranin-3a09e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quranin-3a09e",
  storageBucket: "quranin-3a09e.appspot.com",
  messagingSenderId: "917258049039",
  appId: "1:917258049039:web:0151931da226cf9f9a757a",
  measurementId: "G-JJS1699E3J",
};

// Initialize Firebase
let instance = null;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = initializeApp(firebaseConfig);
    return instance;
  }

  return null;
}
