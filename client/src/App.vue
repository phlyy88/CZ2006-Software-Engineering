<template>
  <v-card>
    <v-card-title class="vertical center py-6">
      <h1 class="font-weight-bold display-3 basil--text">
        Family Planning
      </h1>
      <!-- <div>
        <b-dropdown id="select-plan" text="Select Plans" class="m-md-2" variant="outline-primary">
          <b-dropdown-item 
          v-for="plan in plan" 
          :key="plan.plan"
          @click="selectedPlan => doPlan(plan.plan)"
            >Plan {{plan.plan}}</b-dropdown-item>
        </b-dropdown>
      </div> -->
      <v-spacer></v-spacer>
    </v-card-title>

    <router-view></router-view>
    <notifications group='foo'/>

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
      // plan: [
      //   {plan: 1}, 
      //   {plan: 2}, 
      //   {plan: 3}],
      // selectedPlan:1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
  },
  // methods: {
  //   doPlan(plan){
  //     this.selectedPlan = plan
  //   }
  // }
}
</script>

<style>
/* #select-plan {
  padding: 10%;
} */
</style>
