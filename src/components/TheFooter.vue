<template>
  <div class="pot">
    <div class="footer">
      <div class="footer_product">
        <button>Products</button>
        <button>Sign up</button>
        <button>Log in</button>
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
      <a class="footer_visit-portfolio" href="">Vist my portfolio</a>
      </div>
      <div class="footer_visit_message">
          <label for="name">Your Name</label>
          <input id="name" type="text" placeholder="name" />
          <label for="sendMessage">Send me a Message</label>
          <textarea id="sendMessage" type="text" placeholder="message" />
          <button>SEND</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, 1fr);
  color: $color-black;
  margin-block-start: var(--size-fluid-6);

  @include respond(tab-port) {
    // grid-auto-rows:  ;
    grid-template-rows: fit-content fit-content;
    grid-template-columns: 1fr;
    gap: 20px 0;
    grid-auto-flow: row;
  }

  &_product {
    color: inherit;
    display: flex;
    // flex-direction: column;
    align-items: center;

    gap: 1rem;

    // justify-content: center;
    @include respond(tab-port) {
      flex-direction: column;
      align-items: flex-start;
    }

    & > button {
      color: $color-yellow;
      font-size: var(--font-size-2);
      flex-basis: var(--size-fluid-7);
      background-color: $color-primary-cyan;
      font-weight: 600;
      outline: none;
      border: none;
      border-radius: 2px;

      @include respond(tab-port) {
        flex-basis: var(--size-fluid-2);
        width: var(--size-fluid-7);
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
    & input, label:not(:first-child), textarea{
      width:80%;
      margin-block-start: var(--size-fluid-1);
    }
    
    & label {
      color: $color-black;
      font-size: var(--font-size-fluid-1);
    }
    & button {
      margin-block: var(--size-fluid-2);
      width: var(--size-fluid-6);
      border-radius: 2px;
    }
    &-greeting {
      color: $color-black;
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
  color:  $color-primary-light-green;;
  font-weight: 600;
  width: fit-content;
  white-space: nowrap;
  display: inline-block;
  text-decoration: none;
  margin-block: 1rem;
  font-size: var(--font-size-3);
}

a:hover {
  color:$color-primary-cyan;
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
