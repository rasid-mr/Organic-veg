<template>
  <div class="pot" >
    <h1 name="products" id="products" class="page-header">Most Iconic Products</h1>
    <div class="hot">
      <h2
        style="--header: 400deg,#f56f90, #ff6347 80%"
        class="hot-header header"
      >
        Delicious Furits
      </h2>

    <product-list type='fruit'></product-list>
    </div>

    <div class="cool">
      <h2 style="--header: 315deg, #f56f90, #ff6347 80%"
       class="cool-header header" >Fresh Vegetable</h2>
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
</style>
