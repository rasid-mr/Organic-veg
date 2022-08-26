<template>
  <div class="pot">
    <h1 name="products" id="products" class="page-header">
      Most Iconic Products  
    </h1>

    <div class="hot">
      <h2
        style="--header: 400deg, #f56f90, #ff6347 80%"
        class="hot-header header"
      >
        Delicious Furits
      </h2>

      <product-list @increase-by="increase" type="fruit" :no=0></product-list>
    </div>
    <div class="cool">
      <h2
        style="--header: 315deg, #f56f90, #ff6347 80%"
        class="cool-header header"
      >
        Fresh Vegetable
      </h2>
      <product-list @increase-by="increase" type="vegetable" :no=0></product-list>
      
    </div>
  <div class="toast">
    <p class="toast-paragraph">You have carted
      <Transition name="slide-up" mode="out-in"
      
    
      >
      
      <li class="itemName"  v-if="dataItemName != oldItemName && !boleantick">
          {{newItemName}}
      </li>
      <li class="itemName"  v-else-if="dataItemName == newItemName && boleantick">
          {{newItemName}}
      </li>
      <!-- <li class="itemName"  v-else>
        {{oldItemName}}
      </li> -->
     
    
      </Transition> 
      </p>
    <!-- <button @click="gocart"> Cart</button> -->
    <router-link class="cart" to="cart">Cart</router-link>
        <svg xmlns="http://www.w3.org/2000/svg" @click="closeCart" class="ionicon-close" viewBox="0 0 512 512"><title>Close
   </title><path transform="translate(0 0)" fill="none" stroke="rgb(255, 51, 51)"
    stroke-linecap="round" stroke-linejoin="round" 
    stroke-width="32" d="M368 368L144 144M368 144L144 368"/>
    </svg> 
<div class="visually-hidden">close the cart item menu</div>
  </div>
   
  </div>
</template>

<script setup>
 
import ProductList from "./ProductList.vue";
import { onMounted, watch, ref, nextTick} from "vue";
import {gsap} from 'gsap';
// import toastr from '@/com';
import { useRouter } from "vue-router";
import { querySnapshot2 } from "../firebase.js";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  
  doc,
  setDoc,
 
  getDoc,
  getDocs,
  arrayUnion,
} from "firebase/firestore";
 
const auth = getAuth();

const db = getFirestore();
const router = useRouter();

const number = ref(0);
let index = ref();
let image = ref();
let cartCounter = ref(0)
let buttonCart = ref();
let dataItemName = ref();
 const close = document.querySelector('.ionicon-close')

const header = ref();
onMounted(async () => {
  await querySnapshot2().then((res) => header.value = res)
  
  const toast = document.querySelector('.toast')
})
  
  

const closeCart = () => {
    const toast = document.querySelector('.toast')

    // toast.style.transform = `translateY(1000px)`
    // toast.style.opacity = `0`
    const tl = gsap.timeline()
    gsap.to(toast, {y: 1000, opacity: 0, duration:.3, ease: 'power2.in', onComplete:() => {
     
      console.log('tranition end')
      setTimeout(() => {

        gsap.set(toast, {x: 1000, y: 0, opacity: 0})
      }, 200)
     
    }})
 
}
const increase = async (e, n) => {
  


 
  // router.push('/login')
  
  index = e.target.dataset.index;
   image = e.target.parentElement.parentElement.firstElementChild
    
     let img =  image.getAttribute('src')
    
  let itemName = await header.value[index].name;
  
  
  // let allCart = itemName;

  const user = auth.currentUser;

  if (user) {
    const uid = user.uid;
    const users = doc(db, "users", uid);
    await setDoc(
      users,
      { uid: uid, allCart: arrayUnion(itemName) },
      { merge: true }
    );

    await setDoc(
      users,
      {
        maxCart: {
          [itemName]: {
            cart: true,
            amount: 700,
            index: Number(index),
            name:itemName,
            img:img
          },
        },
      },
      { merge: true }
    );

    const infoUser = await getDoc(users);

    let buttonChange = await infoUser.data().maxCart[itemName].cart;
    // const d2 = await buttonChange`.${itemName}`
    buttonCart.value = buttonChange;
    buttonCart.value ? (e.target.textContent = "Item added") : "Add to cart";

    
    number.value = number.value + 1
  dataItemName.value =  e.target.dataset.name
  // document.querySelector('.toast').style.transform = `translateX(0)`
  // document.querySelector('.toast').style.opacity = `1`
  gsap.to('.toast', {x: 0, opacity: 1, ease:'power3.out', druation: .3})
  } else {
     

// toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!')
    router.push("/login");
  }
};

