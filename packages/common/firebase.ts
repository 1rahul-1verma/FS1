import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvEJkPXYIW73zcTLcK9FMvmVIx_glWg5Q",
  authDomain: "rahul-1verma-fs1.firebaseapp.com",
  projectId: "rahul-1verma-fs1",
  storageBucket: "rahul-1verma-fs1.appspot.com",
  messagingSenderId: "509684632464",
  appId: "1:509684632464:web:2102273608f9e73e9c4115",
  measurementId: "G-9BNWL21FHP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export { app, auth };
