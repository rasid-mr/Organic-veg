<template>
<div class="pot">
    <TheHeader />
    <div class="about">
    <h1>Hello, I am sumon. </h1>
    <p>I am Vue js devopler. I currently working on svg.</p>
    <the-link>
       <a href="https://mohtasim-hasan.netlify.app/">Visit my portfolio</a>
    </the-link> 
    <p>This site is a demo site.</p>

    </div>
</div>
</template>
<script setup>
 import TheLink from '../slots/TheLink.vue'
</script>

<style lang="scss" scoped>
.about {

    color: $color-primary-purple;
}
h1 {
    color: inherit;
    font-size: var(--font-size-fluid-1);
    padding-block: var(--size-fluid-7) var(--size-fluid-2);
}
p {

}
a, a:visited {
    text-decoration: none;
    color: inherit;
    &:hover{
        text-decoration: none;
    }
}
</style>