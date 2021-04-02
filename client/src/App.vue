<template>
  <v-card color="basil">
    <v-card-title class="vertical center py-6">
      <h1 class="font-weight-bold display-3 basil--text">
        Family Planning
      </h1>
      <v-spacer></v-spacer>
      <v-btn depressed small class="pink white--text">
      <!-- <v-icon left small>mdi-home</v-icon> -->
      <span>email me</span>
      </v-btn>
    </v-card-title>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
    <v-tab to = "/childcare">Childcare</v-tab>
    </v-tabs>
    <router-view></router-view>

  </v-card>
</template>

<script>
//import Navbar from '@/components/NavBar'
//import mdiVue from 'mdi-vue'
export default {
  name: 'App',
  data () {
    return {
      tab: null,
        items: [
          'Houses', 'Vehicles', 'Childcares', 'Favourite Plans',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
  },
}
</script>

<style>
/* Helper classes */
.basil {
  background-color: #FFFBE6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
