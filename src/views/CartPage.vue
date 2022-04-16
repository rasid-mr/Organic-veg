<template>
  <div class="pot">
    <TheHeader />
   
    <div class="cart">
      <header class="cart_head" v-if="cartChecker">
        <h1 class="cart_head-primary">You have carted these items.</h1>
      </header>
      <header class="cart_head" v-else>
        <h1 class="cart_head-primary">You didn't cart any item</h1>
      </header>

      <div class="cart_card">
        <template v-for="maxCart in arrayCart" :key="maxCart">
          <template v-if="cartChecker">
            <figure class="cart_card_fig">
              <img :src="maxCart.img" alt="" class="cart_card_fig-image" />
              <h1 class="cart_card_fig-name">{{ maxCart.name }}</h1>
              <p class="cart_card_fig-amount">Amount: {{ maxCart.amount }}g</p>
            </figure>
            
          </template>
        </template>
        <div class="noCart" v-if="!cartChecker">
           
           <the-link>

           <router-link class="noCart-link" to="/">Go Back to Home</router-link>
           </the-link>
           <the-link>
             <router-link class="noCart-link" to='/login'>Login</router-link>
           </the-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, computed,defineExpose } from "@vue/runtime-core";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import TheLink from '../slots/TheLink.vue';
// import TheHeader from '../components/TheHeader.vue'
const auth = getAuth();
let arrayCart = ref([]);
let cartChecker = ref();

const db = getFirestore();
onMounted(async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // const user = await auth.currentUser;
      // const cartChecker = ref(true);
      const uid = user.uid;
      const users = doc(db, "users", uid);
      const infoUser = getDoc(users);
      // infoUser.forEach(element => {
      //   console.log(element)
      // });
      infoUser.then((da) => {
        const maxCart = da.data().maxCart;
        arrayCart.value = maxCart;
        console.log(arrayCart.value);
        cartChecker.value = arrayCart.value
       
      });
      //  let buttonChange =  infoUser.data();
      // console.log(await buttonChange)
      //  buttonChange.forEach(element => {
      //    console.log(element)
      //  });
    } else {
      console.log("no");
      console.log(cartChecker.value);
    }
  });
});

 

// console.log(arrayCart.value)
 
</script>

<style lang="scss" scoped>
 
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.cart {
  &_head {

    &-primary {
      color: $color-black;
      font-size: var(--font-size-fluid-3);

      margin-block-end: var(--size-fluid-5);
      padding-block-start: var(--size-fluid-7);
      max-inline-size: var(--size-header-2);
    }
  }
}
.cart_card{
  // grid-auto-rows: repeat(2 );
  // --_spacer: var(--size-3)
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr) );
  gap: var(--size-fluid-4);
  @include respond(phone) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr) );
  }

  &_fig {
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: min-content;
  justify-content: center;
  gap: var(--size-fluid-3);
  padding-inline: var(--size-fluid-2);
  padding-block-start: var(--size-fluid-1);
  background: var(--surface-2);
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-2);
  background-color: white;
  &-name {
    white-space: nowrap;
    color: $color-black;
    font-size: var(--font-size-fluid-2);
    justify-self: flex-start;
     
  }
  &-amount {
     justify-self: flex-start;
    //  width: var(--size-13);
      // inline-size: 90%;
     color: $color-black;
     padding-block-end: var(--size-fluid-1);
  }

  & > img {
    display: block;
    justify-self: center;
    inline-size: 100%;
    aspect-ratio: 14 / 9;
    object-fit: cover;
  }
  }
}
.noCart {
  display: grid;
  grid-auto-flow: column;
  width: 80%;
  grid-template-columns: repeat(auto-fill, minmax(100px, 300px) );
  gap: var(--size-fluid-3);
  
   & a, a:visited {
      color: $color-primary-cyan;
      text-decoration: none;
      font-size: var(--font-size-fluid-1);
      margin-block: var(--size-fluid-2) var(--size-fluid-1);

      &:hover {
        color: $color-primary-light-green;
      }
   }
   
   &-text {
     color: $color-primary-red;
     font-size: var(--font-size-fluid-1);
   }
}
</style>
