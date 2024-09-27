<template>
    <div class="vertical-center">
        <NavBar/>
        <div class="filter">
            <ejs-grid 
                ref="grid"
                height='100%'
                width='100%'
                :dataSource="details.data" 
                :allowFiltering='true' 
                :filterSettings='filterOptions' 
                :selectionSettings='selectionOptions'
                :rowSelecting='rowSelecting'
                :rowSelected='onRowSelected'>
                <e-columns>
                    <e-column field="category" headerText="Category" textAlign="Right" ></e-column>
                    <e-column field="brand" headerText="Brand" filterTemplate="customTemplate" ></e-column>
                    <e-column field="name" headerText="Model" :filter="columnFilterOptions"></e-column>
                    <e-column field="passenger_capacity" headerText="Capacity" ></e-column>
                    <e-column field="omv" headerText="Price (SGD)" :filter="columnFilterOptions"></e-column>
                </e-columns>
            </ejs-grid>
        </div>
        <div class="info-side">
            <h3>Selected:</h3>
            <b-card
                title="Vehicle"
                tag="vehicle"
                style="max-width: 20rem; width: 100%"
                class="mb-2">
                <b-img v-bind:src="picURL" fluid alt="Responsive image"></b-img>
                <b-card-text>
                    Model: {{ selectedOption.name }}
                    <br>
                    Brand: {{ selectedOption.brand }}
                    <br>
                    Price: {{ selectedOption.omv }}
                </b-card-text>
                <b-button
                    variant="primary"
                    v-if="displayCostBreakdown"
                    v-b-toggle.sidebar-backdrop
                    @click="calculate">Cost Breakdown</b-button>
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
                            <!-- <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text> -->
                            <b-spinner v-if="isCalculating" class="ml-auto"></b-spinner>
                            <b-card-text v-if="showPreviousCost">
                                Registration Cost:
                                <br>
                                $ {{ costBreakdown.data.cost_object.registration_fee }}
                                <br>
                                Ves Subsidy/Cost:
                                <br>
                                $ {{ costBreakdown.data.cost_object.ves }}
                            </b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block v-b-toggle.accordion-2 variant="info">Percentage Costs</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-spinner v-if="isCalculating" class="ml-auto"></b-spinner>
                            <b-card-text v-if="showPreviousCost">
                                <b-list-group>
                                    <b-list-group-item>
                                        Additional Registration Fee (ARF):
                                        <br>
                                        $ {{ costBreakdown.data.cost_object.arf }}
                                    </b-list-group-item>
                                    <b-list-group-item>
                                        GST (Flat price x GST rate):
                                        <br>
                                        $ {{ selectedOption.omv }} x {{ costBreakdown.data.cost_object.gst_perc }} = $ {{ costBreakdown.data.cost_object.gst.toFixed(2) }}
                                    </b-list-group-item>
                                    <b-list-group-item>
                                        Road Tax (Flat road tax +  (Road tax rate x Flat price)):
                                        <br>
                                        $ {{ costBreakdown.data.cost_object.road_tax_flat }} + {{ costBreakdown.data.cost_object.road_tax_perc }} x {{ selectedOption.omv }}= $ {{ costBreakdown.data.cost_object.road_tax.toFixed(2) }}
                                    </b-list-group-item>
                                </b-list-group>
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
            </b-card>
        </div>
    </div>
</template>
<script>
import { Filter } from "@syncfusion/ej2-vue-grids";
import NavBar from "./NavBar.vue"
import { getDetails, calculate } from "../services/systems"
export default {
    data() {
      return {
        picURL: "https://wsa1.pakwheels.com/assets/default-display-image-car-638815e7606c67291ff77fd17e1dbb16.png",
        details: {},
        selectedOption: {},
        isCalculating: false,
        showPreviousCost: true,
        displayCostBreakdown: false,
        costBreakdown: {
            "data" : {
                "cost_object": {
                    "registration_fee": 0,
                    "gst": 0,
                    "excise_duty": 0,
                    "ves": 0,
                    "arf": 0,
                    "road_tax": 0,
                    "total_cost": 0
                }
            }
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
        }
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
            this.picURL = args.data.image_url
            this.displayCostBreakdown = true
        },
        calculate() {
            calculate.calculateCost(this, 'vehicle', false)
        }
    },
    provide: {
        grid: [Filter]
    },
    mounted() {
        getDetails.getDetails(this, 'vehicle');
    },
};
</script>

<style>
@import url("https://cdn.syncfusion.com/ej2/material.css");
.e-resizable {
  resize: both;
  overflow: auto;
  padding: 10px;
  height: 500px;
}

.filter {
  height: 100%;
  flex: 1 0 70%;
}

.info-side {
  flex: 0 0 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>