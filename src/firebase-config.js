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
//other firebase configs since db:s are limited for free experience.
//Just replace const cofig values with other "list" from above.
/*  #1 atm in use
  apiKey: "AIzaSyAsnRaelcQwAkUSVjACVDWXVKGLbt0_MBs",
  authDomain: "blog-bf2b9.firebaseapp.com",
  projectId: "blog-bf2b9",
  storageBucket: "blog-bf2b9.appspot.com",
  messagingSenderId: "451945648895",
  appId: "1:451945648895:web:0d3c8eb2537c2a890972ca",
*/
/*   2
apiKey: "AIzaSyDOMYi3fGBb5py8YyKg7oBT9snwo4GnYBw",
authDomain: "blogproject-4b2ac.firebaseapp.com",
projectId: "blogproject-4b2ac",
storageBucket: "blogproject-4b2ac.appspot.com",
messagingSenderId: "620910663010",
appId: "1:620910663010:web:3467ca6406f48c4e5cc83b"
*/
/*  3
apiKey: "AIzaSyDQI4t5pLfHGkLiPj_1iZQ16-CkFnlRiaw",
  authDomain: "notesapp-a04a5.firebaseapp.com",
  projectId: "notesapp-a04a5",
  storageBucket: "notesapp-a04a5.appspot.com",
  messagingSenderId: "401393564110",
  appId: "1:401393564110:web:3db71a61a3f090a73d539f"
*/
/*  4
apiKey: "AIzaSyDShsH7z1IlJDq9SnYW674dcIRlsIw43SI",
  authDomain: "notesapp-5b95b.firebaseapp.com",
  projectId: "notesapp-5b95b",
  storageBucket: "notesapp-5b95b.appspot.com",
  messagingSenderId: "329231630495",
  appId: "1:329231630495:web:33248b33c6a6cad68322aa"
*/
/*  5
apiKey: "AIzaSyB0y_CkJDsaPOBvIacPEcIvjpkvj2liM4o",
  authDomain: "muistiinpano-91eac.firebaseapp.com",
  projectId: "muistiinpano-91eac",
  storageBucket: "muistiinpano-91eac.appspot.com",
  messagingSenderId: "971240593721",
  appId: "1:971240593721:web:29f347b4cf264ec77df0e8"
*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
