// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD91AFeYiBBYKUkpiPTTffESxLO_yTvZgM",
  authDomain: "first-app-82ce2.firebaseapp.com",
  projectId: "first-app-82ce2",
  storageBucket: "first-app-82ce2.firebasestorage.app",
  messagingSenderId: "601806946311",
  appId: "1:601806946311:web:5d05b4c24954350521aaa2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app