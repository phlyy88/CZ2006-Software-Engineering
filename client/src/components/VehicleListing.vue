<template>
    <div>
        <h1>Vehicle Listing</h1>
        <section key = "vehicle 1">
            {{vehicle_name}}
        </section>
    </div>
</template>

<script>
import VehicleListing from '@/services/VehicleListing'

export default {
    data() {
        return {
            // return data to display vehicle name/ details
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