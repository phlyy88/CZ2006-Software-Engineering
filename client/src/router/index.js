import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'startpage',
    component: () => import('../components/StartPage.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/Register.vue')
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
    path: '/childcare',
    name: 'childcare',
    component: () => import('../components/Childcare.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/vehicle',
    name: 'vehicle',
    component: () => import('../components/Vehicle.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/housing',
    name: 'housing',
    component: () => import('../components/Housing.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/plan',
    name: 'plan',
    component: () => import('../components/PlanPage.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/plan/:index',
    name: 'plan_index',
    component: () => import('../components/Plan.vue'),
    meta: {
      requiresAuth: true
    },
    props: true
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
