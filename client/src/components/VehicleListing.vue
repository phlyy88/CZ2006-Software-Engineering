<template>
    <div class = "container">
        <h1>Vehicle Listing</h1>
        <hr>
        <p class = "error" v-if="error">{{error}}</p>
        <div class = "vehicle-containers">
            <div class = "vehicle"
               v-for = "vehicle in vehicles" :key="vehicle._id"
               v-bind: index = "index">
            
                {{`${vehicle.createdAt.getDate()}/${vehicle.createdAt.getMonth()}/
                ${vehicle.createdAt.getFullYear()}`}}

                <p class = "vehicle_name">{{ vehicle.name }}</p>

            </div>
        </div>
    </div>
</template>

<script>
import VehicleService from './services/VehicleService'

export default {
    name: 'VehicleListingPage',
    data() {
        return {
            // return data to display vehicle name/ details
            vehicle: [],
            error: "",
            name: "",
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
            const response = await VehicleListing.displayVehicleListing({
                vehicle_name: "abd"
            })
            console.log(response.data)
        }
    }
} 
</script>