import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbQLPfzP5GmdhDi8fM3EgUwTugrrO6d-4",
  authDomain: "help-queue-9b7a5.firebaseapp.com",
  projectId: "help-queue-9b7a5",
  storageBucket: "help-queue-9b7a5.appspot.com",
  messagingSenderId: "315350693236",
  appId: "1:315350693236:web:659e5682795249a3942821"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };