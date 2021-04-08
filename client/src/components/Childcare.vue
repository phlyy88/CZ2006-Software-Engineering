<template>
    <div class="pageView">
        <NavBar :user="user" />
        <div class="filter">
            <ejs-grid 
                ref="grid"
                class = "e-resizable"
                :dataSource="childcareArray.data"
                :allowFiltering="true"
                :filterSettings='filterOptions'
                :selectionSettings='selectionOptions'
                :rowSelecting='rowSelecting'
                :rowSelected='onRowSelected'>
                <e-columns>
                    <e-column field="childcare_organization" headerText="Organization" textAlign="Right" :filter="columnFilterOptions"></e-column>-->
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
                <b-img v-bind:src="picURL" fluid alt="Responsive image"></b-img>
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
                </b-card-text>  
                <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
                    <b-dropdown-item>First Action</b-dropdown-item>
                    <b-dropdown-item>Second Action</b-dropdown-item>
                    <b-dropdown-item>Third Action</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item active>Active action</b-dropdown-item>
                    <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                </b-dropdown> <br>
                <b-button
                    v-if="picURL!=='https://wsa1.pakwheels.com/assets/default-display-image-car-638815e7606c67291ff77fd17e1dbb16.png'"
                    v-b-toggle.sidebar-backdrop
                    @click ="calculateCostchild">Cost Breakdown</b-button>
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
                                Registration Fee:
                                <br>
                                $ {{ childcostBreakdown.data.cost_object.registration_cost }}
                                <br>
                                Monthly Cost:
                                <br>
                                $ {{ childcostBreakdown.data.cost_object.monthly_cost }}
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
                                $ {{ childcostBreakdown.data.cost_object.total_cost.toFixed(2) }}
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
                                Total Grants:
                                $ {{ childcostBreakdown.data.cost_object.total_grants.toFixed(2) }}
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
  import { Filter, Page } from '@syncfusion/ej2-vue-grids'
  import VueJwtDecode from "vue-jwt-decode";
import NavBar from "./NavBar.vue"
  
  export default {
    data() {
      return {
          user:{},
        childcareArray: {},
        selectedOption: {},
        isCalculating: false,
        showPreviousCost: true,
        childcostBreakdown: {
            "data" : {
                "cost_object": {
                    "registration_cost": 0,
                    "monthly_cost": 0,
                    "total_cost": 0,
                    "baby_bonus": 0,
                    "total_grants": 0
                }}
        },
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
    methods: {
        getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },
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
        },
        onRowSelected(args) {
            this.selectedOption = args.data
        },
                async calculateCostchild() {
            try {
                this.isCalculating = true
                this.showPreviousCost = false
                this.childcostBreakdown= await this.$http.post('childcare/childcostBreakdown', this.selectedOption)
                this.showPreviousCost = true
                this.isCalculating = false
                console.log(this.childcostBreakdown)
            } catch (err) {
                let error = err.response
                if (error.status == 409) {
                    this.$swal("Error", error.data.message, "error")
                } else {
                    this.$swal("Error", error.data.err.message, "error")
                }
            }
        },
        toggle () {
        this.sharedState.active = !this.sharedState.active
      }

    },
    name: 'AppDropdown',
    provide: {
        grid: [Filter, Page]
    },
    mounted() {
        this.getChildcareDetails();
        this.getUserDetails();
    },
  }
</script>
