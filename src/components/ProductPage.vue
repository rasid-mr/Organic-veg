<template>
  <div class="pot">
    <h1 class="page-header">Eat clean & Organic</h1>
    <div class="hot">
      <h2
        style="--header: 400deg, rgb(255, 82, 82), rgb(255, 255, 96)"
        class="hot-header header"
      >
        Hot Products
      </h2>
    </div>
    <div class="cool">
      <h2 class="cool-header header">Most Selling Products</h2>
    </div>
    <div class="diet">
      <h2 class="diet-header header">Special Offer</h2>
      <div class="media-scroller snaps-inline">
        <template v-for="(head, index) in header" :key="head.name">
          <li v-if="index < 19">
            <div class="media_element">
              <img :src="head.img" class="media_element-img" alt="" />
              <h4 class="media_element-title">
                {{ head.name }}<span> $40 </span>
              </h4>
              <div class="media_element_button">
                <div class="svg"></div>
                <p  :data-index="index" id="likes" class="media_element-likes">{{ head.likes }}</p>
                <button
                  :data-index="index"
                  @click="cart"
                  class="media_element_button-cart cart"
                >
                  Add to Cart
                  
                </button>

                <button class="buy" @click="one">Buy Now</button>

                <button :data-index="index" @click="incrementLike">increment</button>
              </div>
            </div>
          </li>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    one() {
      const button = document.querySelector(".media_element_button-cart");
      // console.log(button)
    },
  },
};
</script>
<script setup>
import { onMounted, computed, ref, reactive, watch } from "vue";
import { useRouter } from "vue-router";
import { querySnapshot, artich } from "../firebase.js";
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

 
 

/////////////////
// showing initial likes in the page

onMounted(async () => {


 
// const userr = await auth.currentUser;
// const uid = userr.uid
// const ref = await doc (db, 'users', uid)
// await updateDoc(ref , { like: true}, {merge: true})

// const citiesRef = collection(db, "cities");

  // //////////
  // getting likes form firebase
  // const vegetable = await getDocs(collection(db, 'vegetable'))
//   const bjRef = doc(db, "vegetable", "tomato");
//    let initLike =[]
//  const allLikes = header.forEach(el => {
//    let like = el.likes
//       initLike.push(like)
//   console.log(initLike)
  
//   })
  // console.log('nope')

  // const bjSnap = await getDoc(bjRef);

  // if (bjSnap) {
  //   likes.value = await bjSnap.data().likes;
  // } else {
  //   likes.value = "...";
  // }

  // changing button text
  //  const user = auth.currentUser;

  const user = await auth.currentUser;
  if (user) {
    const uid = user.uid;
    const users = await doc(db, "users", uid);
    const infoUser = await getDoc(users);

    //  let itemName = await header[index].name;
    let buttonChange = await infoUser.data().maxCart;
    // console.log(buttonChange)
    const carts = document.querySelectorAll(".cart");
    for (let [key, name] of Object.entries(buttonChange)) {
      document.querySelectorAll(".cart").forEach((el) => {
        if(name.index == el.dataset.index) {
          el.textContent = 'Item added'
        }
      });
       
    }
  } else {
     throw 'Nothing is carted.'
  }
});
// ////////////
// cart function 
let index = ref();
let buttonCart = ref();
const cart = async (e) => {
  // router.push('/login')
  index = e.target.dataset.index;
  let itemName = await header[index].name;
  // let allCart = itemName;
 
  const user = auth.currentUser;
  

  if (user) {
    const uid = user.uid;
    const users = doc(db, "users", uid);
    await setDoc(
      users,
      {  uid: uid, allCart: arrayUnion(itemName)},
      { merge: true }
    );

    

    setDoc(
      users,
      {
        maxCart: {
          [itemName]: {
            cart: true,
            amount: 700,
            index: Number(index),
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

 
// /////////////
// incrementing  likes
let likes = ref();
let likeBolean = ref(true)

const incrementLike = async (e) => {
  index = e.target.dataset.index;
  let itemName = await header[index].name;
  console.log(itemName)
  const bjRef = doc(db, "vegetable", itemName);
  const bjSnap = await getDoc(bjRef);
  // console.log(bjSnap.data())

 const user = await auth.currentUser;
 const uid = await user.uid
  const userRef = await doc(db, 'users', uid)
  // let userData = await getDoc(userRef)
  //  const likeChecker = await userData.data().allName[index]
  //  console.log(likeChecker)
  //  const like2 = await userData.data().allName
  //  console.log(like2[index])
 
  if(!e.target.classList.contains('active')) {
    console.log('hello')
      e.target.classList.add('active')
   
    


    await updateDoc(bjRef, {
      likes: increment(1),
    });
       
      likes.value = await bjSnap.data().likes;
      console.log(bjSnap.data(), likes.value)
      const buy = e.target.closest('div')
      const next = buy.children
      next[1].textContent= likes.value + 1

    
  }else {
    e.target.classList.remove('active')
const user = await auth.currentUser;
 const uid = await user.uid
  // const userReff = await getDoc(doc(db, 'users', uid))
  // let likeChecker = await userReff.data().like


   
  
    await  updateDoc(bjRef, {
      likes: increment(-1),
    })
      likes.value = await bjSnap.data().likes - 1
      const buy = e.target.closest('div')
      const next = buy.children
      next[1].textContent = await likes.value
      
    // likeBolean.value = true
    // console.log(likes.value)
  }
  

  // console.log(bjSnap.data())

};

 

// ///////////////////
// getting data from firebase

 
const header = [];
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  // console.log(doc.id, " => ", doc.data());
 
  header.push(doc.data());
});
// const array = []
 artich.forEach(el => {
  console.log(el.data())
  // array.push(el)
})
// console.log(array)

defineExpose({
  name,
  header,
  likes,
});
</script>

<style lang="scss" scoped>
@import "open-props/style";
@import "open-props/normalize";
.page-header {
  background: linear-gradient(
    400deg,
    $color-primary-dark-green,
    $color-primary-light-green 55%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0 auto;
  margin-top: var(--size-fluid-9);
  position: relative;

  
}
.hot-header {
  background: linear-gradient(var(--header));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: relative;
}

.header {
  white-space: nowrap;
  margin-block: #{scaleValue(50)};
}

.most {
  margin-bottom: 1rem;
  @include scrollbars(0.6em, rgb(82, 82, 82), #212529);
}

// scrolling

.media-scroller {
  --_spacer: var(--size-3);
  display: grid;
  gap: var(--_spacer);
  grid-auto-flow: column;
  // grid-auto-rows: 12rem;
  grid-auto-columns: minmax(21rem, 40%);

  padding-block-end: var(--_spacer);

  overflow-x: auto;
  overscroll-behavior-inline: contain;
  @include scrollbars(0.6em, rgb(82, 82, 82), #212529);
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

  &-title {
    white-space: nowrap;
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
    inline-size: 100%;
    aspect-ratio: 10 / 9;
    object-fit: cover;
  }
}
li {
  list-style: none;
  padding-inline-start: 0;
}
.active {
  color: red;
}
</style>
