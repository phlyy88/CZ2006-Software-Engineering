<template>
<b-container>
  <div>
      <div class = "filter">
    <v-card flat>
    <v-card-text>
        <h1>Filter</h1>
        <v-container fluid>
        <v-row>
          <v-col
            cols="12"
            sm="4"
            md="4"
          >
          <h2></h2>
            <v-select
                v-bind:items="childcare_organization in childcareArray.data"
                v-model="selectedOption"
                label="Childcare organization"
                <template v-slot:item="props">
                <tr>
                    <td>{{ props.item.childcare_organization }}</td>
                    <td>{{ props.item.level }}</td>
                    <td>{{ props.item.child_age }}</td>
                    <td>{{ props.item.full_half_day }}</td>
                    <td>{{ props.item.type }}</td>
                </tr>
            </template>
            ></v-select>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
      </div>
  </div>
</b-container>

    <b-container>
    <v-card>
        <v-card-title>
            List of childcares
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
        </v-card-title>
    </v-card>
    <v-layout column style="height: 90vh"> 
    <v-flex md6 style="overflow: auto">    
        <v-data-table
            v-bind:headers="headers"
            v-bind:items="childcareArray.data"
            :items-per-page="20"
            class="elevation-1"
            >
            <template v-slot:item="props">
                <tr>
                    <td>{{ props.item.childcare_organization }}</td>
                    <td>{{ props.item.level }}</td>
                    <td>{{ props.item.child_age }}</td>
                    <td>{{ props.item.full_half_day }}</td>
                    <td>{{ props.item.type }}</td>
                </tr>
            </template>
        </v-data-table>
    </v-flex>
    </v-layout>
    </b-container>
  </div>
</template>

<script>
export default {
    components:{},
    computed:{},
    data() {
        return {
            childcareArray: {},
            selectedOption: {}, //store as array later, change, need specify
            headers:[
                {
                    text:"Organization",
                    align:'start',
                    sortable:false,
                },
                {
                    text:"Level",
                    align:'start',
                    sortable:false,
                },
                {
                    text:"Age of child",
                    align:'start',
                    sortable: false,
                },
                {
                    text:"Full or Half Day",
                    align:'start',
                    sortable: false,
                },
                {
                    text:'Type',
                    align:'start',
                    sortable: false,
                }
            ]
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
            },
        onCheckboxClicked: function(e) {
            console.log(e);
        },
        checkboxUpdated(newValue){
            console.log(newValue)
        }
        },
        //when childcarev2 is called, call api.childcarejs thru
        mounted() {
        this.getChildcareDetails();
        },
        
}
</script>