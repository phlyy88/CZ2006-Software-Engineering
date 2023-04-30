<template>
  <div class= "pageView">
    <NavBar :user="user" />

    <h1 style = "text-align:center">Start Planning</h1>
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
              <!-- show all the house listing -->
              <b-button href="/housing" variant="outline-primary"
                >View Housing Listing</b-button
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
              <!-- show all the vehicle listing -->
              <b-button 
              href="/vehicle" 
              variant="outline-primary"
                >View Vehicle Listing</b-button
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
              <!-- show all the childcare listing -->
              <b-button href="/childcare" variant="outline-primary"
                >View Childcare Listing</b-button
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

export default {
  data() {
    return {
      selectedPlan:1,
      user: {},
      HousePicURL: "https://lifestyle2.prod.content.iproperty.com/news/wp-content/uploads/sites/2/2017/08/25112917/HDB-house.jpg",
      VehiclePicURL:
        "https://cdn.motor1.com/images/mgl/MQWXX/s1/2020-honda-civic-si-coupe.jpg",
      ChildcarePicURL:
        "https://www.ourxplor.com/wp-content/uploads/2020/03/CCS-software-for-your-childcare-2.png",
    };
  },
  components:{
    NavBar
  },
  methods: {
    // get the user object from database
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },
    // log the current user out of website
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    },
  },
  mounted(){
    this.getUserDetails()
  }
};
</script>
