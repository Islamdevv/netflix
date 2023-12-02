// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfATmFHevH_zhJK6Ua3xxmx4ag18wUY7U",
  authDomain: "reactflix-3c539.firebaseapp.com",
  projectId: "reactflix-3c539",
  storageBucket: "reactflix-3c539.appspot.com",
  messagingSenderId: "738297255914",
  appId: "1:738297255914:web:5c711b0ecd07409e5d8493",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
