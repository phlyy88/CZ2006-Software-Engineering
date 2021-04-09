<template>
    <div>
        <h1 id="h1" style="text-align:center;">Your plans</h1>
        <div id="wrapper">
            <!-- @slot "Access Total Planning Cost" button -->
            <div id="first" class='container'>
                <router-link to="/total-cost">
                    <Header title="Plan 1"/>
                </router-link>
                <router-link to="/planning-page">
                    <button id="button1" type="button">
                    Edit Plan 1
                    </button>
                </router-link>
                
                <!-- @slot "Remove item from plan button -->
                <Plans @delete-plan="deletePlan" :plans="plans"/>
            </div>
            <div id="second" class='container'>
                <router-link to="/total-cost">
                    <Header title="Plan 2"/>
                </router-link>
                <router-link to="/planning-page">
                    <button id="button2" type="button">
                    Edit Plan 2
                    </button>
                </router-link>
            </div>
            <div id="third" class='container'>
                <router-link to="/total-cost">
                    <Header title="Plan 3"/>
                </router-link>
                <router-link to="/planning-page">
                    <button id="button3" type="button">
                    Edit Plan 3
                    </button>
                </router-link>
            </div>
        </div>
    </div>
    
</template>



<script>
import Header from './Header'
import Plans from './Plans'

export default {
  name: 'Favourite',
  components: {
    Header,
    Plans
  },
  data () {
      return {
        plans: [],
        housingArray: {},
        vehicleArray: {},
        childcareArray: {},
      }
  },
  methods: {
    //get housing/vehicle/childcare info from user data
    //according to plan number (planSelect)
    getPlanHousing(planSelect) {
        try {
            //check if the plan is the selected one
            if (this.$http.get('housing') == planSelect) {
                this.housingArray = this.$http.get('housing')
            }                
        } catch (err) {
            let error = err.response
            if (error.status == 409) {
                this.$swal("Error", error.data.message, "error")
            } else {
                this.$swal("Error", error.data.err.message, "error")
            }
        }
    },
    getPlanVehicle() {

    },
    getPlanChildcare() {

    },
    deletePlan(id) {
        if(confirm("Are you sure?")){
        this.plans = this.plans.filter((plan)=> {
        return plan.id!==id
        })}
    },
      
  },
async created() {
      //this.plans = await this.fetchPlans()
      this.plans = [
        {
            id:1,
            item: "5-room flat"
        },
        {
            id:2,
            item: "Mini Cooper"
        },
        {
            id:3,
            item: "3 Children"
        }
      ]
  }
}
</script>

<style>

#wrapper {
    display: flex;
    justify-content: space-around;
    align-content: stretch;
    box-sizing: content-box;
}
#first,#second,#third {
    background-size:cover;
    width:25%;
    height:600px;
    float:left;  
    margin: 25px;
    text-align: center;
    border-radius: 8px;
    border: 4px solid lightblue;
}
#first {background-image: url("https://i0.wp.com/lifefinance.com.sg/wp-content/uploads/2020/01/nguyen-thu-hoai-a15b7LYrfbk-unsplash-scaled.jpg?resize=1024%2C629&ssl=1");}
#second {background-image: url("https://static.carthrottle.com/workspace/uploads/posts/2016/01/e5da17a44b55754be3429d1d5296702c.jpg");}
#third {background-image: url("https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1951&q=80");}
#button1,#button2,#button3 {
    display: flex;
    background-color: #46d639; /* Green */
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 8px;
    border: 4px solid rgb(17, 97, 17);
}
</style>