<template>
    <div class="vertical-center">
        <div id="filter-container" class="e-resizable">
            <ejs-grid 
                ref="grid"
                :dataSource="vehicleArray.data" 
                :allowFiltering='true' 
                :filterSettings='filterOptions' 
                :selectionSettings='selectionOptions'
                :rowSelecting='rowSelecting'>
                <e-columns>
                    <e-column field="category" headerText="Category" textAlign="Right" filter="columnFilterOptions"></e-column>
                    <e-column headerText="Image" textAlign='Center' :template='cTemplate'></e-column>
                    <e-column field="brand" headerText="Brand" filterTemplate="customTemplate" filter="columnFilterOptions"></e-column>
                    <e-column field="name" headerText="Model" filter="columnFilterOptions"></e-column>
                    <e-column field="passenger_capacity" headerText="Capacity" filter="columnFilterOptions"></e-column>
                    <e-column field="omv" headerText="Price (SGD)" filter="columnFilterOptions"></e-column>
                </e-columns>
            </ejs-grid>
        </div>
    </div>
</template>

<script>
import Vue from "vue"
import { Filter } from '@syncfusion/ej2-vue-grids'
  export default {
    data() {
      return {
        vehicleArray: {},
        selectedOption: {},
        filterOptions: {
            type: 'Excel'
        },
        columnFilterOptions: {
            type: 'Checkbox'
        },
        selectionOptions: {
            type: 'Single'
        },
        cTemplate: function() {
            return { template: Vue.component('vehicleTemplate', {
                template: '<div class="image"><img src="image"/></div>',
                data: function() {
                    return {
                        data: {}
                    }
                },
                computed: {
                    image: function() {
                        return this.data.image_url //change filepaths to relative file path within folder
                    }
                }
            })}
        },
        pageSettings: { pageSize: 10 }
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