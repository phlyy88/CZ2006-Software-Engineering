<template>
    <div class="pageView">
        <NavBar :user="user" />
        <div>
        <h3>Please select a plan: Plan {{selectedPlan}}</h3>
        <b-dropdown id="dropdown-1" text="Select Plans" class="m-md-2" variant="light">
          <b-dropdown-item 
          v-for="plan in plan" 
          :key="plan.plan"
          @click="selectedPlan => doPlan(plan.plan)"
           >Plan {{plan.plan}}</b-dropdown-item>
        </b-dropdown>
      </div>
        <div class="filter">
            <ejs-grid 
            ref="grid"
                class = "e-resizable"
                :dataSource="details.data" 
                :allowFiltering='true' 
                :filterSettings='filterOptions' 
                :selectionSettings='selectionOptions'
                :rowSelecting='rowSelecting'
                :rowSelected='onRowSelected'>
                <e-columns>
                    <e-column field="category" headerText="Category" textAlign="Right" ></e-column>
                    <e-column field="brand" headerText="Brand" filterTemplate="customTemplate" ></e-column>
                    <e-column field="name" headerText="Model" ></e-column>
                    <e-column field="passenger_capacity" headerText="Capacity" ></e-column>
                    <e-column field="omv" headerText="Price (SGD)" ></e-column>
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
                <div class="wrapper">
                    <b-button
                    variant="primary"
                    v-if="displayCostBreakdown"
                    v-b-toggle.sidebar-backdrop
                    @click="calculate"
                    style="margin-top:10px">Cost Breakdown</b-button>
                    <div class="button-div"
                    style="margin-top:10px"> 
                        <b-button v-if="displayFavBtn" class="fav-button" @click="addFav"> 
                            <i class="fa fa-star"></i> 
                            <span>Add to Favorites</span> 
                        </b-button> 
                    </div>
                </div>
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
                                <b-list-group>
                                    <b-list-group-item>
                                        Registration Cost:
                                        <br>
                                        $ {{ costBreakdown.data.cost_object.registration_fee }}
                                    </b-list-group-item>
                                    <b-list-group-item>
                                        Ves Subsidy/Cost:
                                        <br>
                                        $ {{ costBreakdown.data.cost_object.ves }}
                                    </b-list-group-item>
                                </b-list-group>
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
                                <b-list-group>
                                    <b-list-group-item>
                                        Total Cost:
                                        <br>
                                        $ {{ costBreakdown.data.cost_object.total_cost.toFixed(2) }}
                                    </b-list-group-item>
                                </b-list-group>
                            </b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>
                    </div>
                </b-sidebar>
                <b-card-text>
                    <br>
                    <h3> Cost: $ {{ netCost.toFixed(2) }} </h3>
                </b-card-text>
            </b-card>
        </div>
    </div>
</template>
<script>
import { Filter } from "@syncfusion/ej2-vue-grids";
import VueJwtDecode from "vue-jwt-decode";
import NavBar from "./NavBar.vue"
import { getDetails, calculate, addFavourites } from "../services/systems"
export default {
    data() {
      return {
        picURL: "https://wsa1.pakwheels.com/assets/default-display-image-car-638815e7606c67291ff77fd17e1dbb16.png",
        details: {},
        user:{},
        selectedOption: {},
        isCalculating: false,
        showPreviousCost: true,
        displayCostBreakdown: false,
        displayFavBtn: false,
        netCost: 0,
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
        },
        plan: [
        {plan: 1}, 
        {plan: 2}, 
        {plan: 3}],
      selectedPlan: 1,
      }
    },
    components:{
        NavBar,
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
            this.displayFavBtn = false
            this.netCost = 0
        },
        getUserDetails() {
            let token = localStorage.getItem("jwt");
            let decoded = VueJwtDecode.decode(token);
            this.user = decoded;
        },
        doPlan(plan){
            this.selectedPlan = plan
        },
        addFav() {
            addFavourites.addFavourites(this, 'v')
        },
        calculate() {
            this.displayFavBtn = true
            calculate.calculateCost(this, 'vehicle')
        }
    },
    provide: {
        grid: [Filter]
    },
    mounted() {
        this.selectedPlan = this.$store.state.user.previousPlan
        this.getUserDetails();
        getDetails.getDetails(this, 'vehicle');
    },

};
</script>
