// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCMOfo_qDBuWkMw878VyZMjAD3P3Bx35I",
  authDomain: "react-auth-fc416.firebaseapp.com",
  projectId: "react-auth-fc416",
  storageBucket: "react-auth-fc416.appspot.com",
  messagingSenderId: "818060832139",
  appId: "1:818060832139:web:0c042440844ea19ae2538e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth };
