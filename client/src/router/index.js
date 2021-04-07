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
    path: '/edit-profile',
    name: 'edit-profile',
    component: () => import('../components/EditProfile.vue'),
    meta: {
      requiresAuth: true
    }
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
    path: '/housing',
    name: 'housing',
    component: () => import('../components/Housing.vue')
  },
  {
    path: '/plan',
    name: 'plan',
    component: () => import('../components/PlanPage.vue')
  },
  {
    path: '/plan/1',
    name: 'plan1',
    component: () => import('../components/Plan1.vue')
  },
  {
    path: '/plan/2',
    name: 'plan2',
    component: () => import('../components/Plan2.vue')
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
