import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
 // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjEMwKjeP9vfc8sxxBVHjpsXu7vTpKiAE",
  authDomain: "dev-interview-000.firebaseapp.com",
  projectId: "dev-interview-000",
  storageBucket: "dev-interview-000.firebasestorage.app",
  messagingSenderId: "22368691537",
  appId: "1:22368691537:web:ec57eb29373f5a1d981f70"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 