import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjDPT9yuidSCURjIIwqDhWI89xoVH0c78",
  authDomain: "fir-social-219d7.firebaseapp.com",
  projectId: "fir-social-219d7",
  storageBucket: "fir-social-219d7.appspot.com",
  messagingSenderId: "322089459362",
  appId: "1:322089459362:web:e0477fae3707849d9741fb"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

