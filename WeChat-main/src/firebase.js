// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9SPQPj1gSDNZsuc-lBi2nNl904IDMrRY",
  authDomain: "wechat-643ef.firebaseapp.com",
  projectId: "wechat-643ef",
  storageBucket: "wechat-643ef.appspot.com",
  messagingSenderId: "956268651045",
  appId: "1:956268651045:web:e46f575453d5e4562595cc",
  measurementId: "G-K8E2ZJNDCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
