// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC33IH_XgPy5hykv9BP059w_8BnjExc9Tg",
  authDomain: "chatapp-8bd58.firebaseapp.com",
  projectId: "chatapp-8bd58",
  storageBucket: "chatapp-8bd58.appspot.com",
  messagingSenderId: "389472584176",
  appId: "1:389472584176:web:e45b6905d44abbfa471d35",
  measurementId: "G-V2G2J21SP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();