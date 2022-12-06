import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsnRaelcQwAkUSVjACVDWXVKGLbt0_MBs",
  authDomain: "blog-bf2b9.firebaseapp.com",
  projectId: "blog-bf2b9",
  storageBucket: "blog-bf2b9.appspot.com",
  messagingSenderId: "451945648895",
  appId: "1:451945648895:web:0d3c8eb2537c2a890972ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
