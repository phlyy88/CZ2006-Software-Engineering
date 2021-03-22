<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" :allowFiltering="true" :filterSettings="filterOptions">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" filterTemplate="customTemplate" filter="columnFilterOptions"></e-column>
        <e-column field="ShipCity" headerText="ShipCity"></e-column>
        <e-column field="ShipCountry" headerText="ShipCountry"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script>
import Vue from "vue";
import { GridPlugin, Filter } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { DataUtil } from '@syncfusion/ej2-data';
import { data } from "./dataSource";
Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);
Vue.prototype.$eventHub = new Vue();
export default {
  data() {
    return {
      data: data,
      filterOptions: { 
        ignoreAccent: true, // Uncomment this code to filter diacritic values
        // columns: [{ field: 'CustomerID', operator: 'startswith', value: 'v' }], //Uncomment the code to apply initial filter
        type: 'Excel' // Uncomment to change the filter type
      },
      columnFilterOptions: { // Uncomment while applying the fiter type to specific column
        type: 'CheckBox'
      }  
    };
  },
  methods: {
    customTemplate: function(){
      this.$eventHub.$on("CustomerID", this.filterCustomerID);
      return{
        template: Vue.component("Template",{
          template: `<ejs-dropdownlist
                       :dataSource="customerDistinctData"
                       :fields="{text: 'CustomerID', value: 'CustomerID' }"
                       :change= "getData"  >
                     </ejs-dropdownlist>`,
          computed: {
            customerDistinctData: function(){
              return DataUtil.distinct(data, 'CustomerID', true);
            }
          },
          methods: {
            getData(args){
              this.$eventHub.$emit("CustomerID", args.itemData.CustomerID) // emitted the event from child component
            }
          }
        })
      };
    },
    filterCustomerID: function(e){
      this.$refs.grid.ej2Instances.filterByColumn("CustomerID","equal",e);
    }
  },
  provide: {
    grid: [Filter]
  },
};
</script>

<style>
@import url("https://cdn.syncfusion.com/ej2/material.css");
</style>