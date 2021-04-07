/** This boundary @class implements the 
cost breakdown button showing the cost, 
taxes and grants for different items of
the same plan

@author hao zhi  */
/** @class */
<template>
    <div>
        <h1 style="text-align:center;">Total Planning Cost Breakdown</h1>  
        <div id="plans" class='container'>
            <div id="first" class='container'>
                <div class='text'>HDB</div>
                <table>{housingArray}</table>
            </div>
            <div id="second" class='container'>
                <div class='text'>Vehicle</div>
                <table>{vehicleArray}</table>
            </div>
            <div id="third" class='container'>
                <div class='text'>Children</div>
                <table>{childcareArray}</table>
            </div>
            <div id="costCalculator" class="container">
                <div class="select-plan">
                    Select Plan Number:
                    <select id="planSelect">
                        <option value=1>1</option>
                        <option value=2>2</option>
                        <option value=3>3</option>
                    </select>
                </div>
                <br>
                <h1 id="showCost">Show total cost here</h1>
                <!-- @slot select number of years of saving button -->
                <div class="custom-select">
                    Calculate Monthly Saving Plan
                    <select id="scrollSelect">
                        <option value="0">Select number of years:</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">7</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                </div> 
                <br>
                <br>
                <br>
                <router-link to="/favourite">
                    <h4>Back to Favourite page</h4>
                </router-link> 
            </div>                                                                        
        </div>
    </div>
    
</template>


<script>
import getUserDetails from './MainPage'
import User from '../../../server/src/models/User'

    export default {
        name: 'TotalCost',
        components: {
            // User,
        },
        data() {
            return {
                user: User,
                scrollSelect: 'int',
                // housingArray: {},
                // vehicleArray: {},
                // childcareArray: {},
                // DisplayVehicleTax: 'int',
                // DisplayHousingGrant: 'int',
                // DisplayChildcareGrant: 'int',
            }
        },
        methods: {
            getVehicleTax() {

            },
            getHousingGrant() {

            },
            getChildcareGrant() {

            },
            getTotalCost() {
                this.getVehicleTax()
                this.getHousingGrant()
                this.getChildcareGrant()
            },
            getMonthlySavings() {
                return this.getTotalCost() / (this.scrollSelect*12)
            }
        },
        mounted() {
            getUserDetails();
            this.getVehicleTax();
            this.getHousingGrant();
            this.getChildcareGrant();
            this.getTotalCost();
            this.getMonthlySavings();
        }
    }
</script>

<style>
#plans {
    display: flex;
    justify-content: space-evenly;
    align-content: stretch;
    box-sizing: content-box;
    max-width: 1000vh;
}
#first, #second, #third {
    background-repeat: no-repeat;
    background-size:500px 600px;
    height:600px;
    float:left;  
    margin: 25px;
    text-align: center;
    border-radius: 8px;
    border: 4px solid lightblue;
    padding: 20px;
}
#first {background-image: url("https://i0.wp.com/lifefinance.com.sg/wp-content/uploads/2020/01/nguyen-thu-hoai-a15b7LYrfbk-unsplash-scaled.jpg?resize=1024%2C629&ssl=1");}
#second {background-image: url("https://static.carthrottle.com/workspace/uploads/posts/2016/01/e5da17a44b55754be3429d1d5296702c.jpg");}
#third {background-image: url("https://www.nup.com.sg/PublishingImages/Children%27s%20Health/iStock-871046604_resized.jpg");}
.text {
    background-color: darkseagreen;
    border: 4px solid darkgreen;
    border-radius: 10px;
    width: 15vh;
    margin: auto;
    font-size: 3vh;
}
#button1:hover,#button2:hover,#button3:hover {opacity: 0.8}
#costCalculator {
    padding: 25px;
}
#showCost {
    background-color: rgb(5, 201, 201);
    border: 4px solid rgb(0, 80, 100);
    font-size: 100%;
    border-radius: 5px;
    text-align: center;
    height: 15vh;
    width: 33vh;
}
.custom-select {
  font-family: Arial;
  background-color: rgb(6, 175, 6);
  border: 4px solid rgb(2, 112, 2);
  width:33vh; 
  height:10vh;
}
.select-selected {
  background-color: DodgerBlue;
}

/* Style the arrow inside the select element: */
.select-selected:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
}

/* Point the arrow upwards when the select box is open (active): */
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
}

/* style the items (options), including the selected item: */
.select-items div,.select-selected {
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
}
.select-items {
  position: absolute;
  background-color: DodgerBlue;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
}
.select-items div:hover, .same-as-selected {
  background-color: rgba(0, 0, 0, 0.1);
}
select {
    background-color: rgb(121, 219, 121);
    border: 4px solid rgb(36, 117, 29);
}

</style>