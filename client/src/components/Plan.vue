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
              
              <b-card-body v-if="this.plan == 1 && this.userGet.data.user.h1">
                <h5>{{this.userGet.data.user.h1.flat_type}} {{this.userGet.data.user.h1.flat_room}} at {{this.userGet.data.user.h1.town}}</h5>
                <b-card-text >
                  Base Price: {{this.userGet.data.user.h1.cost.price}} <br>
                  Option Fee: {{this.userGet.data.user.h1.cost.option_fee}} <br>
                  Caveat Registration Fee: {{this.userGet.data.user.h1.cost.caveat_registration}} <br>
                  Home Insurance Premium: {{this.userGet.data.user.h1.cost.home_insurance_premium}} <br>
                  Stamp Duty: {{this.userGet.data.user.h1.cost.stamp_duty}} <br>
                  Conveyance Fee: {{this.userGet.data.user.h1.cost.conveyancefee}} <br>
                  _______________________________________________ <br>
                  <h6>Total Cost: ${{this.userGet.data.user.h1.cost.total_cost.toFixed(2)}} <br> </h6>
                </b-card-text>
              </b-card-body>

              <b-card-body v-if="this.plan == 2 && this.userGet.data.user.h2">
                <h5>{{this.userGet.data.user.h2.flat_type}} {{this.userGet.data.user.h2.flat_room}} at {{this.userGet.data.user.h2.town}}</h5>
                <b-card-text >
                  Base Price: {{this.userGet.data.user.h2.cost.price}} <br>
                  Option Fee: {{this.userGet.data.user.h2.cost.option_fee}} <br>
                  Caveat Registration Fee: {{this.userGet.data.user.h2.cost.caveat_registration}} <br>
                  Home Insurance Premium: {{this.userGet.data.user.h2.cost.home_insurance_premium}} <br>
                  Stamp Duty: {{this.userGet.data.user.h2.cost.stamp_duty}} <br>
                  Conveyance Fee: {{this.userGet.data.user.h2.cost.conveyancefee}} <br>
                  _______________________________________________ <br>
                  <h6>Total Cost: ${{this.userGet.data.user.h2.cost.total_cost.toFixed(2)}} <br> </h6>
                </b-card-text>
              </b-card-body>
              
              <b-card-body v-if="this.plan == 3 && this.userGet.data.user.h3">
                <h5>{{this.userGet.data.user.h3.flat_type}} {{this.userGet.data.user.h3.flat_room}} at {{this.userGet.data.user.h3.town}}</h5>
                <b-card-text >
                  Base Price: {{this.userGet.data.user.h3.cost.price}} <br>
                  Option Fee: {{this.userGet.data.user.h3.cost.option_fee}} <br>
                  Caveat Registration Fee: {{this.userGet.data.user.h3.cost.caveat_registration}} <br>
                  Home Insurance Premium: {{this.userGet.data.user.h3.cost.home_insurance_premium}} <br>
                  Stamp Duty: {{this.userGet.data.user.h3.cost.stamp_duty}} <br>
                  Conveyance Fee: {{this.userGet.data.user.h3.cost.conveyancefee}} <br>
                  _______________________________________________ <br>
                  <h6>Total Cost: ${{this.userGet.data.user.h3.cost.total_cost.toFixed(2)}} <br> </h6>
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
              <b-card-img v-if="this.plan == 1 && this.userGet.data.user.v1"
                v-bind:src="this.userGet.data.user.v1.image_url"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
              <b-card-img v-else-if="this.plan == 2 && this.userGet.data.user.v2"
                v-bind:src="this.userGet.data.user.v2.image_url"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
              <b-card-img v-else-if="this.plan == 3 && this.userGet.data.user.v3"
                v-bind:src="this.userGet.data.user.v3.image_url"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
              <!-- <b-card-img v-else  src="https://www.shareicon.net/data/128x128/2015/10/21/659397_car_512x512.png"></b-card-img> -->
            </b-col>
            <b-col md="6">
              <b-card-body v-if="this.plan == 1 && this.userGet.data.user.v1">
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
              
              <b-card-body v-else-if="this.plan == 2 && this.userGet.data.user.v2">
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
              
              <b-card-body v-else-if="this.plan == 3 && this.userGet.data.user.v3">
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
              <b-card-body v-else> Add new vehicle </b-card-body>
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
              <b-card-body v-if="this.plan == 1 && this.userGet.data.user.c1">
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
              <b-card-body v-if="this.plan == 2 && this.userGet.data.user.c2">
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
              <b-card-body v-if="this.plan == 3 && this.userGet.data.user.c3">
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
            header-tag="header">
            <h4>Total cost for plan {{this.plan}}: ${{this.totalCosts}}</h4>
            <h4 v-if="this.displayMonthlySaving">You should save ${{this.monthlySavings}} monthly!</h4>
            <b-button @click="sumCosts()" variant="primary">Calculate</b-button>
            
              <b-dropdown v-if="displaySavingBtn" text="Select number of years to save" >
              <b-dropdown-item v-for="year in year" :key="year"
              @click="calculateSaving(year)">
                {{year.year}} years</b-dropdown-item>
              </b-dropdown>

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
      HousePicURL: "http://www.gov.sg/-/media/gov/faqs/housing/eip.jpg",
      ChildcarePicURL:
        "https://www.expatica.com/app/uploads/sites/6/2014/05/german-preschool-1920x1080.jpg",
      userGet: null,
      year: [
        {year: 1}, 
        {year: 2}, 
        {year: 3},
        {year: 4}, 
        {year: 5}, 
        {year: 6},
        {year: 7}, 
        {year: 8}, 
        {year: 9},
        {year: 10}
        ],
      monthlySavings: 1,
      displaySavingBtn: false,
      displayMonthlySaving: false
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
    sumCosts() {
      if (this.plan == 1) {this.totalCosts = this.userGet.data.user.h1.cost.total_cost
      + this.userGet.data.user.v1.cost.total_cost
      + this.userGet.data.user.c1.netCost
      }
      if (this.plan == 2) {this.totalCosts = this.userGet.data.user.h2.cost.total_cost 
      + this.userGet.data.user.v2.cost.total_cost
      + this.userGet.data.user.c2.netCost
      }
      if (this.plan == 3) {this.totalCosts = this.userGet.data.user.h3.cost.total_cost 
      + this.userGet.data.user.v3.cost.total_cost
      + this.userGet.data.user.c3.netCost
      } 
      this.displaySavingBtn = true
    },
    calculateSaving(year) {
     this.monthlySavings = this.totalCosts / 12 / year.year
     this.displayMonthlySaving = true
    }

  },
  mounted() {
    this.getUserDetails();
    this.getUserPlans();
  }
};
</script>