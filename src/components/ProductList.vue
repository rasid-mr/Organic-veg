<template>
  <div class="diet">
    <!-- <h2 class="diet-header header">Special Offer</h2> -->
    <div class="media-scroller snaps-inline" >
      <template v-for="(head, index) in header" :key="head.name">
        <li v-if="index < 19 && head.type == productType">
          <div class="media_element">
            <img :src="head.img" class="media_element-img" id="img" alt="" />
            <h4 class="media_element-title">
              {{ head.name }}<span> ${{ head.price }}</span>
            </h4>
            <div class="media_element_button">
              <div :data-index="index" class="svg" @click="incrementLike">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  class="svg_like-heart"
                  x="0px"
                  y="0px"
                  viewBox="0 0 176.1 161.9"
                  style="enable-background: new 0 0 176.1 161.9"
                  xml:space="preserve"
                >
                   
                  <path
                    id="fill"
                    class="st3"
                    d="M96.6,161.4l64-74.2c19.7-20.1,19.3-52.4-0.8-72.1c-18.9-18.5-48.6-19.3-68.5-2.6
                      c-2.1,1.8-5.1,1.8-7.3,0.1C63.8-3.8,34.1-2.3,15.5,16.6C-4.2,36.7-3.8,69,16.3,88.7l71.2,72.6"
                  />
                  <path
                    id="stroke"
                    class="st4"
                    d="M91.9,160.9c3,0,5.8-1.3,7.8-3.5l60.9-69.7c19.7-20.1,19.3-52.4-0.8-72.1
                      c-18.2-17.8-46.2-19.2-66-4.5c-3.6,2.7-8.6,2.7-12.2,0.1c-20.1-14.3-48.2-12.2-65.9,6C-4.2,37.2-3.8,69.5,16.3,89.2l68.2,68.6
                      C86.5,159.8,89.1,160.9,91.9,160.9L91.9,160.9z"
                  />
                </svg>

                <p
                  :data-index="index"
                  id="likes"
                  class="media_element-likes svg_like-number"
                >
                  {{ head.likes }}
                   
                </p>
              </div>
              <button
                :data-index="index"
                @click="cart"
                class="media_element_button-cart cart"
              >
                Add to Cart
              </button>
              <router-link to="cart">

              <button class="cart-page" @click="one">Cart page</button>
              </router-link>

              <!-- <button :data-index="index" @click="incrementLike">increment</button> -->
            </div>
          </div>
        </li>
      </template>
    </div>
  </div>
  <div class="fruit">

  </div>
  <!-- <button @click="gocart">cart </button> -->
</template>

<script setup>
import { onMounted, computed, ref, reactive} from "vue";
import gsap from "gsap";
import { useRouter } from "vue-router";
import { querySnapshot2 } from "../firebase.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  updateDoc,
  increment,
  doc,
  setDoc,
  Timestamp,
  collection,
  getDoc,
  getDocs,
  arrayUnion,
} from "firebase/firestore";

//  import NewComponent from './NewComponent.vue'

const auth = getAuth();

const db = getFirestore();
const router = useRouter();
const props = defineProps({
  type:String
})

let productType = computed(() => props.type);
 
  // const querySnapshot = await getDocs(collection(db, "vegetable"));


/////////////////
// showing initial likes in the page
 const header = ref();
onMounted(async () => {
  //////////
    await querySnapshot2().then((res) => header.value = res)
  console.log(header.value)
  const user = await auth.currentUser;
  onAuthStateChanged(auth, (user) => {
  // if(user) {
    
  // }
  if(user) {
    const uid =  user.uid;
    const users =  doc(db, "users", uid);
    const infoUser =  getDoc(users);
    // let buttonChange =  infoUser.data().maxCart;
    // console.log(buttonChange)
    // console.log(buttonChange)
    infoUser.then(da => {
      if(da.data().maxCart) {

            const buttonChange = da.data().maxCart
          const carts = document.querySelectorAll(".cart");
          for (let [key, name] of Object.entries(buttonChange)) {
            // console.log(key, name)
            document.querySelectorAll(".cart").forEach((el) => {
              if (name.index == el.dataset.index) {
                el.textContent = "Item added";
              }
            });
          }
      }else return
    })
  }else {
    console.log('couldnt parse the data.')
  }
  })
 
});
// ////////////
// cart function
let index = ref();
let image = ref()
let buttonCart = ref();
const cart = async (e) => {
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
  } else {
    router.push("/login");
  }
};

