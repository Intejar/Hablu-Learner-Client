// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8is3rU28mKY79AkTJwgdPujsTmuLv0Pc",
  authDomain: "hablu-learner.firebaseapp.com",
  projectId: "hablu-learner",
  storageBucket: "hablu-learner.appspot.com",
  messagingSenderId: "818841631841",
  appId: "1:818841631841:web:5d160c27ba1aeab1877e20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;