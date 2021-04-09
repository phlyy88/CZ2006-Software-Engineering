<template>
    <div class="pageView">
        <NavBar :user="user" />
        <h3>Please select a plan: Plan {{selectedPlan}}</h3>
        <div>
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
                :allowFiltering="true"
                :filterSettings='filterOptions'
                :selectionSettings='selectionOptions'
                :rowSelecting='rowSelecting'
                :rowSelected='onRowSelected'>
                <e-columns>
                    <e-column field="childcare_organization" headerText="Organization" textAlign="Right"></e-column>-->
                    <e-column field="level" headerText="Level"></e-column> -->
                    <e-column field="child_age" headerText="Age of Child"></e-column>
                    <e-column field="full_half_day" headerText="Full or Half Day"></e-column>
                    <e-column field="type" headerText="Type"></e-column>
                </e-columns>
            </ejs-grid>
        </div>
                <div class="info-side">
            <h3>Selected:</h3>
            <b-card
                title="Childcare"
                tag="Childcare"
                style="max-width: 20rem; width: 100%"
                class="mb-2"
            >
                <b-card-text>
                    Organisation: {{ selectedOption.childcare_organization }}
                    <br>
                    Monthly Cost: {{ selectedOption.cost_for_Singaporeans }}
                    <br>
                    Child Age: {{ selectedOption.child_age }}
                    <br>
                    Duration: {{ selectedOption.full_half_day }}
                    <br>                    
                    Sector: {{ selectedOption.type }}
                    <br>
                    Number of Children:
                </b-card-text>  
                <b-form-select
                    v-if="displayChild"
                    v-model="selectedOption.child"
                    :options="childOptions"
                >
                   <template #first>
                        <b-form-select-option :value="null" disabled>-- Please select number of children --</b-form-select-option>
                    </template> 
                </b-form-select>
                <div class='wrapper'>
                    <b-button
                        v-if="displayCostBreakdown && displayChild"
                        v-b-toggle.sidebar-backdrop
                        variant="primary"
                        @click ="calculate"
                        style="margin-top:10px">Cost Breakdown
                    </b-button>
                    <div class="button-div" 
                    style="margin-top:10px"> 
                        <b-button v-if="displayFavBtn" @click="addFav"> 
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
                                <b-button block v-b-toggle.accordion-2 variant="info">Total Costs</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-spinner v-if="isCalculating" class="ml-auto"></b-spinner>
                                    <b-card-text v-if="showPreviousCost">
                                        <b-list-group>
                                            <b-list-group-item>
                                                Registration Fee:
                                                <br>
                                                $ {{ costBreakdown.data.cost_object.registration_cost.toFixed(2) }}
                                            </b-list-group-item>
                                            <b-list-group-item>
                                                Monthly Cost:
                                                <br>
                                                $ {{ costBreakdown.data.cost_object.monthly_cost.toFixed(2) }}
                                            </b-list-group-item>
                                            <b-list-group-item>
                                                Total Annual Cost: ((Monthly Cost X 12) + registration_cost) x Number Of Children
                                                <br>    
                                                ($ {{ selectedOption.cost_for_Singaporeans }} x 12)
                                                <br>
                                                + $ {{ selectedOption.registration_fee.toFixed(2) }}) x {{ selectedOption.child }}
                                                <br>
                                                = $ {{ costBreakdown.data.cost_object.total_cost.toFixed(2) }}
                                            </b-list-group-item>
                                        </b-list-group>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                        <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button block v-b-toggle.accordion-3 variant="info">Total Grants</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                <b-spinner v-if="isCalculating" class="ml-auto"></b-spinner>
                                <b-card-text v-if="showPreviousCost">
                                    <b-list-group>
                                            <b-list-group-item>
                                                Total Grants:
                                                <br>
                                                $ {{ grantsBreakdown.data.grants_object.total_grants.toFixed(2) }}
                                            </b-list-group-item>
                                        </b-list-group>
                                </b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                        <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button block v-b-toggle.accordion-4 variant="info">Net Cost</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                <b-spinner v-if="isCalculating" class="ml-auto"></b-spinner>
                                <b-card-text v-if="showPreviousCost">
                                    <b-list-group>
                                        <b-list-group-item>
                                        Net Cost:
                                        $ {{ costBreakdown.data.cost_object.total_cost.toFixed(2) }} - {{ grantsBreakdown.data.grants_object.total_grants.toFixed(2) }}
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
  import { Filter, Page } from '@syncfusion/ej2-vue-grids'
  import {getDetails, calculate} from "../services/systems"
  import VueJwtDecode from 'vue-jwt-decode'

  export default {
    data() {
      return {
        user:{},
        plan: [
            {plan: 1}, 
            {plan: 2}, 
            {plan: 3}
            ],
        selectedPlan: 1,
        details: {},
        selectedOption: {
            "cost_for_singaporeans": 0,
            "registration_fee": 0,
            "child": 0,
            "netCost": 0
        },
        isCalculating: false,
        showPreviousCost: true,
        displayCostBreakdown: false,
        displayChild: false,
        displayFavBtn: false,
        netCost: 0,
        costBreakdown: {
            "data" : {
                "cost_object": {
                    "registration_cost": 0,
                    "monthly_cost": 0,
                    "total_cost": 0
                }
            }
        },
        grantsBreakdown: {
            "data": {
                "grants_object": {
                    "baby_bonus": 0,
                    "baby_bonus_step": 0,
                    "total_grants": 0,
                }
            }
        },
        childOptions: [
          { value: 1, text: "1" },
          { value: 2, text: "2" },
          { value: 3, text: "3" },
          { value: 4, text: "4" },
          { value: 5, text: "5" },
        ],
        filterOptions: {
            type: 'CheckBox'
        },
        columnFilterOptions: {
            type: 'Menu'
        },
        selectionOptions: {
            type: 'Single'
        }
      }
    },
       components:{
        NavBar
    },
    watch: {
        "selectedOption.child": function() {
            if(this.selectedOption.child == undefined) {
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
        },
        onRowSelected(args) {
            this.selectedOption = args.data
            this.displayChild = true
            this.displayFavBtn = false
            this.netCost = 0
        },
        calculate(){
            calculate.calculateCost(this,'childcare')
            this.displayFavBtn = true
        },
        async addFav() {
            this.selectedOption.cost = this.costBreakdown.data.cost_object
            if (this.selectedPlan == 1){
                this.$set(this.user, 'c1', this.selectedOption)
                this.user.type = 'c1'
                this.$http.put('user/update', this.user)
                this.$notify({
                    group: 'foo',
                    title: 'Added to plan 1!',
                    text: this.user.c1.child + ' child for ' + this.user.c1.childcare_organization
                    });
            }
            if (this.selectedPlan == 2) {
                this.$set(this.user, 'c2', this.selectedOption)
                this.user.type = 'c2'
                this.$http.put('user/update', this.user)
                this.$notify({
                    group: 'foo',
                    title: 'Added to plan 2!',
                    text: this.user.c2.child + ' child for ' + this.user.c2.childcare_organization
                    });
            }
            if (this.selectedPlan == 3) {
                this.$set(this.user, 'c3', this.selectedOption)
                this.user.type = 'c3'
                this.$http.put('user/update', this.user)
                this.$notify({
                    group: 'foo',
                    title: 'Added to plan 3!',
                    text: this.user.c3.child + ' child for ' + this.user.c3.childcare_organization
                    });
            }
        },
        doPlan(plan) {
            this.selectedPlan = plan
        }

    },
    name: 'AppDropdown',
    provide: {
        grid: [Filter, Page]
    },
    mounted() {
        this.selectedPlan = this.$store.state.user.previousPlan
        this.getUserDetails();
        getDetails.getDetails(this,'childcare');
    },
  }
</script>
