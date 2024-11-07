import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword , onAuthStateChanged ,signOut} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHvm5iCj2_55xV9kWLpq7hbJl87kv23Oo",
  authDomain: "next-dashboard-da316.firebaseapp.com",
  projectId: "next-dashboard-da316",
  storageBucket: "next-dashboard-da316.firebasestorage.app",
  messagingSenderId: "270746316687",
  appId: "1:270746316687:web:92522768de20a3f5bae5fa",
  measurementId: "G-PQ1FMQDJ89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export only what is needed
export { app, auth, createUserWithEmailAndPassword , onAuthStateChanged ,signOut};
