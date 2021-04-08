<template>
    <div class="pageView">
        <NavBar :user="user" />
        <div class="filter">
            <ejs-grid 
                ref="grid"
                class="e-resizable"
                :dataSource="details.data" 
                :allowFiltering='true' 
                :filterSettings='filterOptions' 
                :selectionSettings='selectionOptions'
                :rowSelecting='rowSelecting'
                :rowSelected='onRowSelected'>
                <e-columns>
                    <e-column field="town" headerText="Town" textAlign="Right" ></e-column>
                    <e-column field="flat_type" headerText="Flat type"></e-column>
                    <e-column field="flat_room" headerText="Number of rooms"></e-column>                    
                    <e-column field="block" headerText="Flat name/Block" :filter="columnFilterOptions"></e-column>
                    <e-column field="remaining_lease" headerText="Remaining lease" :filter="columnFilterOptions"></e-column>
                    <e-column field="price" headerText="Price" :filter="columnFilterOptions"></e-column>
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
                    v-if="displayCostBreakdown"
                    v-b-toggle.sidebar-backdrop
                    @click ="calculateCost">Cost Breakdown</b-button>
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
                                $ {{ costBreakdown.data.cost_object.option_fee }}
                                <br>
                                Home Insurance Premium:
                                <br>
                                $ {{ costBreakdown.data.cost_object.home_insurance_premium }}
                                <br>
                                Caveat Registration Fee:
                                <br>
                                $ {{ costBreakdown.data.cost_object.caveat_registration }}
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
                                {{ costBreakdown.data.cost_object.stamp_duty }}
                                <br>
                                Conveyance Fee:
                                <br>
                                {{ costBreakdown.data.cost_object.conveyancefee }}
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
                                $ {{ costBreakdown.data.cost_object.total_cost.toFixed(2) }}
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
import { getDetails, calculateCost } from "../services/systems"
  export default {
    data() {
      return {
        details: {},
        selectedOption: {},
        isCalculating: false,
        showPreviousCost: true,
        displayCostBreakdown: false,
        costBreakdown: {
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
            type: 'CheckBox'
        },
        columnFilterOptions: {
            type: 'Menu'
        },
        selectionOptions: {
            type: 'Single',
            enableToggle: true
        },
      }
    },
    components:{
        NavBar
    },
    watch: {
        selectedOption: function (newSelectedOption) {
            this.selectedOption = newSelectedOption
        }
    },    
    methods: {
        onRowSelected(args) {
            this.selectedOption = args.data
            this.displayCostBreakdown = true
        },
        calculateCost() {
            calculateCost.calculateCost(this, 'housing')
        }
    },
    provide: {
        grid: [Filter]
    },
    onRowSelected(args) {
            this.selectedOption = args.data
            this.picURL = args.data.image_url
        },
    mounted() {
        getDetails.getDetails(this, 'housing')
    }
  }
</script>