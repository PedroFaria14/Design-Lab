import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyjNThiLkkanOAhPR4jrj3RVbFq1YFqsw",
  authDomain: "blog-ba736.firebaseapp.com",
  projectId: "blog-ba736",
  storageBucket: "blog-ba736.appspot.com",
  messagingSenderId: "320490304597",
  appId: "1:320490304597:web:613e946e43bfa7a24390dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
