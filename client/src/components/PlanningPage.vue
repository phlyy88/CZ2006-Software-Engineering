<template>
    <div id="wrapper">
        <h1 style="text-align:center;">The Planning Page</h1>
        <div id="first" class='container'>
            <Header title="HDB Plan"/>
            <button type="button">
                Add HDB Plan
            </button>
        </div>
        <div id="second" class='container'>
            <Header title="Vehicle Plan"/>
            <button type="button">
                Add Vehicle Plan
            </button>
        </div>
        <div id="third" class='container'>
            <Header title="Child Plan"/>
            <button type="button">
                Add Child Plan
            </button>
        </div>
    </div>
    
</template>



<script>
//import Button from './Button.vue'
import Header from './Header'

export default {
  name: 'App',
  components: {
    Header
    //Button
  }
}
</script>

<style>
.
#wrapper {
    clear:both;
    display: flex;
    align-items: center;
    justify-content: center;
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

}
#third {
    background-image: url("https://www.nup.com.sg/PublishingImages/Children%27s%20Health/iStock-871046604_resized.jpg");
    background-repeat: no-repeat;
    background-size:500px 600px;
    width:30%;
    height: 600px;
    float:left;
    margin: 25px;
    text-align: center;
}

</style>