const goCart = () => {router.resolve('/login')}
let newItemName = ref('')
let oldItemName = ref('')
let boleantick = ref(false)
watch(dataItemName, (newVal, oldVal) => {
  boleantick.value = !boleantick.value;
  newItemName.value = newVal;
  oldItemName.value = oldVal;
})
 
 
  
 


</script>

<style lang="scss" scoped>
@import "open-props/style";
@import "open-props/normalize";
.page-header {
  background: linear-gradient(
    400deg,
    $color-primary-dark-green,
    $color-primary-light-green 50%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  // margin: 0 auto;
  // white-space: nowrap;
  margin-block-start: var(--size-fluid-7);
  font-size: var(--font-size-fluid-3);

  @include respond(tab-port) {
  }
}
.header {
  background: linear-gradient(var(--header));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  white-space: nowrap;
  margin-block: var(--size-fluid-4) var(--size-fluid-4);
  font-size: var(--font-size-fluid-2);
}

.most {
  margin-bottom: 1rem;
  @include scrollbars(0.6em, rgb(82, 82, 82), #212529);
}

// scrolling

li {
  list-style: none;
  padding-inline-start: 0;
}
.active {
  color: red;
}
.toast {
  font-size: 2rem;
  color: #fcfcfc;
  background: rgb(49, 214, 4);
  // border: 2px solid blanchedalmond;
  border-radius: .2em;
  // box-shadow: 2px 2px 1px white;
  width: #{scaleValue(800)};
  padding: 2rem 1rem;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
  // toast operation
  position:fixed;
  top:80%;
  left:10%;
  transform: translateX(1000px);
  opacity: 0;
  // transition: .3s all ease-in-out;
  @include respond(tab-port) {
    width: 80%;
  }
  @include respond(phone) {
    width: 80%;
    justify-content: space-between;

  }

.ionicon-close {
  // content: url('../assets/close-outline-red.svg');
  cursor: pointer;
  position: absolute;
  top:-35%;
  left: 95.5%;
  width: 4rem;
  height: 4rem;
  background-origin: 50% 25%;
  
   
  background: $color-primary-white;
  border-radius: 50%;
  @media only screen and (max-width: 1300px) {
    left: 95%;
  }
  @include respond(tab-land) {
    left: 94.5%
  }
  @media only screen and (max-width: 1000px) {
    left: 93.5%;
  }
  @include respond(tab-port) {
    top: -30%;
  }
  @include respond(phone) {
    top: -30%;
    left:91.8% ;
  }
    
}
& p {
  font-size: var(--font-size-fluid-1);
  width: 80%;
  white-space: pre-wrap;
    // overflow: hidden;
    // text-overflow: ellipsis;

    @include respond(phone) {
      width: 50%;
    }
}
& .itemName {
  display: inline-block;
  margin-block: .4rem;
  font-weight: 900;
  color: var(--yellow-2);
}
  & .cart {
    font-size: var(--font-size-fluid-1);
     width: 15%;
     padding: .5rem 1rem;
     color: inherit;
     display: flex;
     justify-content: center;
     text-decoration: none;
     border-radius: .2em;
     background: rgb(60, 255, 99);

     @include respond(tab-port) {
      font-size: var(--font-size-fluid-2);
      width: 25%;
      padding: 0 var(--size-fluid-5);
     }
  }

}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.visually-hidden:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>
