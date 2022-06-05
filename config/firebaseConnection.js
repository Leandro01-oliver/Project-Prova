import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAXw8bkbdeP4X17c741SFk1n6Jnu-qej9w",
    authDomain: "generation-card.firebaseapp.com",
    projectId: "generation-card",
    storageBucket: "generation-card.appspot.com",
    messagingSenderId: "867201068003",
    appId: "1:867201068003:web:1b7c76ad7ad6a60c8f0ed6",
    measurementId: "G-CC38ZQQVV7"
};

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);
  const auth  = getAuth(app);
  const storage = getStorage(app);

  export{ db, auth, storage}