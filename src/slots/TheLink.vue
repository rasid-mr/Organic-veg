<template>
<a class="link" :href="$attrs.link"> <slot>Read more</slot> </a>

</template>
<script>
 
export default {
  inheritAttrs: false
}
</script>
<script setup>
 
</script>

<style lang="scss" scoped>
.link,
.link:visited {
  position: relative;
  background-color: #fff8f8;
  color:  $color-primary-light-green;
  font-weight: 600;
  width: fit-content;
  white-space: nowrap;
  display: inline-block;
  text-decoration: none;
  margin-block: 1rem;
  font-size: var(--font-size-3);
}

.link:hover {
  color:$color-primary-cyan;
}

.link::before {
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

.link:hover::before {
  transform: scaleX(1);
}
</style>