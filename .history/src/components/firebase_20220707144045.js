import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFbgHMD7suXl5B7iWCmD08tB8GdcNIpKQ",
  authDomain: "final-todo-4c36a.firebaseapp.com",
  databaseURL: "https://final-todo-4c36a-default-rtdb.firebaseio.com",
  projectId: "final-todo-4c36a",
  storageBucket: "final-todo-4c36a.appspot.com",
  messagingSenderId: "788256568715",
  appId: "1:788256568715:web:c725f28a40386fddd82b8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth();
