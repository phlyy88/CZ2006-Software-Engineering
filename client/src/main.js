import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Notifications from 'vue-notification'
import '@/assets/css/main.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'vue-mdi/dist/mdi.css';
import store from "./store";
import { GridPlugin } from "@syncfusion/ej2-vue-grids"
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

 
Vue.config.productionTip = false


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(GridPlugin)
Vue.use(DropDownListPlugin)
Vue.use(VueSweetalert2)
Vue.use(Notifications)

const base = axios.create({
  baseURL: "http://localhost:8080/api"
})

Vue.prototype.$http = base;
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')