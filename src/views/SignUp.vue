<template>
  <div class="pot">
    <TheHeader />
    <div class="signup">
      <h1 class="signup-header">Sign Up</h1>
      <input type="text" placeholder="Email" v-model="email" />

      <input type="password" placeholder="Password" v-model="password" />

      <button @click="register">Submit</button>
      <p class="errMsg" >{{errMsg}}</p>
      <p class="or">Or</p>

      <button id="signGoogle" @click="signupGoogle"> Signup with google</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import TheHeader from '../components/TheHeader.vue'
 
import {
  getFirestore,
  updateDoc,
  getDoc,
  setDoc,
  doc,
  collection
} from "firebase/firestore";
// import { querySnapshot } from "../firebase.js";
const router = useRouter();
const auth = getAuth();
const db = getFirestore();
const email = ref("");
const password = ref("");
const errMsg = ref()

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
      let allObjName = [];
      header.forEach((element) => {
        //  allName.push(element.name)
        const allName = false;

        allObjName.push(allName);

        console.log(allName);
        console.log(allObjName);
      });
      setDoc(users, { uid: uid, like: false, allName: allObjName });
      router.push('/')

    })
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
    });
};

const signupGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      router.push('/')
      // ...
    }).catch((error) => {
      // Handle Errors here.
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
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(credential)
      // ...
    });

}
const querySnapshot = await getDocs(collection(db, "vegetable"));

const header = [];
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  // console.log(doc.id, " => ", doc.data());

  header.push(doc.data());
});
</script>

<style lang="scss" scoped>
.signup {
  display: grid;
  height: 100vh;
  // width: 100vw;
  place-content: center;
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
    // min-width: 90px;
    width: var(--size-fluid-8);
    height: 40px;
    color: #fff;
    padding: 5px 10px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    outline: none;
    border-radius: 5px;
    border: none;
    background-size: 120% auto;
    // background-image: linear-gradient(315deg, #bdc3c7 0%, #2c3e50 75%);
    background-image: linear-gradient(
      315deg,
      $color-primary-light-green 0%,
      $color-black 75%
    );
    @include respond(tab-port) {
      width: var(--size-fluid-9);
    }
    

    &:hover {
      background-position: right center;
    }
    &:active {
      top: 2px;
    }
  }
}
.errMsg {
  margin-block-start: var(--size-fluid-1);
  color: $color-primary-red;
  height: var(--size-fluid-3);
  position: relative;

  &::after {
    content:'';
    position: absolute;
    width: 100%;
    top: 100%;
    left: 0;
    border: 1px solid rgb(230, 230, 230);
    border-radius: 2px;


  }
}
.or {
  margin-block: var(--size-fluid-2) var(--size-fluid-1);
  color: $color-black;

}
#signGoogle  {
      //  width: fit-content;
    }
</style>
