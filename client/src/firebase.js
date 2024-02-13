
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo_FDtpaMAhFUdW3yha03yCQWuepFZImw",
  authDomain: import.meta.env.VITE_FIREBASE_API_KEY,
  projectId: "mern-estate-dbccc",
  storageBucket: "mern-estate-dbccc.appspot.com",
  messagingSenderId: "802893242311",
  appId: "1:802893242311:web:ffbc389f8ddce3d0e103e2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);