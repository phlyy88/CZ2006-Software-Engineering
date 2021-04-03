<template>
<v-app dark>
    <div class="vertical-center">
        <div id="filter-container" class="e-resizable">
            <ejs-grid 
                ref="grid"
                :dataSource="childcareArray.data" 
                :allowFiltering="true" 
                :filterSettings='filterOptions' 
                :selectionSettings='selectionOptions'
                :rowSelecting='rowSelecting'>
            Filter box with the HDB characteristics for users to narrow down their search. Need to update the column values using the HDB data. -->
                <e-columns>
                    <e-column field="childcare_organization" headerText="Organization" textAlign="Right" filter="columnFilterOptions"></e-column>-->
                    <e-column field="level" headerText="Level" filterTemplate="customTemplate" filter="columnFilterOptions"></e-column> -->
                    <e-column field="level" headerText="Level" filter="columnFilterOptions"></e-column>
                    <e-column field="child_age" headerText="Age of Child" filter="columnFilterOptions"></e-column>
                    <e-column field="full_half_day" headerText="Full or Half Day" filter="columnFilterOptions"></e-column>
                    <e-column field="type" headerText="Type" filter="columnFilterOptions"></e-column>
                </e-columns>
            </ejs-grid>
        </div>
    </div>
<router-view></router-view>
</v-app>
</template>

<script>
import { Filter } from '@syncfusion/ej2-vue-grids'
  export default {
    data() {
      return {
        childcareArray: {},
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
        pageSettings: { pageSize: 10 }
      }
    },
    methods: {
       async getChildcareDetails() {
            try {
                this.childcareArray = await this.$http.get('childcare')
                //await this.$http.get('childcare) means call the childcare.js in backend
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
        this.getChildcareDetails();
    },
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