import { async } from "@firebase/util";
import {initializeApp} from "firebase/app";
import {getFirestore,  collection, getDocs } from "firebase/firestore";
import {ref, toRefs} from 'vue'



 
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




// let querySnapshot

// onMounted(async () => {
 
// })
// const querySnapshot = await getDocs(collection(db, "vegetable"));
export {
  
  querySnapshot,
  querySnapshot2,
  header
  
}
 const querySnapshot2 = async function() {
  const data =   await getDocs(collection(db, "vegetable"))
  
   const header2 = [];
   await data.forEach((doc) => {
     header2.push(doc.data())
   })
   return header2
   
 }
 
 const querySnapshot = querySnapshot2()
 const data = ref();
 const header = await querySnapshot2().then((res) => data.value = res)
// const mist =ref('love')

// const userRef = await getDoc(doc(db, uid))
