// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW7y7et5Nz704OdRjDw6DFcvxQ4yAH1yE",
  authDomain: "netflix-clone-nextjs-250.firebaseapp.com",
  projectId: "netflix-clone-nextjs-250",
  storageBucket: "netflix-clone-nextjs-250.appspot.com",
  messagingSenderId: "454421417235",
  appId: "1:454421417235:web:29d3685167275b9aed9ee6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
