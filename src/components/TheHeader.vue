<template>
 

   <header class="primary-header">
        <!-- <div class="header-link">

     </div> -->
        <router-link to="/">
          <img class="header_logo" src="../assets/logo2.png" alt="" />
        </router-link>

        <button class="mobile-nav-toggle" aria-controls="primary-navigation">
          <span class="sr-only" aria-expanded="false"></span>
        </button>
        <nav>
          <ul
            id="primary-navigation"
            data-visible="false"
            class="primary-navigation underline-indicators flex"
          >
            <!-- <a class="router-link" href="#products">Products</a>  -->
            <router-link
              @click="hideNav"
              class="router-link"
              tag="li"
              to="/"
              >Home</router-link
            >
            <router-link
              @click="hideNav"
              class="router-link"
              tag="li"
              to="/cart"
              >Cart Page</router-link
            >

            <router-link
              @click="hideNav"
              class="router-link"
              tag="li"
              to="/signup"
              >Signup</router-link
            >
            <router-link
              @click="hideNav"
              class="router-link"
              tag="li"
              to="/login"
              >Login</router-link
            >

            <router-link
              @click="hideNav"
              class="router-link"
              tag="li"
              to="/about"
              
              >About Me</router-link
            >
             <button v-if="logoutChecker" class="logout" @click="logout" > Log out</button>
            <!-- <button @click="show">dot</button> -->
          </ul>
        </nav>
      </header>
 
 

</template>
<script>
 
</script>
<script setup>
 import {onMounted, ref} from 'vue';
 import {getAuth, signOut, onAuthStateChanged} from 'firebase/auth';
 import {useRouter} from 'vue-router';
const auth = getAuth();
const router = useRouter();
const logoutChecker = ref(false)


onAuthStateChanged(auth, (user) => {
  if(user) {
    logoutChecker.value = true
  }
  else{
    logoutChecker.value = false
  }
})


 const logout = () => {
  signOut(auth).then(() => {
      // Sign-out successful.
     
      router.push('/')
    }).catch((error) => {
      // An error happened.
      
    })
  }
   const hideNav = () =>  {
      const primary = document.querySelector(".primary-navigation");
    
      const navToggle = document.querySelector(".mobile-nav-toggle");
      primary.classList.add("hide-nav");
      primary.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
    };
  
  onMounted(() => {
    const nav = document.querySelector(".primary-navigation");
      const navToggle = document.querySelector(".mobile-nav-toggle");

      navToggle.addEventListener("click", () => {
        const visiblity = nav.getAttribute("data-visible");
        if (visiblity === "false") {
          nav.setAttribute("data-visible", true);
          navToggle.setAttribute("aria-expanded", true);
          // document.querySelector('.heart').style.zIndex=0
        } else {
          nav.setAttribute("data-visible", false);
          navToggle.setAttribute("aria-expanded", false);
          // document.querySelector('.heart').style.zIndex=1
        }
      });

      const primary = document.querySelector(".primary-navigation");
      const att = primary.getAttribute("data-visivle");
      if (!att == "true") {
        primary.classList.add("hide-nav");
      } else return;
  })

</script>




 

 <style lang="scss">
 .primary-header {
   position: absolute;
   height: 10vh;
   top: var(--size-fluid-2);
    
   z-index: 1001;
   width: 100%;
    
   display: grid;
   grid-auto-flow: column;
   justify-content: space-between;
   align-items: center;
  

  & h2 {
    margin: 0;
  }
}

.primary-navigation {
  --gap: clamp(1.5rem, 5vw, 3.5rem);
  --underline-gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.8);

  backdrop-filter: blur(0.5rem);
}

.primary-navigation a {
  text-decoration: none;
}

.primary-navigation {
  position: fixed;
  z-index: 1000;
  inset: 0 0 0 40%;
  list-style: none;
  // background: red;
  padding: 2rem;
  margin: 0;
  display: flex;
  flex-direction: column;

  transform: translateX(100%);
  transition: transform 500ms ease-in-out;

  &::before {
    content: "";
    display: block;
    position: relative;
    height: 5rem;
    // width: 100%;
    background: transparent;
  }

  & > *:not(:last-child) {
    flex-basis: var(--size-fluid-5);
  }
}

.primary-navigation[data-visible="true"] {
  transform: translateX(0);
}

.mobile-nav-toggle {
  // display: block;
  display: grid;
  align-items: flex-end;
  position: fixed;
  z-index: 2000;

  right: var(--size-fluid-4);
  // top: var(--size-fluid-2);
  background: transparent;
  // background-image: url("../../assets/);
  background-image: url("../assets/menu-outline.svg");
  background-repeat: no-repeat;
  background-position: center;
  width: var(--size-fluid-5);
  aspect-ratio: 1;
  border: 0;
  cursor: pointer;
}

.mobile-nav-toggle[aria-expanded="true"] {
  background-image: url("../assets/close-outline.svg");
}

.mobile-nav-toggle:focus-visible {
  outline: 5px solid white;
  outline-offset: 5px;
}
// }

@media (min-width: 45em) {
  nav {
    order: 2;
  }
}

.hide-nav {
  transform: translateX(100%);
}

.router-link, .router-link:visited {
  text-decoration: none;
  color: $color-primary-white;
  margin: 0;
  font-size: var(--font-size-fluid-1);
  font-weight: 600;
  position: relative;
  transition: text-decoration 0.8s;
   
  &:hover {
    text-decoration: underline;
    text-underline-offset: 8px;
    text-underline-position: above;
    text-decoration-thickness: 3px;

    @include respond(phone) {
      text-underline-offset: var(--size-fluid-1);

    }
  }
}

.router-link:last-of-type {
  padding-right: 0;
  margin-right: 0;
}
.logout {
  background-color: $color-primary-red;
  font-size: var(--font-size-fluid-1);
  font-weight: 600;
  width: var(--size-fluid-7);
  flex-basis: var(--size-fluid-4);
  border-radius: 5px;
  position:relative;
  cursor: pointer;
  // display: inline-block;

  &:active {
     
    top: 2px;
    left: 0;
  }
}
 
.header_logo {
  display: block;
  text-decoration: none;
  width: var(--size-fluid-5);
  margin-block-start: -var(--size-fluid-2);

   
  
}
 </style>