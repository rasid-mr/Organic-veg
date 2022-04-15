<template>
  <div class="pot">
    <TheHeader />
    <div class="login">
      <h1 class="login-header">Login </h1>
     <input type="text" placeholder="Email" v-model="email" />
      
     
        <input type="password" placeholder="Password" v-model="password" />
     <button @click="register">Submit</button>

     <!-- {{userActive}}
      <p v-if="userActive">i am logged in</p> -->

      <button id="logout" @click="logout" v-if="userActive"> log out</button> 
      <p class="errMsg"  v-show="errMsg">{{errMsg}}</p>
    </div>
     
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "firebase/auth";
import {getDoc, setDoc} from 'firebase/firestore'
const email = ref('');
const errMsg = ref()
const password = ref('')
const auth = getAuth();


const router = useRouter()

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
        router.push('/')
  })

  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  // });
  .catch((error) => {
     switch (error.code) {
          case "auth/invalid-email":
            errMsg.value = "Invalid email";
            break;
          case "auth/user-not-found":
            errMsg.value = "No account with that email was found";
            break;
          case "auth/wrong-password":
            errMsg.value = "Incorrect password";
            break;
          default:
            errMsg.value = "Email or password was incorrect";
            break;
        }
  })
   
}



</script>

<style lang="scss" scoped>
.login {
  display: grid;
  min-height: 100vh;
  // width: 100vw;
   
  // place-content:center;
  justify-content: center;
  align-content: center;
  // place-items: center;

  &-header {
    color: $color-black;
    margin-block-end: var(--size-8);
  }
  & input {
    margin-block-end: var(--size-fluid-3);
    width: var(--size-fluid-10);
    height: var(--size-fluid-4);
    border-radius: 3px;
  }
  & button {
   display: grid;
    place-content: center;
  min-width: 90px;
  width: var(--size-fluid-8);
  min-height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  // display: inline-block;
  outline: none;
  border-radius: 5px;
  border: none;
  font-size: var(--font-size-fluid-1);
  background-size: 120% auto;
  // background-image: linear-gradient(315deg, #bdc3c7 0%, #2c3e50 75%);
  background-image: linear-gradient(315deg,  $color-primary-light-green 0%, $color-black 75%);


&:hover {
  background-position: right center;
}
&:active {
  top: 2px;
}
  }
}

.errMsg {
  margin-block-start: var(--size-fluid-2);
  color: $color-primary-red;
  font-weight: 600;
  font-size: var(--font-size-fluid-1);
}
#logout {
    margin-block-start: var(--size-fluid-2);
  // color: rgb(255, 51, 51);
   
  font-size: var(--font-size-fluid-1);
   background-image: linear-gradient(315deg, $color-primary-red  0%, $color-black 75%);

}
 
</style>
