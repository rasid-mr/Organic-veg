<template>
  <div class="pot">
    <div id="glad" class="glad">
      <div class="glad_illustration">
        <svg
          class="glad_illustration-heartbit"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 200.1 200.2"
          style="enable-background: new 0 0 200.1 200.2"
          xml:space="preserve"
        >
          <mask id="heartFill">
            <rect
              id="maskerH"
              width="372"
              height="400"
              x="-400"
              y="0"
              fill="#fff"
            />
          </mask>
          <path
            id="full-outline"
            class="st0"
            d="M100.4,0C45.3,0,0.6,44.6,0.5,99.7c0,55.1,44.6,99.8,99.7,99.9h0.1l0,0c0.6,0,1.3,0,1.9,0
	c55.1-1.1,98.9-46.6,97.9-101.7C199.2,43.6,154.8,0,100.4,0L100.4,0z M120.8,189.4c-49.5,11.2-98.6-19.8-109.9-69.2
	C-0.3,70.7,30.7,21.5,80.1,10.3C86.8,8.8,93.6,8,100.4,8h0.1c50.7,0,91.8,41.1,91.8,91.8C192.3,142.7,162.6,179.9,120.8,189.4z"
          />
          <path
            class="st1 zigzag"
            mask="url(#heartFill)"
            d="M177.4,99.6L170.2,78c-0.5-1.7-2.1-2.8-3.8-2.8h-0.1c-1.8,0-3.3,1.2-3.8,2.9l-11.2,39.2l-13.2-79.4
          c-0.4-2.2-2.5-3.7-4.7-3.3c-1.6,0.3-2.9,1.4-3.3,3l-13.4,62h-8.1h-6.9h-2.9L91.6,78c-0.5-1.7-2.1-2.8-3.8-2.8h-0.1
          c-1.8,0-3.3,1.2-3.8,2.9l-11.2,39.3L59.4,38.1c-0.4-2.2-2.5-3.7-4.7-3.3c-1.6,0.3-2.9,1.4-3.3,3L38.1,99.6h-15c-0.3,0-0.6,0-0.8,0.1
          v-0.1H8.5l0,8.2h13.9v-0.1c0.2,0,0.4,0.1,0.7,0.1h18.2c1.9,0,3.5-1.3,3.9-3.1l9.5-46.1l13,77.8c0.3,1.9,1.9,3.3,3.8,3.4h0.2
          c1.8,0,3.4-1.2,3.9-2.9L88.2,93l4,12c0.6,1.7,2.1,2.8,3.8,2.8h5.8H120c1.9,0,3.5-1.3,3.9-3.1l9.4-46l13,77.8
          c0.3,1.9,1.9,3.3,3.8,3.4h0.2c1.8,0,3.4-1.2,3.9-2.9l12.6-43.9l4,12c0.6,1.7,2.1,2.8,3.8,2.8h17.6c0-2.8,0-5.5,0-8.3H177.4z"
          />
        </svg>
      </div>
      <img
        class="glad_illustration-pyramid"
        src="../assets/gladiator_Food_Pyramid2.jpg"
        alt=""
      />
      <!-- yellow line -->

      <div class="roman">
        <img class="roman-img" src="../assets/divider.png" alt="" />
        <!-- svg text -->
        <div class="roman_text">
          <h1 class="roman_text-header">ANCIENT WARRIOR'S FOOD HABIT</h1>

          <p class="roman_text-discription">
            Roman gladiators had a diet that was mostly vegetarian,according to
            an analysis of bones from a cemetery. Where fighters were buried.
          </p>
          <a class="roman_text-link" xlink:href="https://www.youtube.com/"
            >Read more</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  const gladAni = gsap.timeline();

  gladAni.fromTo(
    ".glad_illustration-pyramid",
    { autoAlpha: 0.3, x: -200 },
    { autoAlpha: 1, x: 0, duration: 1 }
  );
  gladAni.fromTo(
    ".svg_text-header",
    { attr: { textLength: 1500 }, autoAlpha: 0.8 },
    { attr: { textLength: 700 }, autoAlpha: 1, duration: 2 },
    "-.5"
  );
  gladAni.fromTo(
    ".svg_text-discription",
    { attr: { textLength: 900 }, autoAlpha: 0.8 },
    { attr: { textLength: 470 }, autoAlpha: 1, duration: 1.2, stagger: 0.2 },
    "-=.5"
  );

  gladAni.to("#maskerH", {
    attr: { x: 3 },
    duration: 4,
    // delay:1,
    ease: "none",
    repeat: -1,
    repeatDelay: 1.5,
    transformOrigin: "center right",
  });
  gladAni.to(".zigzag", {
    xPercent: 110,
    duration: 1.5,
    repeatDelay: 4,
    repeat: -1,
  });
  gladAni.set(".zigzag", { xPercent: 0, repeat: -1, repeatDelay: 5.5 });

  ScrollTrigger.create({
    animation: gladAni,
    trigger: ".glad",
    start: "top center",
    // markers: true,
    // id: "Change between slides",
    toggleActions: "play pause resume reset",
  });
});
</script>

<style lang="scss" scoped>
@import "open-props/style";
@import "open-props/normalize";

.glad {
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-template-rows: 100px 1fr;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 3rem;

  @include respond(tab-port) {
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    gap: var(--size-fluid-5);
  }
  &_illustration {
    overflow: hidden;
    display: grid;
    place-items: center;
    grid-row: 1/2;
    grid-column: 1/-1;

    &-heartbit {
      // width: 200px;
      width: var(--size-11);
      //  justify-self: flex-end;
      grid-row: 2/3;
      margin-block-start: var(--size-fluid-6);
      margin-inline-end: var(--size-fluid-6);
    }
    &-pyramid {
      min-width: var(--size-fluid-10);
      object-fit: cover;
      // margin-top: 3rem;
      background-position: center center;
      clip-path: polygon(49% 0, 0% 100%, 100% 101%);

      @include respond(tab-port) {
        width: var(--size-content-2);
      }
    }
  }

  margin: 10rem 0;

  & > * {
    flex: 1 0;
  }

  .roman {
    display: flex;

    align-items: center;

    img {
      display: block;
      width: var(--size-fluid-2);
      
    }


    &_text {
      margin-inline-start: var(--size-fluid-1);

      &-header {
        color: $color-yellow;
        font-size: var(--font-size-fluid-2);
        margin-block-end: var(--size-fluid-3);

        @include respond(tab-land) {
          font-size: var(--font-size-fluid-1);
        }
        @include respond(tab-port) {
          font-size: var(--font-size-fluid-2);
        }
      }
      &-discription {
        color: $color-black;
        line-height: 1.4;
        width: 80%;
        font-size: var(--font-size-fluid-0);
      }
      &-link {
        display: inline-block;
        margin-top: var(--size-fluid-2);
        color: $color-blue;
        font-size: var(--font-size-fluid-0);
      }
    }
  }
}

.st0 {
  fill: #e6e6e6;
}
.st1 {
  fill: #6c63ff;
}
</style>
