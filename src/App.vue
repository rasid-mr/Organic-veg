<template>
  <!-- <LandingPage />
  <GladiatorSection />
  <PepsiVsBroccole />
  <ProductPage /> -->
  <router-view></router-view>
   
</template>

 

<style>
body {
  font-family: "Poppins", sans-serif;
  font-family: "Roboto Mono", monospace;
  background: rgb(255, 248, 248);
  overflow-x: hidden;
}
 html {
    box-sizing: border-box;     
    scrollbar-color: #6969dd #e0e0e0;
    scrollbar-width: thin;
     
  }
   *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  

 body::-webkit-scrollbar {
    width: 10px;
}

body::-webkit-scrollbar-track {
    background-color: rgb(218, 218, 218);
}

body::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.3);
     
}
@media (prefers-reduced-motion: reduce) {  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>
