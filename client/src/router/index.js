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
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/childcare',
    name: 'childcare',
    component: () => import('../components/Childcare.vue'),
  },
  {
    path: '/vehicle',
    name: 'vehicle',
    component: () => import('../components/Vehicle.vue')
  },
  {
    path: '/vehicle/:id',
    name: 'vehicle_index',
    component: () => import('../components/VehiclePage.vue')
  },
  {
    path: '/housing',
    name: 'housing',
    component: () => import('../components/Housing.vue')
  },
  {
    path: '/plan1',
    name: 'plan1',
    component: () => import('../components/Plan.vue')
  },
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
