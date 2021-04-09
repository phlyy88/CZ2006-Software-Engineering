// store/index.js
 
import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
     user: {
         previousPlan: 3
     }
 },
 getters: {},
 mutations: {},
 actions: {}
});