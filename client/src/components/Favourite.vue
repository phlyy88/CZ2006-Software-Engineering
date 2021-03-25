<template>
    <div>
        <h1 id="h1" style="text-align:center;">Your plans</h1>
        <div id="wrapper">
            <!-- @slot "Access Total Planning Cost" button -->
            <div id="first" class='container'>
                <router-link to="/total-cost">
                    <Header title="Plan 1"/>
                </router-link>
                <button id="button1" type="button">
                    Edit Plan 1
                </button>
                <!-- @slot "Remove item from plan button -->
                <Plans @delete-plan="deletePlan" :plans="plans"/>
            </div>
            <div id="second" class='container'>
                <Header title="Plan 2"/>
                <button id="button2" type="button">
                    Edit Plan 2
                </button>
            </div>
            <div id="third" class='container'>
                <Header title="Plan 3"/>
                <button id="button3" type="button">
                    Edit Plan 3
                </button>
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
          plans: []
      }
  },
  methods: {
      
      deletePlan(id) {
          if(confirm("Are you sure?")){
          this.plans = this.plans.filter((plan)=> {
            return plan.id!==id
          })}
      },
      async fetchPlans() {
         try {
             this.$router.push
         } catch (error) {
             console.log(error.response);
         }
      },
      async fetchPlan() {
          const res = await fetch() 
          //fetch from mongodb, add /${id}

          const data = await res.json()

          return data
      }
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
#first {
    background-image: url("https://i0.wp.com/lifefinance.com.sg/wp-content/uploads/2020/01/nguyen-thu-hoai-a15b7LYrfbk-unsplash-scaled.jpg?resize=1024%2C629&ssl=1");
    background-repeat: no-repeat;
    background-size:500px 600px;
    width:30%;
    height:600px;
    float:left;  
    margin: 25px;
    text-align: center;
    border-radius: 8px;
    border: 4px solid lightblue;
}
#second {
    background-image: url("https://static.carthrottle.com/workspace/uploads/posts/2016/01/e5da17a44b55754be3429d1d5296702c.jpg");
    background-repeat: no-repeat;
    background-size:500px 600px;
    width:30%;
    height: 600px;    
    float:left;
    margin: 25px;
    text-align: center;
    border-radius: 8px;
    border: 4px solid lightblue;

}
#third {
    background-image: url("https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1951&q=80");
    background-size:500px 600px;
    background-position: -275px; 
    background-size: cover;
    width:30%;
    height: 600px;
    float:left;
    margin: 25px;
    text-align: center;
    border-radius: 8px;
    border: 4px solid lightblue;
}
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