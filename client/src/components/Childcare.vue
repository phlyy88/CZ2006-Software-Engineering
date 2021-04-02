<template>
<v-app dark>
<!-- <div class="home">
    <h1>This is the homepage</h1>
    <p class="red white--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsam cupiditate in et libero blanditiis nam fuga beatae eum impedit officia temporibus voluptate error at aliquam, nobis architecto sunt atque?</p>
    <p class="pink red--text lighten-3 text--darken-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam fugit rerum, magni beatae sapiente dolores consectetur ea laboriosam totam, nulla nemo atque veritatis quibusdam esse aliquid quaerat laborum id nihil!</p>
    <h1 class="display-4">Massive display text</h1> 
    <h4 class="display-1">Smaller display text</h4>
    <p class="headline">this is a headline</p>
    <p class="subheading">this is a sub-heading</p>
    <p class="caption">this is a caption</p>
  </div> -->
    <div class="vertical-center">
        <div id="filter-container" class="e-resizable">
            <ejs-grid 
                ref="grid"
                :dataSource="childcareArray.data" 
                :allowFiltering="true" 
                :filterSettings='filterOptions' 
                :selectionSettings='selectionOptions'
                :rowSelecting='rowSelecting'>
            Filter box with the HDB characteristics for users to narrow down their search. Need to update the column values using the HDB data. -->
                <e-columns>
                    <e-column field="childcare_organization" headerText="Organization" textAlign="Right" filter="columnFilterOptions"></e-column>-->
                    <e-column field="level" headerText="Level" filterTemplate="customTemplate" filter="columnFilterOptions"></e-column> -->
                    <e-column field="level" headerText="Level" filter="columnFilterOptions"></e-column>
                    <e-column field="child_age" headerText="Age of Child" filter="columnFilterOptions"></e-column>
                    <e-column field="full_half_day" headerText="Full or Half Day" filter="columnFilterOptions"></e-column>
                    <e-column field="type" headerText="Type" filter="columnFilterOptions"></e-column>
                </e-columns>
            </ejs-grid>
        </div>
    </div>
<router-view></router-view>
</v-app>
</template>

<script>
import { Filter } from '@syncfusion/ej2-vue-grids'
  export default {
    data() {
      return {
        childcareArray: {},
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
        }
    },
    provide: {
        grid: [Filter]
    },
    mounted() {
        this.getChildcareDetails();
    },
    UiCard(){

    },
    name: 'NavFilter',
    props: {
    filters: {
      default: () => [],
      type: Array,
    },
    },
    //components:{VueSplitPane}
  }
  export const UiCard = {
      props: {
          tag:{
              default:'div',
              type: String,
          },
      },
      render(){
          const Tag = this.tag;
          return (
            <Tag class="UiCard">
                {this.$slots.default}
            </Tag>
          );
      },
  };

  export const UiCardBody = {
      props: {
        tag: {
            default: 'div',
            type: String,
        },
      },
      render() {
        const Tag = this.tag;
        return (
            <Tag class="UiCard__body">
                {this.$slots.default}
            </Tag>
        );
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

</style>