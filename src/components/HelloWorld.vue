<template>
<div  class="container">
 

 <h1>Eat organic veg always</h1>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 4500,
      disableOnInteraction: false,
    }"
    
    
    :effect="'fade'"
     
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><img src="https://source.unsplash.com/random" alt="" /></swiper-slide><swiper-slide><img src="https://source.unsplash.com/wsanter" /> </swiper-slide
    ><swiper-slide>Slide 3</swiper-slide><swiper-slide>Slide 4</swiper-slide
    ><swiper-slide>Slide 5</swiper-slide><swiper-slide>Slide 6</swiper-slide
    ><swiper-slide>Slide 7</swiper-slide><swiper-slide>Slide 8</swiper-slide
    ><swiper-slide>Slide 9</swiper-slide>
  </swiper>
 

 

</div>
  
</template>



<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation,EffectFade } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectFade, Autoplay, Pagination, Navigation, ],
    };
  },
};
</script>


<style lang="scss" scoped>


.container {
  display: grid;
  min-height: 100vh;
  min-width: 100vh;
  position: relative;

  

 

  h1 {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-115%, -118%);
    width: fit-content;
    
    z-index: 2;
    color: black;
  }
}



.swiper {
  width: 100%;
  height: 100vh;
 
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
   background: orangered;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>