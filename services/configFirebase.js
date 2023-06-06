
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCJmi0lsf8UZxsUkcxzL77JKhZVq5XoIuY",
  authDomain: "asistente-ce26f.firebaseapp.com",
  projectId: "asistente-ce26f",
  storageBucket: "asistente-ce26f.appspot.com",
  messagingSenderId: "783319224009",
  appId: "1:783319224009:web:4619d2d92c829af84c4718"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export {database, auth, storage}
