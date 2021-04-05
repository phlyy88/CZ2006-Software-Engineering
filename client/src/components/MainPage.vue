<template>
<div>
  <h1>View your plans</h1>
  <div id="plans">
    <b-container>
    <b-card-group deck >

      <div id="Housing">
        <b-card
          title="Housing"
          img-src="http://m1.sdimgs.com/sd_static/u/201312/52ac736ba8caa.jpg"
          img-alt = Image
          tag="article"
          style="width: 20rem"
          class="mb-2"
          image-top
        >

          <b-card-text>
            No plans yet? Choose one!
          </b-card-text>

          <b-button href="/housing" variant="outline-primary" >View Listing</b-button>
        </b-card>
      </div>

      <div id="vehicle">
        <b-card
          title="Vehicle"
          img-src="https://www.topteny.com/wp-content/uploads/2015/09/Ciprian-Mihai-3.jpg"
          img-alt = Image
          tag="article"
          style="width: 20rem"
          class="mb-2"
          image-top
        >
          <b-card-text>
            No plans yet? Choose one!
          </b-card-text>

          <b-button href="/vehicle" variant="outline-primary">View Listing</b-button>
        </b-card>
      </div>

      <div id="childcare">
        <b-card
          title="Childcare"
          img-src="https://s3-ap-southeast-1.amazonaws.com/mindchamps-prod-wp/wp-content/uploads/2019/05/16224647/MindChamps-RaffelsTownclub-1045-1280x853.jpg"
          tag="article"
          style="width: 20rem"
          class="mb-2"
          image-top
        >
          <b-card-text>
            No plans yet? Choose one!
          </b-card-text>

          <b-button href="/childcare" variant="outline-primary">View Listing</b-button>
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
      user: {},
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
  created() {
    this.getUserDetails();
  },
};
</script>

<style>

</style>