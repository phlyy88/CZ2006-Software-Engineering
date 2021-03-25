<template>
    <div id = "VehicleLisitingPage" class = "container">
        <h1>Vehicle Listing</h1>
        <hr>
        <p class = "error" v-if="error">{{error}}</p>
        <div id = "main" class = "vehicle-containers">
            <!-- <div class = "vehicle"
               v-for = "(vehicle, index) in vehicles" 
               v-bind:item ="vehicles"
               v-bind:key="vehicle._id"
               v-bind:index = "index">
            
                {{`${vehicle.createdAt.getDate()}/${vehicle.createdAt.getMonth()}/
                ${vehicle.createdAt.getFullYear()}`}}
                <p class = "vehicle_name">{{ vehicle.name }}</p> -->

                <div id = 'vehicle_1' class='containers'>
                    <h3>Vehicle 1</h3>
                    <div class = 'container'>
                        Insert Details
                    </div>
                    <button>
                        Go to vehicle
                    </button>

                </div>
                <div id = 'vehicle_2' class = 'containers'>
                    <h3>Vehicle 2</h3>
                    <div class = 'container'>
                        Install Details
                    </div>
                    <button>
                        Go to vehicle
                    </button>
                </div>
            
            <div>

            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:'VehicleListingPage',
    props: ['vehicle_name']
}
/* import VehicleService from '../services/VehicleService'
export default {
    name: 'VehicleListingPage',
    data() {
        return {
            // return data to display vehicle name/ details
            vehicle: [], 
            err:"", 
            text:""
        }
    },
    async created(){
        try {
            this.vehicle = await VehicleService.addVehicle()
        } catch (error) {
            this.error = error.message
        }
    },
    watch: {
        // Show change when section is clicked
    },
    methods:{
        async displayVehicleListing(){
            const response = VehicleService.displayVehicleListing({
                vehicle_name: "abd"
            })
            console.log(response.data)
        }
    }
}    */
</script>

<style>
#main{
    background-color: white;
}
#vehicle_1 {
 background-color: antiquewhite;
}
</style>