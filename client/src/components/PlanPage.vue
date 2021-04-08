<template>
  <div>
    <NavBar />
    <h1 style = "text-align:center">View your plans</h1>
    <div id="plans">
      <b-container>
        <b-card-group deck>
          <div v-for="planNo in planNo" 
          :key="planNo.plan">

          <b-card
            :title="planNo.name"
              style="width: 20rem"
              class="mb-2"
              image-top
            >
              <b-list-group 
              flush
          
          >
                <b-list-group-item v-if="true">Housing Choice</b-list-group-item>
                <b-list-group style="margin-top: 20px" v-else >
                <b-button href = "/housing" variant = "outline-primary"> Add a Housing </b-button>
                </b-list-group>
                <b-list-group-item v-if="vehicle">VehicleChoice</b-list-group-item>
                <b-list-group style="margin-top: 20px" v-else >
                <b-button href = "/vehicle" variant = "outline-primary"> Add a Vehicle </b-button>
                </b-list-group>
                <b-list-group-item v-if="childcare">ChildcareChoice</b-list-group-item>
                <b-list-group style="margin-top: 20px" v-else >
                <b-button href = "/childcare" variant = "outline-primary"> Add a Childcare </b-button>
                </b-list-group>
              </b-list-group>

              <b-button 
              style="margin-top: 20px" 
              @click = "goPlan(planNo.plan)"
              :href=" `/plan/${selectedPlan}` " 
              variant="outline-primary"
              v-if="housing || vehicle|| childcare"
                >View Plan</b-button
              >
            </b-card>
          </div>
        </b-card-group>
      </b-container>
    </div>
  </div>
</template>

<script>
//import User from '../../../server/src/models/User'
import VueJwtDecode from "vue-jwt-decode";
import NavBar from "./NavBar.vue"
export default {
    data(){
        return{
          planNo:[
            {plan:1,
            name: "Plan 1"}, 
            {plan:2,
            name: "Plan 2"}, 
            {plan:3,
            name: "Plan 3"}],
            selectedPlan:null,
          plans: {},
          user: {},
          email: String,
          allUsers: {},
          // user: null,
          //   housing: ["hi"],
          //   vehicle: null,
          //   childcare: null
        }
    },
    components:{
    NavBar
  },
    methods: {
      getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
      //console.log(this.user.email)
    },
      async getUserPlans() {
      console.log("before get me")
      // this.email = this.user.email
      // console.log(this.email)
      this.plan = await this.$http.post('user', this.user)
      console.log(this.plan.data)
      // this.allUsers = this.$http.get('user/me')
      // console.log(this.allUsers)

      // this.user = this.allUsers.query({
      //   this.user.email : this.allUsers.email
      // })
    },
      goPlan(plan){
      this.selectedPlan = plan
    },
    
    
    },
    mounted(){
      this.getUserDetails();
      this.getUserPlans();
    }
};
</script>


v-if="user.v{planNo.plan}"