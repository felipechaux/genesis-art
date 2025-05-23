import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC328SKOXgWm7DZ-54jVt2szdmNw6gRqjo",
  authDomain: "genesis-art-e581e.firebaseapp.com",
  databaseURL: "https://genesis-art-e581e-default-rtdb.firebaseio.com",
  projectId: "genesis-art-e581e",
  storageBucket: "genesis-art-e581e.firebasestorage.app",
  messagingSenderId: "189925684066",
  appId: "1:189925684066:web:b6f7decde9bfab99daf23b",
  measurementId: "G-LFLLE0RF26"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app); 