import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import OpenProps from 'open-props';
 
import 'open-props/style';
import 'open-props/normalize';
 import './firebase.js'
// Import the functions you need from the SDKs you need


const app = createApp(App)
app.use(router)
app.use(OpenProps)
app.mount('#app')