/////////////////
// go to cart
const gocart = (() => {router.push('/cart')})
// /////////////
// incrementing  likes
let likes = ref();
let likeBolean = ref(true);

const incrementLike = async (e) => {
  
   
  index = e.target.dataset.index;
  console.log(index);
  let itemName = await header.value[index].name;
  console.log(itemName);
  const bjRef = doc(db, "vegetable", itemName);
  const bjSnap = await getDoc(bjRef);
  // console.log(bjSnap.data())

  // const user = await auth.currentUser;
  // const uid = await user.uid;
  // const userRef = await doc(db, "users", uid);
  let targetElement = e.target.firstElementChild.firstChild
  const svgtl = gsap.timeline();

  if (!e.target.classList.contains("active")) {
    console.log("hello");
    e.target.classList.add("active");

    await updateDoc(bjRef, {
      likes: increment(1),
    });

    likes.value = await bjSnap.data().likes;
    console.log(bjSnap.data(), likes.value);
    const buy = e.target.closest("div");
    const next = buy.children;
    next[1].textContent = likes.value + 1;
        
    svgtl.to(targetElement, {
       opacity:1,
       duration:.1
    });
  } else {
    e.target.classList.remove("active");
    // const user = await auth.currentUser;
    // const uid = await user.uid;

    await updateDoc(bjRef, {
      likes: increment(-1),
    });
    likes.value = (await bjSnap.data().likes) - 1;
    const buy = e.target.closest("div");
    const next = buy.children;
    next[1].textContent = await likes.value;
    
    
    svgtl.to(targetElement, {
       opacity:0,
       duration:.1
    });
  }
};

// ///////////////////
// getting data from firebase
 

defineExpose({
 
buttonCart
});
</script>

<style lang="scss" scoped>
.media-scroller {
  --_spacer: var(--size-3);
  display: grid;
  gap: var(--_spacer);
  grid-auto-flow: column;
  grid-auto-columns: minmax(var(--size-fluid-9), var(--size-fluid-9));

  padding-block-end: var(--_spacer);

  overflow-x: auto;
  overscroll-behavior-inline: contain;
  @include scrollbars(0.6em, rgb(60, 60, 60), #bbbbbb);
}

.snaps-inline {
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: var(--_spacer, 1rem);
}

.media_element {
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: min-content;
  gap: var(--_spacer);
  padding: var(--_spacer);
  background: var(--surface-2);
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-2);
  background-color: white;
  &-title {
    white-space: nowrap;
    color: $color-black;
  }
  &_button {
    display: flex;
    gap: 1rem;
    flex-direction: column;

    & > * {
      flex-grow: 1;
    }
  }

  & > img {
    display: block;
    inline-size: 100%;
    aspect-ratio: 14 / 9;
    object-fit: cover;
  }
}
.svg {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  width: fit-content;
  gap: var(--size-2);
  border: 1px solid $color-black;
  border-radius: 2px;
  padding-block: var(--size-0);
  padding-inline: var(--size-2);
  background-color: #f1f1f1;
  cursor: pointer;

  @include respond(tab-port) {
    padding-block: var(--size-0);
    padding-inline: var(--size-2);
  }
  &_like-heart {
    //  fill: orange;
    stroke: $color-black;
    width: var(--size-fluid-2);
    pointer-events: none;

    @include respond(tab-port) {
      width: var(--size-fluid-3);
    }
  }

  &_like-number {
    color: $color-black;
    width: var(--size-fluid-3);
    font-size: var(--font-size-3);
    font-variant-numeric: tabular-nums;
    pointer-events: none;
    @include respond(tab-port) {
      font-size: var(--font-size-fluid-1);
    }
  }
}
 
    .cart-page {
      background-image: linear-gradient(315deg, rgb(89, 76, 174) 0%, rgb(82, 196, 78) 75%);
    }
    .cart {
      background-image: linear-gradient(315deg, $color-primary-dark-green 0%, $color-primary-light-green 75%);
      width: fit-content;
    }
  .cart,.cart-page {
    // min-width: var(--size-fluid-8);
  width: var(--size-fluid-7);
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
  
  @include respond(tab-land) {
    width: var(--size-fluid-8);
  }

&:hover {
  background-position: right center;
}
&:active {
  top: 2px;
}
  }















.st3 {
  fill: #99ff66;
  opacity: 0;
}
.st4 {
  fill: none;
  stroke:  rgb(0, 255, 26);
  stroke-width: 4;
  stroke-miterlimit: 10;
}
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
