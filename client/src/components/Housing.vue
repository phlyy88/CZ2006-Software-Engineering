<template>
    <div class="vertical-center">
        <div id="filter-container" class="e-resizable">
            <ejs-grid 
                ref="grid"
                :dataSource="housingArray.data" 
                :allowFiltering='true' 
                :filterSettings='filterOptions' 
                :selectionSettings='selectionOptions'
                :rowSelecting='rowSelecting'>
                <e-columns>
                    <e-column field="location" headerText="Location" textAlign="Right" filter="columnFilterOptions"></e-column>
                    <!-- <e-column field="level" headerText="Level" filterTemplate="customTemplate" filter="columnFilterOptions"></e-column> -->
                    <e-column field="district" headerText="District" filter="columnFilterOptions"></e-column>
                    <e-column field="flat_name" headerText="Flat name" filter="columnFilterOptions"></e-column>
                    <e-column field="expected_year_of_completion" headerText="Expected completion" filter="columnFilterOptions"></e-column>
                    <e-column field="type" headerText="Type" filter="columnFilterOptions"></e-column>
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
        cTemplate: function() {
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
        }
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