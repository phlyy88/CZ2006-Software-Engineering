<template>
    <div id = "VehiclePage" style="width:100%">
        {{$route.params.id}}
        <h1>Vehicle Listing</h1>
        <hr>
        <p class = "error" v-if="error">{{error}}</p>
        <div id = "main" class = "vehicle-containers" style="width: 65%;float:left">
            <!-- <div class = "vehicle"
               v-for = "(vehicle, index) in vehicles" 
               v-bind:item ="vehicles"
               v-bind:key="vehicle._id"
               v-bind:index = "index">
            
                {{`${vehicle.createdAt.getDate()}/${vehicle.createdAt.getMonth()}/
                ${vehicle.createdAt.getFullYear()}`}}

                <p class = "vehicle_name">{{ vehicle.name }}</p> </divS> -->

                <div id = 'vehicle_1' class='containers'>
                    <h3 style="text-align: left" >Vehicle 1</h3>
                    <div>
                        Insert Details
                    </div>
                    <a href="http://localhost:8080/vehicleListing/vehiclePage" style="align: right">
                        <span class="icon arrow">
                            <strong>View &raquo;</strong>
                        </span>
                    </a>
                    <button style="text-align: left">
                        <router-link to="/vehicleListing/vehiclePage">Go to vehicle</router-link> 
                    </button>

                </div>
                <div id = 'vehicle_2' class = 'containers'>
                    <h3 style="text-align: left">Vehicle 2</h3>
                    <div>
                        Insert Details
                    </div>
                    <button style="text-align: left">
                        <router-link to="/vehicleListing/vehiclePage">Go to vehicle</router-link> 
                    </button>
                </div>

                <div>
                    <h3 style="text-align: left">Vehicle 3</h3>
                    <div>
                        Insert Details
                    </div>
                    <a href="http://localhost:8080/vehicleListing/vehiclePage" style="display: inline-block">
                        <span class="icon arrow">
                            <strong>View &raquo;</strong>
                        </span>
                    </a>

                </div>
        </div>
        <div id="tax" style="margin-left:65%;">
            <h3>Tax Details</h3>
            <div>
                Insert Tax calculation details
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
#tax{
    background-color: white;
    overflow-y: scroll;
}

#main{
    background-color: white;
}

#vehicle_1 {
 background-color: antiquewhite;
 overflow-y: scroll;
}
</style>