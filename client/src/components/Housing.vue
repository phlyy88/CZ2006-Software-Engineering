<template>
    <div class="vertical-center">
        <div id="filter-container" class="e-resizable">
            <ejs-grid 
                ref="grid"
                :dataSource="housingArray.data" 
                :allowFiltering='true' 
                :filterSettings='filterOptions' 
                :selectionSettings='selectionOptions'
                :rowSelecting='rowSelecting'
                :rowSelected='onRowSelected'>
                <e-columns>
                    <e-column field="location" headerText="Location" textAlign="Right" filter="columnFilterOptions"></e-column>
                    <!-- <e-column field="level" headerText="Level" filterTemplate="customTemplate" filter="columnFilterOptions"></e-column> -->
                    <e-column field="district" headerText="District" filter="columnFilterOptions"></e-column>
                    <e-column field="flat_name" headerText="Flat name" filter="columnFilterOptions"></e-column>
                    <e-column field="expected_year_of_completion" headerText="Expected completion" filter="columnFilterOptions"></e-column>
                    <e-column field="room_types" headerText="Room type" filter="columnFilterOptions"></e-column>
                    <e-column field="2 room price" headerText="2-Room price" filter="columnFilterOptions"></e-column>
                    <e-column field="4 room price" headerText="4-Room price" filter="columnFilterOptions"></e-column>
                    <e-column field="room_types" headerText="Room type" filter="columnFilterOptions"></e-column>

                </e-columns>
            </ejs-grid>
        </div>
                <div class="info-side">
            <h3>Selected:</h3>
            <b-card
                title="Housing"
                tag="Housing"
                style="max-width: 20rem; width: 100%"
                class="mb-2"
            >
                <b-img v-bind:src="picURL" fluid alt="Responsive image"></b-img>
                <b-card-text>
                    Name: {{ selectedOption.flat_name }}
                    <br>
                    2-Room Price: {{ selectedOption.two_room_flexi_39_to_40sqm_price_before_grants }}
                    <br>
                    4-Room Price: {{ selectedOption.four_room_price_before_grants }}                    
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
import Vue from "vue"
import { Filter } from '@syncfusion/ej2-vue-grids'
  export default {
      props: ['this.selectedOption'],
    data() {
      return {
        housingArray: {},
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
        Template: function() {
            return { template: Vue.component('housingTemplate', {
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
       async getHousingDetails() {
            try {
                this.housingArray = await this.$http.get('housing')
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
            this.picURL = args.data.image_url}
    },
    provide: {
        grid: [Filter]
    },
    mounted() {
        this.getHousingDetails();
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