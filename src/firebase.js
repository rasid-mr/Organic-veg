import {initializeApp} from "firebase/app";
import {getFirestore, doc, setDoc, collection, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";




 
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


// await setDoc(doc(citiesRef, "SF"), {
//     name: "San Francisco", state: "CA", country: "USA",
//     capital: false, population: 860000, img:'https://source.unsplash.com/random/300×300',
//     regions: ["west_coast", "norcal"],likes:1 });
// await setDoc(doc(citiesRef, "LA"), {
//     name: "Los Angeles", state: "CA", country: "USA",
//     capital: false, population: 3900000, img:'https://source.unsplash.com/daily',
//     regions: ["west_coast", "socal"],likes:1  });
// await setDoc(doc(citiesRef, "DC"), {
//     name: "Washington, D.C.", state: null, country: "USA",img:'https://source.unsplash.com/daily',
//     capital: true, population: 680000,
//     regions: ["east_coast"],likes:1  });
// await setDoc(doc(citiesRef, "TOK"), {
//     name: "Tokyo", state: null, country: "Japan",img:'https://source.unsplash.com/daily',
//     capital: true, population: 9000000,
//     regions: ["kanto", "honshu"],likes:1  });
// await setDoc(doc(citiesRef, "BJ"), {
//     name: "Beijing", state: null, country: "China",img:'https://source.unsplash.com/daily',
//     capital: true, population: 21500000,
//     regions: ["jingjinji", "hebei"],likes:1  
//   });



// how to get subcollection(firebase)
const artich = await getDocs(collection(db, 'vegetable', 'Artichoke', 'ready'))
console.log(artich)



const querySnapshot = await getDocs(collection(db, "vegetable"));
// const userRef = await getDoc(doc(db, uid))
export {
  // userRef,
  artich,
  querySnapshot
}