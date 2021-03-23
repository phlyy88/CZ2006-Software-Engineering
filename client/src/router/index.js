import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/Register.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/ForgotPassword.vue')
  },
  {
    path: '/mainpage',
    name: 'mainpage',
    component: () => import('../components/MainPage.vue'),
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/hdb-overview',
    name: 'hdb-overview',
    component: () => import('../components/HDB-Overview.vue')
  }, 
   {
    path: '/hdb-filter',
    name: 'hdb-filter',
    component: () => import('../components/HDB-Filter.vue')
  },
  {
    path: '/favourite',
    name: 'favourite',
    component: () => import('../components/Favourite.vue')
  },
  {
    path: '/planning-page',
    name: 'planning-page',
    component: () => import('../components/PlanningPage.vue')
  }
  
  {
    path:'/childcareListing',
    name:'/childcareListing',
    component: import('../components/ChildcareListing.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
