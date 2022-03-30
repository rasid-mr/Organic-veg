<template>
  <div class="pot">
    <div class="login">
      <p><input type="text" placeholder="Email" v-model="email" /></p>
      <p>
        <input type="password" placeholder="Password" v-model="password" />
      </p>
      <p><button @click="register">Submit</button></p>

      <p>{{userActive}}</p>
      <p v-if="userActive">i am logged in</p>

      <p @click="logout" v-if="userActive"> log out</p>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "firebase/auth";
import {getDoc, setDoc} from 'firebase/firestore'
const email = ref('')
const password = ref('')
const auth = getAuth();




let userActive = ref(false);

// const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    userActive.value = true

    

    // ...
  } else {
    // User is signed out
    // ...
    userActive.value = false
  }
});





// ///////////////


const logout = () => {
  signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
})
}




 



const register = () => {

signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user)
    email.value =''
    password.value = ''
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}



</script>

<style lang="scss" scoped>

 
</style>
