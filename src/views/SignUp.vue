<template>
  <div class="pot">
    <div class="login">
      <p><input type="text" placeholder="Email" v-model="email" /></p>
      <p>
        <input type="password" placeholder="Password" v-model="password" />
      </p>
      <p><button @click="register">Submit</button></p>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {getFirestore,updateDoc, getDoc, setDoc, doc} from 'firebase/firestore'
import { querySnapshot } from "../firebase.js";
import all from 'gsap/all';
const auth = getAuth();
const db =  getFirestore()
const email = ref("");
const password = ref("");



const register = async () => {
   
   
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // console.log(user.email);
      //  const user = auth.currentUser;
       
        const uid = user.uid;
 
        const users = doc(db, "users", uid);
      //  const allName = []
        //  console.log(allName)
         let allObjName = []
         header.forEach(element => {
          //  allName.push(element.name)
          const allName = false
             
          
           allObjName.push(allName)
          
           console.log(allName)
           console.log(allObjName)
         });
        setDoc( users, {  uid: uid, like: false, allName:allObjName})
         
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log({ errorCode });
    });
     
    

};

const header = [];
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  // console.log(doc.id, " => ", doc.data());

  header.push(doc.data());
});

</script>

<style lang="scss" scoped></style>