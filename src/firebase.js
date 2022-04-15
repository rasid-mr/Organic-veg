import {initializeApp} from "firebase/app";
import {getFirestore, doc, setDoc, collection, getDoc, getDocs, updateDoc } from "firebase/firestore";
import {onMounted} from 'vue'



 
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAKYVfSYS9JqrxZRY-TfHWpom97InNOzGw",
  authDomain: "organic-veg-e720f.firebaseapp.com",
  projectId: "organic-veg-e720f",
  storageBucket: "organic-veg-e720f.appspot.com",
  messagingSenderId: "864740675982",
  appId: "1:864740675982:web:b7f2d0f2e04abaa74354df",
  measurementId: "G-K30R4VCGKZ"
};

// Initialize Firebase
 
 initializeApp(firebaseConfig);

 // Initialize Firebase Authentication and get a reference to the service
 


const db =  getFirestore()





 



// const userRef = await getDoc(doc(db, uid))
