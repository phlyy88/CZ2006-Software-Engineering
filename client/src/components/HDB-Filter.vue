<template>
    <div id="app">
    <ejs-grid ref="grid" :dataSource="HDBArray.data" :allowFiltering="true" :filterSettings="filterOptions" :allowPaging="true" :pageSettings="pageSettings">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" filterTemplate="customTemplate" filter="columnFilterOptions"></e-column>
        <e-column field="ShipCity" headerText="ShipCity"></e-column>
        <e-column field="ShipCountry" headerText="ShipCountry"></e-column>
      </e-columns>
    </ejs-grid> 

               <form>
                    <h2>View Listing</h2>
                    <div class="form-group">
                        <label>Listing ID</label>
                        <input type="email" class="form-control form-control-lg" />      
                    </div>

                    <button type="submit" class="btn btn-dark btn-lg btn-block">Enter</button>

                </form>
  </div> 
</template>


<script>
  import { Filter } from '@syncfusion/ej2-vue-grids'
  export default {
    data() {
      return {
        HDBArray: {},
        selectedOption: {},
        filterOptions: {
            type: 'Excel'
        },
        columnFilterOptions: {
            type: 'Checkbox'
        },
        selectionOptions: {
            type: 'Single'
        },
        pageSettings: { pageSize: 10 }
      }
    },
    methods: {
       async getHDBDetails() {
            try {
                this.HDBArray = await this.$http.get('HDB')
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
        this.getHDBDetails();
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