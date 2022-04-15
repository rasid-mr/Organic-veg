import { defineConfig, compilerOptions } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  compilerOptions: {
    // isCustomElement: (tag) => tag.excludes('-')
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        :root {
          
        }
       
        
        @function scaleValue($value, $ideal-viewport-width:1600) {
          @return calc(
            #{$value} * (clamp(350px, 100vw, 3840px) / #{$ideal-viewport-width})
          );
        }
       
         
        $color-primary-cyan: #416a59;
        $color-primary-light-green: rgb(102, 255, 0);
        $color-primary-light-green-2: #94ff4d;
        $color-primary-dark-green: rgb(0, 255, 26);
        $color-primary-purple:#39395f;
        $color-primary-white:#f5eec2;
        $color-primary-red:rgb(255, 51, 51);;
        $color-yellow:#ff9900;
        $color-blue:#3d5a10;
        $color-black:#36454f;
        $space-left:9.56rem;
        $space-left-land:6.25rem;
        $space-left-port:4.375rem;
        $space-left-phone:2rem;

        @mixin scrollbars($size, $foreground-color, $background-color: mix($foreground-color, white,  50%)) {
          // For Google Chrome
          &::-webkit-scrollbar {
            width:  $size;
            height: $size;
          }
        
          &::-webkit-scrollbar-thumb {
            border-radius:16px;
            background: $foreground-color;
          }
        
          &::-webkit-scrollbar-track {
            background: $background-color;
            border-radius:16px;
          }
        
          // For Internet Explorer
          & {
            scrollbar-face-color: $foreground-color;
            scrollbar-track-color: $background-color;
          }
        }

        @mixin respond($breakpoint) {
          @if $breakpoint == sm-phone {
            @media only screen and (max-width: 23.75em) {
              @content
            }
          }
          @if $breakpoint == phone {
            @media only screen and (max-width: 37.5em) {
              @content;
            } //600px
          }
          @if $breakpoint == tab-port {
            @media only screen and (max-width: 56.25em) {
              @content;
            } //900px
          }
          @if $breakpoint == tab-land {
            @media only screen and (max-width: 75em) {
              @content;
            } //1200px
          }
          @if $breakpoint == big-desktop {
            @media only screen and (min-width: 112.5em) {
              @content;
            } //1800
          }
        }
        .pot {
          padding: 0 $space-left ;
          
          
          @include respond(tab-land) {
            padding: 0 $space-left-land;
          }
          @include respond(tab-port) {
            padding: 0 $space-left-port;
          }
          @include respond(phone) {
            padding: 0 $space-left-phone;
          }
        }
        
        `,
      },
    },
  },
});
