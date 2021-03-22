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
    background-color:white;
    width:30%;
    height:500px;
    float:left;  
    margin: 25px;

}
#second {
    background-color: white;
    width:30%;
    height: 500px;    
    float:left;
    margin: 25px;
}
#third {
    background-color:white;
    width:30%;
    height: 500px;
    float:left;
    margin: 25px;
}
</style>