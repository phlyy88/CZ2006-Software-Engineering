import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Notifications from 'vue-notification'

//import 'bootstrap/dist/css/bootstrap.min.css'

import '@/assets/css/main.css'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'vue-mdi/dist/mdi.css';

// main.js
 
import store from "./store";
 
import { GridPlugin } from "@syncfusion/ej2-vue-grids"
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns'
// import vuetify from './plugins/vuetify';
// import { VueMdi, library } from 'vue-mdi'
// import { mdiAccount } from '@mdi/js'

// library.add({ mdiAccount })
 
// Vue.component('vue-mdi', VueMdi)
 
Vue.config.productionTip = false

//import { RouterLinkStub, shallowMount } from '@vue/test-utils';
//import NavFilter from '/NavFilter.vue';
//VueSplitPane from 'vue-split-pane';

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