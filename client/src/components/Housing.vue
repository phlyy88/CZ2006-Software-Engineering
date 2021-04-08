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
                    <e-column field="town" headerText="Town" textAlign="Right" filter="columnFilterOptions"></e-column>
                    <e-column field="flat_type" headerText="Flat type" filter="columnFilterOptions"></e-column>
                    <e-column field="flat_room" headerText="Number of rooms" filter="columnFilterOptions"></e-column>                    
                    <e-column field="block" headerText="Flat name" filter="columnFilterOptions"></e-column>
                    <e-column field="remaining_lease" headerText="Remaining lease" filter="columnFilterOptions"></e-column>
                    <e-column field="price" headerText="Price" filter="columnFilterOptions"></e-column>
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
                    Town: {{ selectedOption.town }}
                    <br>
                    Flat name: {{ selectedOption.block }}
                    <br>
                    Price: {{ selectedOption.price }}
                    <br>
                    Floor area (sqm): {{ selectedOption.floor_area_sqm }}
                    <br>                    
                    Flat type: {{ selectedOption.flat_type }}                    
                    <br> 
                    Remaining lease: {{ selectedOption.remaining_lease }}
                    <br>
                </b-card-text>
                <b-button
                    v-if="picURL!=='https://wsa1.pakwheels.com/assets/default-display-image-car-638815e7606c67291ff77fd17e1dbb16.png'"
                    v-b-toggle.sidebar-backdrop
                    @click ="calculateCosthdb">Cost Breakdown</b-button>
                <b-sidebar
                    id="sidebar-backdrop"
                    title="Cost Breakdown"
                    :backdrop-variant="dark"
                    backdrop
                    right
                    shadow>
                    <div class="accordion" role="tablist">
                        <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block v-b-toggle.accordion-1 variant="info">Flat Costs</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-spinner v-if="isCalculating" class="ml-auto"></b-spinner>
                                <b-card-text v-if="showPreviousCost">
                                Option Fee:
                                <br>
                                $ {{ hdbcostBreakdown.data.cost_object.option_fee }}
                                <br>
                                Home Insurance Premium:
                                <br>
                                $ {{ hdbcostBreakdown.data.cost_object.home_insurance_premium }}
                                <br>
                                Caveat Registration Fee:
                                <br>
                                $ {{ hdbcostBreakdown.data.cost_object.caveat_registration }}
                                <br>                                
                            </b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block v-b-toggle.accordion-2 variant="info">Percentage cost</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-spinner v-if="isCalculating" class="ml-auto"></b-spinner>
                            <b-card-text v-if="showPreviousCost">
                                Stamp duty:
                                <br>
                                {{ hdbcostBreakdown.data.cost_object.stamp_duty }}
                                <br>
                                Conveyance Fee:
                                <br>
                                {{ hdbcostBreakdown.data.cost_object.conveyancefee }}
                                <br>

                            </b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>

                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block v-b-toggle.accordion-3 variant="info">Total Costs</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-spinner v-if="isCalculating" class="ml-auto"></b-spinner>
                            <b-card-text v-if="showPreviousCost">
                                Total Cost:
                                $ {{ hdbcostBreakdown.data.cost_object.total_cost.toFixed(2) }}
                            </b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>

                    </div>
                </b-sidebar>

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
    data() {
      return {
        housingArray: {},
        selectedOption: {},
        isCalculating: false,
        showPreviousCost: true,
        hdbcostBreakdown: {
            "data" : {
                "cost_object": {
                    "option_fee": 0,
                    "home_insurance_premium": 0,
                    "caveat_registration": 0,
                    "conveyancefee": 0,
                    "stamp_duty": 0,
                    "total_cost": 0
                }}
        },
        filterOptions: {
            type: 'Excel'
        },
        columnFilterOptions: {
            type: 'Checkbox'
        },
        selectionOptions: {
            type: 'Single'
        },
      }
    },
    watch: {
        selectedOption: function (newSelectedOption) {
            this.selectedOption = newSelectedOption
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
    ,
        async calculateCosthdb() {
            try {
                this.isCalculating = true
                this.showPreviousCost = false
                this.hdbcostBreakdown= await this.$http.post('housing/hdbcostBreakdown', this.selectedOption)
                this.showPreviousCost = true
                this.isCalculating = false
                console.log(this.hdbcostBreakdown)
            } catch (err) {
                let error = err.response
                if (error.status == 409) {
                    this.$swal("Error", error.data.message, "error")
                } else {
                    this.$swal("Error", error.data.err.message, "error")
                }
            }
        },},
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