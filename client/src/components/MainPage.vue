<template>
  <div>
    <h1>View your plans</h1>
    <div id="plans">
      <div>
        <b-dropdown id="dropdown-1" text="Select Plans" class="m-md-2" variant="outline-primary">
          <b-dropdown-item href="/plan/1">Plan 1</b-dropdown-item>
          <b-dropdown-item href="/plan/2">Plan 2</b-dropdown-item>
          <b-dropdown-item href="/plan/3">Plan 2</b-dropdown-item>
        </b-dropdown>
      </div>
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
                Include chosen Housing No plans yet? Choose one!
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
                Include Chosen Vehicle
                <br />
                No plans yet? Choose one!
              </b-card-text>

              <b-button href="/vehicle" variant="outline-primary"
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
                Include Chosen Childcare
                <br />
                No plans yet? Choose one!
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
export default {
  data() {
    return {
      plans: [1, 2, 3],
      user: {},
      HousePicURL: "http://m1.sdimgs.com/sd_static/u/201312/52ac736ba8caa.jpg",
      VehiclePicURL:
        "https://www.topteny.com/wp-content/uploads/2015/09/Ciprian-Mihai-3.jpg",
      ChildcarePicURL:
        "https://s3-ap-southeast-1.amazonaws.com/mindchamps-prod-wp/wp-content/uploads/2019/05/16224647/MindChamps-RaffelsTownclub-1045-1280x853.jpg",
    };
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
  },
};
</script>

<style>
</style>