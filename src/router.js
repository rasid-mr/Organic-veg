import { createRouter, createWebHistory } from "vue-router";
import LogIn from './views/LogIn.vue'
import SignUp from './views/SignUp.vue'
import Home from './views/Home.vue'
import CartPage from './views/CartPage.vue'
import AboutPage from './views/AboutPage.vue'
 
 
 


const routes = [
  { path: "/",
    name:'Home',
    component:Home,
  },

  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
    
  },
  {
      path:"/signup",
      name:"SignUp",
      component:SignUp,
  },
  {
    path:"/cart",
    name:"CartPage",
    component:CartPage,
    
  },
  {
    path:"/about",
    name:"About",
    component:AboutPage
  }
//   {
    // path: "/article-list/:id/",
    // query: null,
    // name: "ArticleDetail",
    // component: ArticleDetail,
    // props: true,
//   }
];

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };

  },
 
  behavior: "smooth",
  history: createWebHistory(),
  routes,
});

export default router;