<template>
  <div>
    <NavBar />
    <h1 style = "text-align:center;">Plan {{plan}}</h1>
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
              <b-card-img v-if="this.plan == 1"
                v-bind:src="this.userGet.data.user.v1.image_url"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
              <b-card-img v-if="this.plan == 2"
                v-bind:src="this.userGet.data.user.v2.image_url"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
              <b-card-img v-if="this.plan == 3"
                v-bind:src="this.userGet.data.user.v3.image_url"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body v-if="this.plan == 1">
                <h5>{{this.userGet.data.user.v1.name}}</h5>
                <b-card-text >
                  Open Market Value: {{this.userGet.data.user.v1.cost.omv}} <br>
                  Additional Registration Fee: {{this.userGet.data.user.v1.cost.arf}} <br>
                  Excise Duty Fee: {{this.userGet.data.user.v1.cost.excise_duty}} <br> 
                  GST: {{this.userGet.data.user.v1.cost.gst}} <br>
                  Registration Fee: {{this.userGet.data.user.v1.cost.registration_fee}} <br>
                  Road Tax: {{this.userGet.data.user.v1.cost.road_tax}} <br>
                  Vehicle Emission Scheme: {{this.userGet.data.user.v1.cost.ves}} <br>
                  _______________________________________________ <br>
                  <h6>Total Cost: ${{this.userGet.data.user.v1.cost.total_cost.toFixed(2)}} <br> </h6>
                </b-card-text>
              </b-card-body>
              <b-card-body v-if="this.plan == 2">
                <h5>{{this.userGet.data.user.v2.name}}</h5>
                <b-card-text >
                  Open Market Value: {{this.userGet.data.user.v2.cost.omv}} <br>
                  Additional Registration Fee: {{this.userGet.data.user.v2.cost.arf}} <br>
                  Excise Duty Fee: {{this.userGet.data.user.v2.cost.excise_duty}} <br> 
                  GST: {{this.userGet.data.user.v2.cost.gst}} <br>
                  Registration Fee: {{this.userGet.data.user.v2.cost.registration_fee}} <br>
                  Road Tax: {{this.userGet.data.user.v2.cost.road_tax}} <br>
                  Vehicle Emission Scheme: {{this.userGet.data.user.v2.cost.ves}} <br>
                  _______________________________________________ <br>
                  <h6>Total Cost: ${{this.userGet.data.user.v2.cost.total_cost.toFixed(2)}} <br> </h6>
                </b-card-text>
              </b-card-body>
              <b-card-body v-if="this.plan == 3">
                <h5>{{this.userGet.data.user.v3.name}}</h5>
                <b-card-text >
                  Open Market Value: {{this.userGet.data.user.v3.cost.omv}} <br>
                  Additional Registration Fee: {{this.userGet.data.user.v3.cost.arf}} <br>
                  Excise Duty Fee: {{this.userGet.data.user.v3.cost.excise_duty}} <br> 
                  GST: {{this.userGet.data.user.v3.cost.gst}} <br>
                  Registration Fee: {{this.userGet.data.user.v3.cost.registration_fee}} <br>
                  Road Tax: {{this.userGet.data.user.v3.cost.road_tax}} <br>
                  Vehicle Emission Scheme: {{this.userGet.data.user.v3.cost.ves}} <br>
                  _______________________________________________ <br>
                  <h6>Total Cost: ${{this.userGet.data.user.v3.cost.total_cost.toFixed(2)}} <br> </h6>
                </b-card-text>
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
              <b-card-body v-if="this.plan == 1">
                <h5>{{this.userGet.data.user.c1.childcare_organization}}</h5>
                <b-card-text> 
                  Number of Children: {{this.userGet.data.user.c1.cost.child}} <br>
                  Monthly Cost: {{this.userGet.data.user.c1.cost.monthly_cost}} <br>
                  Registration Cost : {{this.userGet.data.user.c1.cost.registration_fee}} <br>
                  Total Annual Cost: {{this.userGet.data.user.c1.cost.total_cost}} <br>
                  _______________________________________________ <br>
                  Minus Total Grants : {{this.userGet.data.user.c1.grants_object.total_grants}} <br>
                  _______________________________________________ <br>
                  <h6>Net Cost After 1 Year: $ {{this.userGet.data.user.c1.netCost.toFixed(2)}} <br> </h6>

                  </b-card-text>
              </b-card-body>
              <b-card-body v-if="this.plan == 2">
                <h5>{{this.userGet.data.user.c2.childcare_organization}}</h5>
                <b-card-text> 
                  Number of Children: {{this.userGet.data.user.c2.cost.child}} <br>
                  Monthly Cost: {{this.userGet.data.user.c2.cost.monthly_cost}} <br>
                  Registration Cost : {{this.userGet.data.user.c2.cost.registration_fee}} <br>
                  Total Annual Cost: {{this.userGet.data.user.c2.cost.total_cost}} <br>
                  _______________________________________________ <br>
                  Minus Total Grants : {{this.userGet.data.user.c2.grants_object.total_grants}} <br>
                  _______________________________________________ <br>
                  <h6>Net Cost After 1 Year: $ {{this.userGet.data.user.c2.netCost.toFixed(2)}} <br> </h6>

                  </b-card-text>
              </b-card-body>
              <b-card-body v-if="this.plan == 3">
                <h5>{{this.userGet.data.user.c3.childcare_organization}}</h5>
                <b-card-text> 
                  Number of Children: {{this.userGet.data.user.c3.cost.child}} <br>
                  Monthly Cost: {{this.userGet.data.user.c3.cost.monthly_cost}} <br>
                  Registration Cost : {{this.userGet.data.user.c3.cost.registration_fee}} <br>
                  Total Annual Cost: {{this.userGet.data.user.c3.cost.total_cost}} <br>
                  _______________________________________________ <br>
                  Minus Total Grants : {{this.userGet.data.user.c3.grants_object.total_grants}} <br>
                  _______________________________________________ <br>
                  <h6>Net Cost After 1 Year: $ {{this.userGet.data.user.c3.netCost.toFixed(2)}} <br> </h6>

                  </b-card-text>
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
import NavBar from "./NavBar.vue"
//import calculate from "../services/systems"
export default {
  data() {
    return {
      user: {},
      totalCosts: null,
      VehiclePicURL: null,
      HousePicURL: "https://www.teoalida.com/world/9710488.jpg",
      ChildcarePicURL:
        "https://s3-ap-southeast-1.amazonaws.com/mindchamps-prod-wp/wp-content/uploads/2019/05/16224647/MindChamps-RaffelsTownclub-1045-1280x853.jpg",
      userGet: null,
      
    };
  },
  props:{
    plan: {
      type:Number
    }
  },
  created() {
            this.plan = this.$route.params.index;
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
    async getUserPlans() {
      this.userGet = await this.$http.post('user', this.user)
      console.log(this.userGet.data.user.v1)
    },
    getHousingCost(){},
    getVehicleCost(){

    },
    getChilcareCost(){},
    sumCosts() {
      this.totalCosts = 1000;
    },

  },
  mounted() {
    this.getUserDetails();
    this.getUserPlans();
  }
};
</script>