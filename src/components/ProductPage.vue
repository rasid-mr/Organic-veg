<template>
  <div class="pot">
    <h1 class="page-header">Eat clean & Organic</h1>
    <div class="hot">
      <h2
        style="--header: 400deg, rgb(255, 82, 82), rgb(255, 255, 96)"
        class="hot-header header"
      >
        Trending Products
      </h2>

    <!-- <product-list type='fruit'></product-list> -->
    </div>

    <div class="cool">
      <h2 style="--header: 315deg, #2a2a72 0%, #009ffd 74%;"
       class="cool-header header" >Most Selling Products</h2>
       <product-list type='vegetable'></product-list>
    </div>

  </div>
</template>

 
<script setup>
import ProductList from './ProductList.vue'
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
  margin: 0 auto;
  white-space: nowrap;
  margin-top: var(--size-fluid-9);
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
  margin-block: var(--size-fluid-7) var(--size-fluid-4);
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
</style>
