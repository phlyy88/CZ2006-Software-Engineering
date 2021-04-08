<template>
  <div>
    <NavBar />
    <h1 style = "text-align:center">View your plans</h1>
    <div id="plans">
      <b-container>
        <b-card-group deck>
          <!-- <div v-for="planNo in planNo" 
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
          </div> -->
          <b-card title="Plan 1" style="width: 20rem" class="mb-2" image-top>
            <b-list-group flush>
              <b-list-group-item v-if="this.plan.data.user.h1">
                {{this.plan.data.user.h1.flat_type}} {{this.plan.data.user.h1.flat_room}} at {{this.plan.data.user.h1.town}}
                </b-list-group-item>
              <b-list-group style="margin-top: 20px" v-else >
              <b-button href = "/housing" variant = "outline-primary"> Add a Housing </b-button>
              </b-list-group>
              <b-list-group-item v-if="this.plan.data.user.v1">{{this.plan.data.user.v1.name}}</b-list-group-item>
              <b-list-group style="margin-top: 20px" v-else >
              <b-button href = "/vehicle" variant = "outline-primary"> Add a Vehicle </b-button>
              </b-list-group>
              <b-list-group-item v-if="this.plan.data.user.c1">{{this.plan.data.user.c1.childcare_organization}}</b-list-group-item>
              <b-list-group style="margin-top: 20px" v-else >
              <b-button href = "/childcare" variant = "outline-primary"> Add a Childcare </b-button>
              </b-list-group>
            </b-list-group>
            <b-button 
            style="margin-top: 20px" 
            :href=" `/plan/1` " 
            variant="outline-primary"
            v-if="this.plan.data.user.h1||this.plan.data.user.v1||this.plan.data.user.c1"
              >View Plan</b-button>
          </b-card>
          <b-card title="Plan 2" style="width: 20rem" class="mb-2" image-top>
            <b-list-group flush>
              <b-list-group-item v-if="this.plan.data.user.h2">
                {{this.plan.data.user.h2.flat_type}} {{this.plan.data.user.h2.flat_room}} at {{this.plan.data.user.h2.town}}
                </b-list-group-item>
              <b-list-group style="margin-top: 20px" v-else >
              <b-button href = "/housing" variant = "outline-primary"> Add a Housing </b-button>
              </b-list-group>
              <b-list-group-item v-if="this.plan.data.user.v2">{{this.plan.data.user.v2.name}}</b-list-group-item>
              <b-list-group style="margin-top: 20px" v-else >
              <b-button href = "/vehicle" variant = "outline-primary"> Add a Vehicle </b-button>
              </b-list-group>
              <b-list-group-item v-if="this.plan.data.user.c2">{{this.plan.data.user.c2.childcare_organization}}</b-list-group-item>
              <b-list-group style="margin-top: 20px" v-else >
              <b-button href = "/childcare" variant = "outline-primary"> Add a Childcare </b-button>
              </b-list-group>
            </b-list-group>
            <b-button 
            style="margin-top: 20px" 
            :href=" `/plan/2` " 
            variant="outline-primary"
            v-if="this.plan.data.user.h2||this.plan.data.user.v2||this.plan.data.user.c2"
              >View Plan</b-button>
          </b-card>
          <b-card title="Plan 3" style="width: 20rem" class="mb-2" image-top>
            <b-list-group flush>
              <b-list-group-item v-if="this.plan.data.user.h3">
                {{this.plan.data.user.h3.flat_type}} {{this.plan.data.user.h3.flat_room}} at {{this.plan.data.user.h3.town}}
                </b-list-group-item>
              <b-list-group style="margin-top: 20px" v-else >
              <b-button href = "/housing" variant = "outline-primary"> Add a Housing </b-button>
              </b-list-group>
              <b-list-group-item v-if="this.plan.data.user.v3">{{this.plan.data.user.v3.name}}</b-list-group-item>
              <b-list-group style="margin-top: 20px" v-else >
              <b-button href = "/vehicle" variant = "outline-primary"> Add a Vehicle </b-button>
              </b-list-group>
              <b-list-group-item v-if="this.plan.data.user.c3">{{this.plan.data.user.c3.childcare_organization}}</b-list-group-item>
              <b-list-group style="margin-top: 20px" v-else >
              <b-button href = "/childcare" variant = "outline-primary"> Add a Childcare </b-button>
              </b-list-group>
            </b-list-group>
            <b-button 
            style="margin-top: 20px" 
            :href=" `/plan/3` " 
            variant="outline-primary"
            v-if="this.plan.data.user.h3||this.plan.data.user.v3||this.plan.data.user.c3"
              >View Plan</b-button>
          </b-card>
          
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
          // planNo:[
          //   {plan:1,
          //   name: "Plan 1"}, 
          //   {plan:2,
          //   name: "Plan 2"}, 
          //   {plan:3,
          //   name: "Plan 3"}],
            selectedPlan:null,
          plans: {},
          user: {},
          email: String,
          // user: null,
          //   housing: ["hi"],
          //   vehicle: null,
          //   childcare: null,
          plan:null
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
    },
      async getUserPlans() {
      this.plan = await this.$http.post('user', this.user)
      console.log(this.plan.data.user)
      console.log(this.plan.data.user.h1.street_name)
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