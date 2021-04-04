<template>
    <div class="vertical-center">
        <div class="filter">
            <ejs-grid 
                ref="grid"
                height='100%'
                width='100%'
                :dataSource="vehicleArray.data" 
                :allowFiltering='true' 
                :filterSettings='filterOptions' 
                :selectionSettings='selectionOptions'
                :rowSelecting='rowSelecting'
                :rowSelected='onRowSelected'>
                <e-columns>
                    <e-column field="category" headerText="Category" textAlign="Right" filter="columnFilterOptions"></e-column>
                    <e-column field="brand" headerText="Brand" filterTemplate="customTemplate" filter="columnFilterOptions"></e-column>
                    <e-column field="name" headerText="Model" filter="columnFilterOptions"></e-column>
                    <e-column field="passenger_capacity" headerText="Capacity" filter="columnFilterOptions"></e-column>
                    <e-column field="omv" headerText="Price (SGD)" filter="columnFilterOptions"></e-column>
                </e-columns>
            </ejs-grid>
        </div>
        <div class="info-side">
            <h3>Selected:</h3>
            <b-card
                title="Vehicle"
                tag="vehicle"
                style="max-width: 20rem; width: 100%"
                class="mb-2"
            >
                <b-img v-bind:src="picURL" fluid alt="Responsive image"></b-img>
                <b-card-text>
                    Model: {{ selectedOption.name }}
                    <br>
                    Brand: {{ selectedOption.brand }}
                    <br>
                    Price: {{ selectedOption.omv }}
                </b-card-text>
                <b-button
                    v-if="picURL!=='https://wsa1.pakwheels.com/assets/default-display-image-car-638815e7606c67291ff77fd17e1dbb16.png'"
                    variant="primary">
                    Confirm Selection
                </b-button>
                <b-card-text v-if="cost!==null">
                    Cost: {{ cost }}
                </b-card-text>
            </b-card>
        </div>
    </div>
</template>

<script>
import { Filter } from '@syncfusion/ej2-vue-grids'
export default {
    props: ['this.selectedOption'],
    data() {
      return {
        picURL: "https://wsa1.pakwheels.com/assets/default-display-image-car-638815e7606c67291ff77fd17e1dbb16.png",
        vehicleArray: {},
        selectedOption: {},
        cost: null,
        filterOptions: {
            type: 'Excel'
        },
        columnFilterOptions: {
            type: 'Checkbox'
        },
        selectionOptions: {
            type: 'Single'
        }
      }
    },
    methods: {
       async getVehicleDetails() {
            try {
                this.vehicleArray = await this.$http.get('vehicle')
            } catch (err) {
                let error = err.response
                if (error.status == 409) {
                    this.$swal("Error", error.data.message, "error")
                } else {
                    this.$swal("Error", error.data.err.message, "error")
                }
            }
        },
        onRowSelected(args) {
            this.selectedOption = args.data
            this.picURL = args.data.image_url
        }
    },
    provide: {
        grid: [Filter]
    },
    mounted() {
        this.getVehicleDetails();
    }
}
</script>

<style>
@import url("https://cdn.syncfusion.com/ej2/material.css");
.e-resizable {
    resize: both;
    overflow: auto;
    padding: 10px;
    height: 500px;
}
</style>