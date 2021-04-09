<template>
    <div class="pageView">
        <NavBar :user="user" />
        <h3>Please select a plan: Plan {{selectedPlan}}</h3>
        <div>
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
                    <e-column field="block" headerText="Flat name/Block" ></e-column>
                    <e-column field="remaining_lease" headerText="Remaining lease" ></e-column>
                    <e-column field="price" headerText="Price" ></e-column>
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
                    Income Options:
                </b-card-text>
                <b-form-select
                    v-if="displayIncome"
                    v-model="selectedOption.income"
                    :options="incomeOptions"
                >
                    <template #first>
                        <b-form-select-option :value="null" disabled>-- Please select an income range --</b-form-select-option>
                    </template>
                </b-form-select>
                
                
                <div class="wrapper" > 
                    <b-button
                        v-if="displayCostBreakdown && displayIncome"
                        v-b-toggle.sidebar-backdrop
                        variant="primary"
                        @click ="calculate"
                        style="margin-top:10px">Cost Breakdown
                    </b-button>
                    <b-button 
                    class="button-div" 
                    v-if="displayFavBtn" 
                    @click="addFav"
                    style="margin-top:10px"> 
                        <i class="fa fa-star"></i> 
                        <span>Add to Favorites</span> 
                    </b-button> 
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
                                            Option Fee:
                                            <br>
                                            $ {{ costBreakdown.data.cost_object.option_fee }}
                                        </b-list-group-item>
                                        <b-list-group-item>
                                            Home Insurance Premium:
                                            <br>
                                            $ {{ costBreakdown.data.cost_object.home_insurance_premium }}
                                        </b-list-group-item>
                                        <b-list-group-item>
                                            Caveat Registration Fee:
                                            <br>
                                            $ {{ costBreakdown.data.cost_object.caveat_registration }}
                                        </b-list-group-item>
                                    </b-list-group>                              
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
                                <b-list-group>
                                    <b-list-group-item>
                                        Stamp duty:
                                        <br>
                                        $ {{ costBreakdown.data.cost_object.stamp_duty }}
                                    </b-list-group-item>
                                    <b-list-group-item>
                                        Conveyance Fee:
                                        <br>
                                        $ {{ costBreakdown.data.cost_object.conveyancefee }}
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
                                        $ {{ costBreakdown.data.cost_object.total_cost.toFixed(2) }} - {{ grantsBreakdown.data.grants_object.total_grants }} 
                                        <br>
                                        = $ {{ netCost.toFixed(2) }}
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
import NavBar from './NavBar'
import VueJwtDecode from 'vue-jwt-decode'
import { Filter } from '@syncfusion/ej2-vue-grids'
import { getDetails, calculate } from "../services/systems"
  export default {
    data() {
      return {
        user: {},
        plan: [
            {plan: 1}, 
            {plan: 2}, 
            {plan: 3}
            ],
        selectedPlan: 1,
        details: {},
        selectedOption: {},
        isCalculating: false,
        showPreviousCost: true,
        displayCostBreakdown: false,
        displayIncome: false,
        displayFavBtn: false,
        netCost: 0,
        costBreakdown: {
            "data" : {
                "cost_object": {
                    "option_fee": 0,
                    "home_insurance_premium": 0,
                    "caveat_registration": 0,
                    "conveyancefee": 0,
                    "stamp_duty": 0,
                    "total_cost": 0,
                    "income": 0
                }
            }
        },
        grantsBreakdown: {
            "data": {
                "grants_object": {
                    "total_grants": 0
                }
            }
        },
        incomeOptions: [
            // { value: null, text: "Please select an income range" },
            { value: 1, text: "5,000 - 5,500" },
            { value: 2, text: "5,500 - 6,000" },
            { value: 3, text: "6,000 - 6,500" },
            { value: 4, text: "6,500 - 7,000" },
            { value: 5, text: "7,000 - 7,500" },
            { value: 6, text: "7,500 - 8,000" },
            { value: 7, text: "8,000 - 8,500" },
            { value: 8, text: "8,500 - 9,000" },
        ],
        filterOptions: {
            type: 'CheckBox'
        },
        columnFilterOptions: {
            type: 'Checkbox'
        },
        selectionOptions: {
            type: 'Single'
        },
      }
    },
    components:{
        NavBar
    },
    watch: {
        'selectedOption.income': function () {
            if(this.selectedOption.income == undefined) {
                this.displayCostBreakdown = false
            } else {
                this.displayCostBreakdown = true
                this.displayFavBtn = false
            }
        }

    },
    methods: {
        getUserDetails() {
            let token = localStorage.getItem("jwt");
            let decoded = VueJwtDecode.decode(token);
            this.user = decoded;
            console.log(this.costBreakdown.data.cost_object)
        },
        onRowSelected(args) {
            this.selectedOption = args.data
            this.displayIncome = true
            this.displayFavBtn = false
            this.netCost = 0
        },
        calculate() {
            calculate.calculateCost(this, 'housing')
            this.displayFavBtn = true
        },
        doPlan(plan) {
            this.selectedPlan = plan
        },
        async addFav() {
            this.selectedOption.cost = this.costBreakdown.data.cost_object
            console.log(this.selectedOption)
            if (this.selectedPlan == 1){
                this.$set(this.user, 'h1', this.selectedOption)
                this.user.type = 'h1'
                console.log(this.user)
                this.$http.put('user/update', this.user)
                this.$notify({
                    group: 'foo',
                    title: 'Added to plan 1!',
                    text: this.user.h1.flat_type + ' ' + this.user.h1.flat_room + ' at ' + this.user.h1.town 
                    });
                console.log("put done")
            }
            if (this.selectedPlan == 2) {
                this.$set(this.user, 'h2', this.selectedOption)
                this.user.type = 'h2'
                this.$http.put('user/update', this.user)
                this.$notify({
                    group: 'foo',
                    title: 'Added to plan 2!',
                    text: this.user.h2.flat_type + ' ' + this.user.h2.flat_room + ' at ' + this.user.h2.town
                    });
            }
            if (this.selectedPlan == 3) {
                this.$set(this.user, 'h3', this.selectedOption)
                this.user.type = 'h3'
                this.$http.put('user/update', this.user)
                this.$notify({
                group: 'foo',
                title: 'Added to plan 3!',
                text: this.user.h3.flat_type + ' ' + this.user.h3.flat_room + ' at ' + this.user.h3.town 
                });
            }
        }
    },
    provide: {
        grid: [Filter]
    },
    mounted() {
        this.selectedPlan = this.$store.state.user.previousPlan
        getDetails.getDetails(this, 'housing');
        this.getUserDetails();
    }
  }
</script>
