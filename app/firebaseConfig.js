// app/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// ✅ Correct Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBV3JcDpukcdmLMD8Y-xL0z2XsAZEj7ZP0",
  authDomain: "touristguideapp-fa971.firebaseapp.com",
  databaseURL: "https://touristguideapp-fa971-default-rtdb.firebaseio.com",
  projectId: "touristguideapp-fa971",
  storageBucket: "touristguideapp-fa971.appspot.com",
  messagingSenderId: "188737247853",
  appId: "1:188737247853:web:887cc41a4f632f79727d64",
};

// Initialize Firebase + Realtime Database
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
