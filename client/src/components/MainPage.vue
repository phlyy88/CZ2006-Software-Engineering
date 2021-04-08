<template>
  <div>
    <NavBar />
    <div>
        <b-dropdown id="dropdown-1" text="Select Plans" class="m-md-2" variant="outline-primary">
          <b-dropdown-item 
          v-for="plan in plan" 
          :key="plan.plan"
          @click="selectedPlan => doPlan(plan.plan)"
           >Plan {{plan.plan}}</b-dropdown-item>
        </b-dropdown>
      </div>

    <h1 style = "text-align:center">Start doing Plan {{selectedPlan}}</h1>
    <div id="plans">
      <b-container>
        <b-card-group deck>
          <div id="Housing">
            <b-card
              title="Housing"
              v-bind:img-src="HousePicURL"
              img-alt="Image"
              tag="article"
              style="width: 20rem"
              class="mb-2"
              image-top
            >
              <b-card-text>
                Choose a housing!
              </b-card-text>

              <b-button href="/housing" variant="outline-primary"
                >View Listing</b-button
              >
            </b-card>
          </div>

          <div id="vehicle">
            <b-card
              title="Vehicle"
              v-bind:img-src="VehiclePicURL"
              img-alt="Image"
              tag="article"
              style="width: 20rem"
              class="mb-2"
              image-top
            >
              <b-card-text>
                Choose a vehicle!
              </b-card-text>

              <b-button 
              href="/vehicle" 
              variant="outline-primary"
                >View Listing</b-button
              >
            </b-card>
          </div>

          <div id="childcare">
            <b-card
              title="Childcare"
              v-bind:img-src="ChildcarePicURL"
              style="width: 20rem"
              class="mb-2"
              image-top
            >
              <b-card-text>
                Choose a childcare!
              </b-card-text>

              <b-button href="/childcare" variant="outline-primary"
                >View Listing</b-button
              >
            </b-card>
          </div>
        </b-card-group>
      </b-container>
    </div>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import NavBar from "./NavBar.vue"
//import PlanPage from "./PlanPage.vue";

export default {
  data() {
    return {
      plan: [
        {plan: 1}, 
        {plan: 2}, 
        {plan: 3}],
      selectedPlan:1,
      user: {},
      HousePicURL: "http://m1.sdimgs.com/sd_static/u/201312/52ac736ba8caa.jpg",
      VehiclePicURL:
        "https://www.topteny.com/wp-content/uploads/2015/09/Ciprian-Mihai-3.jpg",
      ChildcarePicURL:
        "https://s3-ap-southeast-1.amazonaws.com/mindchamps-prod-wp/wp-content/uploads/2019/05/16224647/MindChamps-RaffelsTownclub-1045-1280x853.jpg",
      //populatePlansCheck: false,     
    };
  },
  components:{
    NavBar
  },
  methods: {
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    },
    doPlan(plan){
      this.selectedPlan = plan
    },
    // populatePlans(populatePlansCheck) {
    //   if (!populatePlansCheck) {
    //     console.log("Before populate")
    //     this.$http.put('user/update', this.user)
    //     populatePlansCheck = true
    //     console.log("Plans are populated with null")}
    //     else {console.log("Plan not populated")}
    // }
  },
  mounted() {
    //this.populatePlans();
  }
};
</script>
