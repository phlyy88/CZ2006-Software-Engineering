<template>
    <div class="vertical-center">
        <NavBar/>
        <div class="filter">
            <ejs-grid 
                ref="grid"
                height='100%'
                width='100%'
                :dataSource="childcareArray.data"
                :allowFiltering="true"
                :filterSettings='filterOptions'
                :selectionSettings='selectionOptions'
                :rowSelecting='rowSelecting'
                :rowSelected='onRowSelected'>
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
        <div class="info-side">
            <h3>This is your selected option</h3>
            <b-card
                title="Card Title"
                img-src="https://s3-ap-southeast-1.amazonaws.com/mindchamps-prod-wp/wp-content/uploads/2019/05/16224647/MindChamps-RaffelsTownclub-1045-1280x853.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
            >
                <b-card-text>
                {{ selectedOption}}
                </b-card-text>
                <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
        </div>
    </div>

</template>

<script>
  import { Filter, Page } from '@syncfusion/ej2-vue-grids'
  import NavBar from './NavBar.vue'
  export default {
    data() {
      return {
        childcareArray: {},
        selectedOption: null,
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
    components:{
        NavBar
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
        },
        onRowSelected(args) {
            this.selectedOption = args.data
        }
    },
    provide: {
        grid: [Filter, Page]
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