import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQI4t5pLfHGkLiPj_1iZQ16-CkFnlRiaw",
  authDomain: "notesapp-a04a5.firebaseapp.com",
  projectId: "notesapp-a04a5",
  storageBucket: "notesapp-a04a5.appspot.com",
  messagingSenderId: "401393564110",
  appId: "1:401393564110:web:3db71a61a3f090a73d539f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
