<template>
  <v-card>
    <v-card-title class="vertical center py-6">
      <h1 class="font-weight-bold display-3 basil--text">
        Family Planning
      </h1>
      <v-spacer></v-spacer>
    </v-card-title>

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
