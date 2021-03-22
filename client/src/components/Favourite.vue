<template>
    <div id="wrapper">
        <h1 style="text-align:center;">Your plans</h1>
        <div id="first" class='container'>
            <Header title="Plan 1"/>
            <button id="button1" type="button">
                Edit Plan 1
            </button>
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
          })
          }
      }
  },
  created() {
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
    clear:both;
    display: flex;
    align-items: center;
    justify-content: center;
    
}
#first {
    background-image: url("https://i0.wp.com/lifefinance.com.sg/wp-content/uploads/2020/01/nguyen-thu-hoai-a15b7LYrfbk-unsplash-scaled.jpg?resize=1024%2C629&ssl=1");
    background-repeat: no-repeat;
    background-size:350px 500px;
    width:30%;
    height:500px;
    float:left;  
    margin: 25px;
    text-align: center;
}
#second {
    background-image: url("https://static.carthrottle.com/workspace/uploads/posts/2016/01/e5da17a44b55754be3429d1d5296702c.jpg");
    background-repeat: no-repeat;
    background-size:350px 500px;
    width:30%;
    height: 500px;    
    float:left;
    margin: 25px;
    text-align: center;

}
#third {
    background-image: url("https://www.nup.com.sg/PublishingImages/Children%27s%20Health/iStock-871046604_resized.jpg");
    background-repeat: no-repeat;
    background-size:350px 500px;
    width:30%;
    height: 500px;
    float:left;
    margin: 25px;
    text-align: center;
}
#button1,#button2,#button3 {
    background-color: rgb(73, 156, 73);
    display: flex;
    margin: 15px 32px;
    }
</style>