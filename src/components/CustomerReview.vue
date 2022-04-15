<template>
    <div class="pot">
        <div class="review">
            <div class="review_question">
                <h2 id="header" class="review_question-header">
                    Why our product is market standard?
                </h2>
                <ul class="review_question_cause">
                    <li class="trigger">We don't use any harmful pesticide.</li>
                    <li>We don't use preservative.</li>
                    <li>We delivary product daily basis.</li>
                    <li>So, No stale vegetable</li>
                    <li>Our goal is to keep you healthy.</li>
                    <li>We use world latest technology.</li>
                </ul>
            </div>
            <div class="review_customer">
                <div class="review_customer_card" v-for="review in reviews">
                    <div class="review_customer_card-header">
                        <div>
                           <img :src="review.img" alt="">    
                        </div>
                        <div>
                            <h4>{{review.name}} </h4> 
                            <p> livein: {{review.from}}</p>
                        </div>
                       
                    </div>
                    <p class="review_customer_card-info">{{review.review}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
 import {reactive, onMounted} from 'vue'
 import { faker } from '@faker-js/faker';
 import {gsap} from 'gsap'
 import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


onMounted(() => {
ScrollTrigger.matchMedia({
    "(min-width: 799px)": function()  {


        const tween = gsap.to("li", {
          backgroundImage:
            "linear-gradient(90deg, var(--left) 0%, var(--left) 100%, var(--right) 100%)",
          duration: .4,
        //   ease: "back.in",
          ease:"none",
          stagger: {
            each: 0.1,
            ease: "power2.out"
          },
           
               
        scrollTrigger:{
            start:"center center",
            trigger:'#header',
            // id:'lose',
            // markers:true,
            end:'+=300 center',
            scrub:true,
            
                        
            
        }
              
          
         
        });
    },
    "(max-width: 800px)": function()  {


        const tween = gsap.to("li", {
          backgroundImage:
            "linear-gradient(90deg, var(--left) 0%, var(--left) 100%, var(--right) 100%)",
          duration: .4,
          ease: "back.in",
          stagger: {
            each: 0.1,
            ease: "power2.out"
          },
           
               
        scrollTrigger:{
            start:"top center",
            trigger:'#header',
            // id:'lose',
            // markers:true,
            end:'+=220',
            scrub:true,
            //   markers:true,
            //   id:'hell'
                        
            
        }
              
          
         
        });
    }

})






gsap.defaults({ease: "power3"});
gsap.set(".review_customer_card", {y: 150}); 

ScrollTrigger.batch(".review_customer_card", {
  
  onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15, grid: [1, 3]}, overwrite: true}),
  onLeave: batch => gsap.set(batch, {opacity: 0, y: -150, overwrite: true}),
  onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
  onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 150, overwrite: true})
  // you can also define things like start, end, etc.
});


ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".review_customer_card", {y: 0}));



})



const reviews = reactive([
    
          
         {
             name:faker.name.findName(),
             from:faker.address.city(),
             img:faker.image.avatar(),
             review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, placeat?Lorem ipsum dolor sit.'
         },
         {
             name:faker.name.findName(),
             from:faker.address.city(),
             img:faker.image.avatar(),
             review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, placeat?Lorem ipsum dolor sit.'
         },
          
         {
             name:faker.name.findName(),
             from:faker.address.city(),
             img:faker.image.avatar(),
             review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, placeat?Lorem ipsum dolor sit.'
         },
          
         {
             name:faker.name.findName(),
             from:faker.address.city(),
             img:faker.image.avatar(),
             review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, placeat? Lorem ipsum dolor sit.'
         },
          
         {
             name:faker.name.findName(),
             from:faker.address.city(),
             img:faker.image.avatar(),
             review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, placeat? Lorem ipsum dolor sit.'
         },
          
         {
             name:faker.name.findName(),
             from:faker.address.city(),
             img:faker.image.avatar(),
             review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, placeat? Lorem ipsum dolor sit.'
         },
          
         {
             name:faker.name.findName(),
             from:faker.address.city(),
             img:faker.image.avatar(),
             review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, placeat? Lorem ipsum dolor sit.'
         },
          
         {
             name:faker.name.findName(),
             from:faker.address.city(),
             img:faker.image.avatar(),
             review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, placeat? Lorem ipsum dolor sit.'
         },
          
         {
             name:faker.name.findName(),
             from:faker.address.city(),
             img:faker.image.avatar(),
             review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, placeat? Lorem ipsum dolor sit.'
         },
          
         {
             name:faker.name.findName(),
             from:faker.address.city(),
             img:faker.image.avatar(),
             review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, placeat? Lorem ipsum dolor sit.'
         },
          
         {
             name:faker.name.findName(),
             from:faker.address.city(),
             img:faker.image.avatar(),
             review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, placeat? Lorem ipsum dolor sit.'
         },
          
         {
             name:faker.name.findName(),
             from:faker.address.city(),
             img:faker.image.avatar(),
             review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, placeat? Lorem ipsum dolor sit.'
         },
])
</script>

<style lang="scss" scoped>
@import "open-props/style";
@import "open-props/normalize";
.review {
     
    color: #36454f;
    display: grid;
    margin-block-start: var(--size-13);
    
    &_question {

         display: grid;
         place-items: flex-start;
         margin-bottom:var(--size-fluid-7) ;


         
        &-header {
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
            // margin-block-start: var(--size-fluid-7);
            font-size: var(--font-size-fluid-3);
            max-inline-size: var(--size-header-2);
             margin-block-end: var(--size-fluid-5);
        }
        &_cause {
            line-height: 2.5;
            white-space: nowrap;
            // font-size: ;

            @include respond(tab-port) {
                white-space: pre-wrap;
            }

            & li {
                width: fit-content;
                font-size: var(--font-size-5);
                font-weight: 600;
                --right: rgb(75, 153, 130);
                --left: #36454f;
                 background-image: linear-gradient(
                            90deg,
                            var(--left) 0%,
                            var(--left) 0%,
                            var(--right) 0%
                        );
                -webkit-background-clip: text;
               -webkit-text-fill-color: transparent;

               
               @include respond(tab-port) {
                   font-size: var(--font-size-fluid-1);
               }
                    
            }
        }
    }

    &_customer {
        display: grid;
        grid-auto-flow: row;
        grid-template-columns: repeat(2,1fr);
        border-radius: 5px;
        width: 100%;
        gap: var(--size-fluid-3) var(--size-fluid-4);
       

       @include respond(tab-port) {
           grid-template-columns: 1fr;
       }

        &_card {
            display: grid;
            grid-template-rows: repeat(1fr 4fr);
            background: white;
             padding-block: var(--size-fluid-2);
             padding-inline: var(--size-fluid-2);
              box-shadow: var(--shadow-2);


            &-header {
                display: grid;
                grid-auto-flow: column;
                justify-content: flex-start;

                & h4 {
                    color: $color-primary-cyan;
                    font-size: var(--font-size-fluid-1);
                    margin-bottom: var(--size-fluid-1);
                }
                 & img {
                width: var(--size-fluid-6);
                height: var(--size-fluid-6);
                border-radius: 50%;
                margin-right: var(--size-fluid-1);
              }
              & p {
                  font-size: var(--font-size-fluid-0);
                  color: $color-blue;
              }
            }
            &-info {
                margin-top: var(--size-fluid-2);
                color: $color-primary-purple;
                
            }
           
        }

    }
   

}
ul,li{
    margin:0;
    padding: 0;
}
li {
    list-style:lower-roman inside url('../assets/leaf-outline.svg');
}
</style>