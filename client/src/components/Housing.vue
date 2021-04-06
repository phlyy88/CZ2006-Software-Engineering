<template>
    <div class="vertical-center">
        <NavBar/>
        <div>
            <b-form-group label="Choose a house type" >
      <b-form-radio-group
        id="btn-radios-3"
        v-model="selected"
        :options="options"
        name="radio-btn-default"
        button-variant="outline-primary"
        buttons
      >{{selected}}</b-form-radio-group>
    </b-form-group>
        </div>
        <div class="filter">
            <ejs-grid 
            v-if="selected === 'bto'"
                ref="grid"
                height='100%'
                width='100%'
                :dataSource="housingArray.data" 
                :allowFiltering='true' 
                :filterSettings='filterOptions' 
                :selectionSettings='selectionOptions'
                :rowSelecting='rowSelecting'
                :rowSelected='onRowSelected'>
                <e-columns>
                    <e-column field="location" headerText="Location" textAlign="Right" ></e-column>
                    <e-column field="district" headerText="District" textAlign='Center' :template='cTemplate'></e-column>
                    <e-column field="flat_name" headerText="Flat Name" :filter="columnFilterOptions"></e-column>
                    <e-column field="expected_year_of_completion" headerText="Expected Year of Completion" :filter="columnFilterOptions"></e-column>
                    <e-column field="room_types" headerText="Room Types" :filter="columnFilterOptions"></e-column>
                    <e-column field="no_of_blocks" headerText="Number of Blocks" :filter="columnFilterOptions"></e-column>
                </e-columns>
            </ejs-grid>

            <ejs-grid 
            v-else-if="selected === 'resale'"
                ref="grid"
                height='100%'
                width='100%'
                :dataSource="housingArray.data" 
                :allowFiltering='true' 
                :filterSettings='filterOptions' 
                :selectionSettings='selectionOptions'
                :rowSelecting='rowSelecting'
                :rowSelected='onRowSelected'>
                <h3>Need to pass in resale database</h3>
                <e-columns>
                    <e-column field="location" headerText="Location" textAlign="Right" ></e-column>
                    <e-column field="district" headerText="District" textAlign='Center' :template='cTemplate'></e-column>
                    <e-column field="flat_name" headerText="Flat Name" :filter="columnFilterOptions"></e-column>
                    <e-column field="expected_year_of_completion" headerText="Expected Year of Completion" :filter="columnFilterOptions"></e-column>
                    <e-column field="room_types" headerText="Room Types" :filter="columnFilterOptions"></e-column>
                    <e-column field="no_of_blocks" headerText="Number of Blocks" :filter="columnFilterOptions"></e-column>
                </e-columns>
            </ejs-grid>

        </div>
    </div>
</template>

<script>
import Vue from "vue"
import { Filter } from '@syncfusion/ej2-vue-grids'
import NavBar from "./NavBar.vue"
  export default {
    data() {
      return {
        housingArray: {},
        selectedOption: {},
        selected: null,
        options: [
          { text: 'Build To Order', value: 'bto' },
          { text: 'Resale', value: 'resale' }
        ],
        filterOptions: {
            type: 'Checkbox'
        },
        columnFilterOptions: {
            type: 'Menu'
        },
        selectionOptions: {
            type: 'Single',
            enableToggle: true
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
    components:{
        NavBar
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
    watch: {
        selectedOption: function (newSelectedOption) {
            this.selectedOption = newSelectedOption
        }
    },
    onRowSelected(args) {
            this.selectedOption = args.data
            this.picURL = args.data.image_url
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