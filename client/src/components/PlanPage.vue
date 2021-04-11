<template>
  <div class = "pageView">
    <NavBar :user="user" />
    <h1 style = "text-align:center">View your plans</h1>
    <div id="plans">
      <b-container>
        <b-card-group deck>
          <b-card title="Plan 1" style="width: 20rem" class="mb-2" image-top>
            <b-list-group flush>
              <b-list-group-item v-if="this.plan.data.user.h1">
                {{this.plan.data.user.h1.flat_type}} {{this.plan.data.user.h1.flat_room}} at {{this.plan.data.user.h1.town}}
                </b-list-group-item>
              <b-list-group style="margin-top: 20px" v-else >
                <!-- direct the user to housing page -->
              <b-button
                @click="selectThisPlan(1, '/housing')"
                variant = "outline-primary"
                > 
                Add a Housing </b-button>
              </b-list-group>
              <b-list-group-item v-if="this.plan.data.user.v1">{{this.plan.data.user.v1.name}}</b-list-group-item>
              <b-list-group style="margin-top: 20px" v-else >
              <!-- direct the user to vehicle page -->
              <b-button @click="selectThisPlan(1, '/vehicle')" variant = "outline-primary"> Add a Vehicle </b-button>
              </b-list-group>
              <b-list-group-item v-if="this.plan.data.user.c1">{{this.plan.data.user.c1.childcare_organization}}</b-list-group-item>
              <b-list-group style="margin-top: 20px" v-else >
              <!-- direct the user to childcare page -->
              <b-button @click="selectThisPlan(1, '/childcare')" variant = "outline-primary"> Add a Childcare </b-button>
              </b-list-group>
            </b-list-group>
            <!-- lets the user view the plan that they choose-->
            <b-button 
            style="margin-top: 20px" 
            :href=" `/plan/1` " 
            variant="outline-primary"
            v-if="this.plan.data.user.h1||this.plan.data.user.v1||this.plan.data.user.c1"
              >View Plan 1</b-button>
          </b-card>
          <b-card title="Plan 2" style="width: 20rem" class="mb-2" image-top>
            <b-list-group flush>
              <b-list-group-item v-if="this.plan.data.user.h2">
                {{this.plan.data.user.h2.flat_type}} {{this.plan.data.user.h2.flat_room}} at {{this.plan.data.user.h2.town}}
                </b-list-group-item>
              <b-list-group style="margin-top: 20px" v-else >
                <!-- direct the user to housing page -->
              <b-button @click="selectThisPlan(2, '/housing')" variant = "outline-primary"> Add a Housing </b-button>
              </b-list-group>
              <b-list-group-item v-if="this.plan.data.user.v2">{{this.plan.data.user.v2.name}}</b-list-group-item>
              <b-list-group style="margin-top: 20px" v-else >
                <!-- direct the user to vehicle page -->
              <b-button @click="selectThisPlan(2, '/vehicle')" variant = "outline-primary"> Add a Vehicle </b-button>
              </b-list-group>
              <b-list-group-item v-if="this.plan.data.user.c2">{{this.plan.data.user.c2.childcare_organization}}</b-list-group-item>
              <b-list-group style="margin-top: 20px" v-else >
                <!-- direct the user to childcare page -->
              <b-button @click="selectThisPlan(2, '/childcare')" variant = "outline-primary"> Add a Childcare </b-button>
              </b-list-group>
            </b-list-group>
            <b-button 
            style="margin-top: 20px" 
            :href=" `/plan/2` " 
            variant="outline-primary"
            v-if="this.plan.data.user.h2||this.plan.data.user.v2||this.plan.data.user.c2"
              >View Plan 2</b-button>
          </b-card>
          <b-card title="Plan 3" style="width: 20rem" class="mb-2" image-top>
            <b-list-group flush>
              <b-list-group-item v-if="this.plan.data.user.h3">
                {{this.plan.data.user.h3.flat_type}} {{this.plan.data.user.h3.flat_room}} at {{this.plan.data.user.h3.town}}
                </b-list-group-item>
              <b-list-group style="margin-top: 20px" v-else >
              <b-button
                @click="selectThisPlan(3, '/housing')"
                variant = "outline-primary"
                > 
                Add a Housing </b-button>
              </b-list-group>
              <b-list-group-item v-if="this.plan.data.user.v3">{{this.plan.data.user.v3.name}}</b-list-group-item>
              <b-list-group style="margin-top: 20px" v-else >
              <b-button @click="selectThisPlan(3, '/vehicle')" variant = "outline-primary"> Add a Vehicle </b-button>
              </b-list-group>
              <b-list-group-item v-if="this.plan.data.user.c3">{{this.plan.data.user.c3.childcare_organization}}</b-list-group-item>
              <b-list-group style="margin-top: 20px" v-else >
              <b-button @click="selectThisPlan(3, '/childcare')" variant = "outline-primary"> Add a Childcare </b-button>
              </b-list-group>
            </b-list-group>
            <b-button 
            style="margin-top: 20px" 
            :href=" `/plan/3` " 
            variant="outline-primary"
            v-if="this.plan.data.user.h3||this.plan.data.user.v3||this.plan.data.user.c3"
              >View Plan 3</b-button>
          </b-card>   
        </b-card-group>
        </b-container>
    </div>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import NavBar from "./NavBar.vue"
export default {
    data(){
        return{
          plans: {},
          user: {},
          email: String,
          plan:null
        }
    },
    components:{
    NavBar
  },
    methods: {
      // get the user object from user database
      getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
      },
      // get the user plan details from user database
      async getUserPlans() {
      this.plan = await this.$http.post('user', this.user)
      console.log(this.plan.data.user)
      console.log(this.plan.data.user.h1.street_name)
      },
      // use the plan that the user select
      // @params plaNumber, route
      selectThisPlan(planNumber, route) {
        this.$store.state.user.previousPlan = planNumber
        this.$router.push(route)
      }
    },
    mounted(){
      this.getUserDetails();
      this.getUserPlans();
    }
};
</script>