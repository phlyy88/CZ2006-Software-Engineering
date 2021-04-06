<template>
    <div class="vertical-center">
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
                    <e-column field="category" headerText="Category" textAlign="Right" filter="columnFilterOptions"></e-column>
                    <e-column field="brand" headerText="Brand" filterTemplate="customTemplate" filter="columnFilterOptions"></e-column>
                    <e-column field="name" headerText="Model" filter="columnFilterOptions"></e-column>
                    <e-column field="passenger_capacity" headerText="Capacity" filter="columnFilterOptions"></e-column>
                    <e-column field="omv" headerText="Price (SGD)" filter="columnFilterOptions"></e-column>
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
                    v-if="picURL!='https://wsa1.pakwheels.com/assets/default-display-image-car-638815e7606c67291ff77fd17e1dbb16.png'"
                    v-b-toggle.sidebar-backdrop
                    @click="calculateCost">Cost Breakdown</b-button>
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
                            <b-button block v-b-toggle.accordion-1 variant="info">Accordion 1</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
                            <b-spinner v-if="isCalculating" class="ml-auto"></b-spinner>
                            <b-card-text v-if="showPreviousCost">{{ costBreakdown.data }}</b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block v-b-toggle.accordion-2 variant="info">Accordion 2</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-card-text>{{ text }}</b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block v-b-toggle.accordion-3 variant="info">Accordion 3</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                            <b-card-text>{{ text }}</b-card-text>
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
import { Filter } from '@syncfusion/ej2-vue-grids'
export default {
    data() {
      return {
        text: "hello",
        picURL: "https://wsa1.pakwheels.com/assets/default-display-image-car-638815e7606c67291ff77fd17e1dbb16.png",
        vehicleArray: {},
        selectedOption: {},
        isCalculating: false,
        showPreviousCost: true,
        costBreakdown: {},
        filterOptions: {
            type: 'Excel'
        },
        columnFilterOptions: {
            type: 'Checkbox'
        },
        selectionOptions: {
            type: 'Single'
        }
      }
    },
    watch: {
        selectedOption: function (newSelectedOption) {
            this.selectedOption = newSelectedOption
        }
    },
    methods: {
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
        }
    },
    provide: {
        grid: [Filter]
    },
    mounted() {
        this.getVehicleDetails();
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