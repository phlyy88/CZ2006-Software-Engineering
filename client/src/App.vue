<template>
  <v-card color="basil">
    <v-card-title class="vertical center py-6">
      <h1 class="font-weight-bold display-3 basil--text">
        Family Planning
      </h1>
      <v-spacer></v-spacer>
      <b-button href = "/mainpage" variant = "outline-dark" style ="float:right;">Back to Mainpage</b-button>
    </v-card-title>

    <div>
  <b-nav tabs justified>
    <b-nav-item href= "/housing">Housing</b-nav-item>
    <b-nav-item href= "/vehicle">Vehicle</b-nav-item>
    <b-nav-item href= "/childcare">Childcare</b-nav-item>
  </b-nav>
</div>
    <router-view></router-view>

  </v-card>
</template>

<script>
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

</style>
