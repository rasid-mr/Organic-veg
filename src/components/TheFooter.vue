<template>
  <div class="pot">
    <div class="footer">
      <div class="footer_product">
        <a name="products" href="#products">Products</a>
        <router-link to="/signup">Sign up</router-link>
        <router-link to="/login">Log in</router-link>
      </div>

      <div class="footer_info">
        <h2 class="footer_info-header">
          This is demo page made with Vuejs and Firebase
        </h2>
      </div>
    </div>
    <div class="footer_visit">
      <div>
        <p class="footer_visit-greeting">
          Hey, thank you for visiting my site. Do you like this😶‍🌫️?
        </p>
        <!-- <a class="footer_visit-portfolio" href="">Vist my portfolio</a> -->
        <TheLink link="https://mohtasim-hasan.netlify.app/">
          Visit my Portfolio</TheLink
        >
      </div>
      <div class="footer_visit_message">
        <label for="name">Your Name</label>
        <input id="name" type="text" placeholder="name" />
        <label for="sendMessage">Send me a Message</label>
        <textarea id="sendMessage" type="text" placeholder="message" />
        <button @click.prevent="submit">SEND</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheLink from "../slots/TheLink.vue";

import {
  getFirestore,
  addDoc,
  collection,
} from "firebase/firestore";
const db = getFirestore();
// const submit = function() {
//   console.log(
//     'he'
//   )
// }
async function submit() {
  const name = document.querySelector("#name");
  const sendMessage = document.querySelector("#sendMessage");

  console.log(name.value);
  if (name.value && sendMessage.value) {
    await addDoc(collection(db, "message"), {
      name: name.value,
      message: sendMessage.value,
    });
  }else {
    alert('Name and message both should be provided.')
  }
  name.value = '';
  sendMessage.value = ''
}
</script>

<style lang="scss" scoped>
.footer {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, 1fr);
  color: $color-black;
  margin-block-start: var(--size-fluid-6);

  @include respond(tab-land) {
    // grid-auto-rows:  ;
    grid-template-rows: fit-content fit-content;
    grid-template-columns: 1fr;
    gap: 20px 0;
    grid-auto-flow: row;
  }

  &_product {
    color: inherit;
    display: grid;
    // flex-direction: column;
    grid-auto-flow: column;
    align-items: center;
    justify-content: flex-start;
    gap: var(--size-fluid-6);

    // justify-content: center;
    @include respond(tab-land) {
      // flex-direction: column;

      align-items: flex-start;
      margin-block-end: var(--size-fluid-4);
      // gap: var(--size-fluid-0);
    }
    @include respond(phone) {
      flex-direction: column;
      gap: var(--size-fluid-4);
    }

    & > button {
      color: $color-primary-white;
      font-size: var(--font-size-2);
      flex-basis: var(--size-fluid-8);
      background-color: $color-black;
      font-weight: 600;
      outline: none;
      border: none;
      border-radius: 2px;
      height: var(--size-fluid-4);

      @include respond(tab-port) {
        // flex-basis: var(--size-fluid-7);
        // width: var(--size-fluid-7);
        width: fit-content;
      }
      @include respond(phone) {
        width: var(--size-fluid-8);
        flex-basis: var(--size-fluid-4);
      }
    }
  }
  &_info {
    color: inherit;

    &-header {
      color: inherit;
      font-size: var(--font-size-fluid-2);
    }
  }

  &_visit {
    margin-block-start: var(--size-fluid-4);
    display: grid;
    // align-items: center;
    grid-template-columns: repeat(2, 1fr);
    @include respond(tab-port) {
      // grid-auto-rows:  ;
      grid-template-rows: fit-content fit-content;
      grid-template-columns: 1fr;
      gap: 20px 0;
      grid-auto-flow: row;
    }
    & input,
    label:not(:first-child),
    textarea {
      width: 80%;
      margin-block-start: var(--size-fluid-1);
    }

    & label {
      color: $color-black;
      font-size: var(--font-size-fluid-1);
    }
    & button {
      margin-block: var(--size-fluid-2);
      height: var(--size-fluid-3);
      width: var(--size-fluid-6);
      border-radius: 2px;
      color: $color-primary-white;
      background-color: $color-primary-purple;
      position: relative;

      &:active {
        top: 2px;
      }
      // color: $color-primary-light-green;
    }
    &-greeting {
      color: $color-black;
      max-inline-size: var(--size-content-2);
      font-size: var(--font-size-fluid-1);
    }
    &_message {
      display: grid;
    }
  }
}

a {
  position: relative;
  background-color: #fff8f8;
  color: $color-primary-light-green;
  font-weight: 600;
  width: fit-content;
  white-space: nowrap;
  display: inline-block;
  text-decoration: none;
  margin-block: 1rem;
  font-size: var(--font-size-3);
}

a:hover {
  color: $color-primary-cyan;
}

a::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: $color-primary-cyan;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

a:hover::before {
  transform: scaleX(1);
}
</style>
