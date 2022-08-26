import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import OpenProps from 'open-props';
 
import 'open-props/style';
import 'open-props/normalize';
 import './firebase.js'
// Import the functions you need from the SDKs you need

import TheHeader from './components/TheHeader.vue'
const app = createApp(App)
app.component(
'TheHeader', TheHeader
)
// app.config.globalProperties = {myName: 'kira'}
app.use(router)
app.use(OpenProps)
app.mount('#app')


