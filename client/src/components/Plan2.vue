<template>
  <div>
      <h1 style = "text-align:center;">Plan 2</h1>
    <b-container>
      <div>
        <b-card no-body class="overflow-hidden">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img
                v-bind:src="HousingPicURL"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Housing">
                <b-card-text> Include Housing calculation </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>

      <div style="margin-top: 20px">
        <b-card no-body class="overflow-hidden">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img
                v-bind:src="VehiclePicURL"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Vehicle">
                <b-card-text> Include Vehicle calculation </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>

      <div style="margin-top: 20px">
        <b-card no-body class="overflow-hidden">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img
                v-bind:src="ChildcarePicURL"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Childcare">
                <b-card-text> Include Childcare calculation </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>

      <div style="margin-top: 20px">
        <b-card-group deck>
          <b-card
            header="Calculating cost for your plan"
            header-tag="header"
            title="Total Cost"
          >
            <b-card-text>{{ totalCosts }}</b-card-text>
            <b-button @click="sumCosts" variant="primary">Calculate</b-button>
          </b-card>
        </b-card-group>
      </div>
    </b-container>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
export default {
  data() {
    return {
      user: {},
      totalCosts: null,
      HousePicURL: null,
      VehiclePicURL: null,
      ChildcarePicURL:
        "https://s3-ap-southeast-1.amazonaws.com/mindchamps-prod-wp/wp-content/uploads/2019/05/16224647/MindChamps-RaffelsTownclub-1045-1280x853.jpg",
    };
  },
  methods: {
    getPlanDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
      //Get user Plan1 
    },
    getHousingCost(){},
    getVehicleCost(){},
    getChilcareCost(){},
    sumCosts() {
      this.totalCosts = 1000;
    },
  },
};
</script>