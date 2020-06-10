import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import firebase from "firebase"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:'/login',
    component: Home
    },
    
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
    }
]

const router = new VueRouter({
  mode:"history",
  routes
})

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
//    const currentUser = firebase.auth().currentUser;
  
//     if (requiresAuth && !currentUser) {
//       next("/da");
//     } else if (requiresAuth && currentUser) {
//       next();
//    } else {
//      next();
//     }
//   });
    
    
export default router
