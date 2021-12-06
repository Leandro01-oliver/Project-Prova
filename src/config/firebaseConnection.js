import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDrVWlepVIpt5_-Qr8xensGDtZy_8v_6UA",
  authDomain: "marktplace-localveiculos.firebaseapp.com",
  projectId: "marktplace-localveiculos",
  storageBucket: "marktplace-localveiculos.appspot.com",
  messagingSenderId: "33851382139",
  appId: "1:33851382139:web:e749951067cecf33da45de",
  measurementId: "G-265ZQV5YKF"
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth  = getAuth(app);
export const storage = getStorage(app);
 