<template>
    <div class="vertical-center">
        <div>
        <NavBar/>
        <h3>Selected Plan: {{selectedPlan}}</h3>
        <b-dropdown id="dropdown-1" text="Select Plans" class="m-md-2" variant="outline-primary">
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
                height='100%'
                width='100%'
                :dataSource="vehicleArray.data" 
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
                <div class="wrapper">
                    <b-button
                        variant="primary"
                        v-if="picURL!='https://wsa1.pakwheels.com/assets/default-display-image-car-638815e7606c67291ff77fd17e1dbb16.png'"
                        v-b-toggle.sidebar-backdrop
                        @click="calculateCost">Cost Breakdown</b-button>
                    <!-- <favBtn/> -->
                    <div class="button-div" > 
                        <button class="fav-button" @click="addFav"> 
                            <i class="fa fa-star"></i> 
                            <span>Favorites</span> 
                        </button> 
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
                                Additional Registration Fee (ARF):
                                <br>
                                {{ costBreakdown.data.cost_object.arf }}
                                <br>
                                GST (Flat price x GST rate):
                                <br>
                                $ {{ selectedOption.omv }} x {{ costBreakdown.data.cost_object.gst_perc }} = $ {{ costBreakdown.data.cost_object.gst.toFixed(2) }}
                                <br>
                                Road Tax (Flat road tax +  (Road tax rate x Flat price)):
                                <br>
                                $ {{ costBreakdown.data.cost_object.road_tax_flat }} + {{ costBreakdown.data.cost_object.road_tax_perc }} x {{ selectedOption.omv }}= $ {{ costBreakdown.data.cost_object.road_tax.toFixed(2) }}
                                <br>

                                {{ costBreakdown.data }}
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
// import favBtn from './FavBtn'
import User from '../../../server/src/models/User'
import { Filter } from "@syncfusion/ej2-vue-grids";
import NavBar from "./NavBar.vue"
import VueJwtDecode from "vue-jwt-decode";

export default {
    data() {
      return {
        text: "hello",
        picURL: "https://wsa1.pakwheels.com/assets/default-display-image-car-638815e7606c67291ff77fd17e1dbb16.png",
        vehicleArray: {},
        selectedOption: {},
        isCalculating: false,
        showPreviousCost: true,
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
      user: User,
      }
    },
    components:{
        NavBar,
        // favBtn
    },
    watch: {
        selectedOption: function (newSelectedOption) {
            this.selectedOption = newSelectedOption
        }
    },
    methods: {
        getUserDetails() {
            let token = localStorage.getItem("jwt");
            let decoded = VueJwtDecode.decode(token);
            this.user = decoded;
        },
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
        },
        async calculateCost() {
            try {
                this.isCalculating = true
                this.showPreviousCost = false
                this.costBreakdown= await this.$http.post('vehicle/costBreakdown', this.selectedOption)
                this.showPreviousCost = true
                this.isCalculating = false
                console.log(this.costBreakdown)
            } catch (err) {
                let error = err.response
                if (error.status == 409) {
                    this.$swal("Error", error.data.message, "error")
                } else {
                    this.$swal("Error", error.data.err.message, "error")
                }
            }
        },
        doPlan(plan){
            console.log(plan)
            this.selectedPlan = plan
        },
        async addFav() {
            // this.$notify({
            //             group: 'foo',
            //             title: 'added_plan1',
            //             text: this.selectedPlan
            //             });
            if (this.selectedPlan == 1){
                this.$notify({
                        group: 'foo',
                        title: 'added_plan1',
                        text: this.user.plans
                        });
                    this.user.plans.plan1 = this.selectedPlan
                    this.$notify({
                        group: 'foo',
                        title: 'added_plan1',
                        text: 'Added to plan 1!'
                        });
                }
                if (this.selectedPlan == 2) {
                    this.user.plans.plan2 = this.selectedOption
                }
                if (this.selectedPlan == 3) {
                    this.user.plans.plan3 = this.selectedOption
                }
        }
    },
    provide: {
        grid: [Filter]
    },
    mounted() {
        this.getVehicleDetails();
        this.getUserDetails();
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
.wrapper {
    display: flex;
    justify-content: space-around;
}
.fav-button {
    border: none;
    height: 40px;
    width: 120px; 
    font-size: 15px;
    background-color: #000;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center
}

</style>