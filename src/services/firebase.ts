// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkvYWRlx223XaAh1UGxQYz4a5jKsPDb1I",
  authDomain: "filmoteka-b66e8.firebaseapp.com",
  projectId: "filmoteka-b66e8",
  storageBucket: "filmoteka-b66e8.appspot.com",
  messagingSenderId: "604868587191",
  appId: "1:604868587191:web:9d3f629e0e0be984c3a732",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
