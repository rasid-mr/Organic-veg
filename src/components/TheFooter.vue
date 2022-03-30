<template>
  <div class="pot">
    <div class="footer">
      <div class="footer_product">
        <button>Go to product</button>
        <button>Sign up</button>
        <button>Log in</button>
      </div>

      <div class="footer_info">
        <h2 class="footer_info-header">This is demo page made with Vuejs and Firebase</h2>
        <label for="sendMessage">Send me a Message</label>
        <input id="sendMessage" type="text" />
        <label for="name"></label>
        <input id="name" type="text" placeholder="name">
        <button>SEND</button>
      </div>
    </div>
    .
    <p class="footer_greeting">Hey, thank you for visiting my site. Do you like this😶‍🌫️?</p>
    <a class="footer_link" href="">Vist my portfolio</a>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, 1fr);
  color: $color-black;

  &_product {
      color: inherit;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      & > * {
          flex-grow: 1;
          width: 8rem;
          flex-basis: 2rem;
      }
       
  }
  &_info {
      color: inherit;

      &-header{
          color: inherit;
      }
  }
  &_greeting, &_link {
      color: $color-black;
  }
}

</style>
