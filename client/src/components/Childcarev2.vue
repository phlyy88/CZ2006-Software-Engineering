<template>
<v-app>
<v-card>
  <v-container fluid>
      <v-row
        align="center"
      >
        <v-col cols="12">
        <v-combobox
          v-model="select"
          :items = "items"
          label="Combobox"
          multiple
          outlined
          dense
          overflow = true
        ></v-combobox>
      </v-col>
      </v-row>

<!-- <b-container fluid> -->
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
<!-- </b-container> -->
      <!-- </v-container>
    </v-card-text>
  </v-card> -->
  </v-container>
  </v-card>
</v-app>
</template>

<script>
export default {
    components:{},
    computed:{},
    data() {
        return {
        select: ['EtonHouse Schools'],
        items: [
            'EtonHouse Schools', 'Lorna Whiston', 'MindChamps', 'Skool4kidz',
          'My First Skool', 'Brighton Montessori', "Pat's Schoolhouse", 
          'Between Two Trees', 'My Little Skool', 'Greentree Montessori',
          'Superland', 'Cherie Hearts', 'PCF Sparkletots Pre-school', 'MY World Preschool',
          'E-Bridge Pre-school',
        ],
            childcareArray: {},
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
            ],
            // filterFields:[
            //     {text:"Organization", value:'childcare_organization', type:'text'},
            //     {text:"Level", value:'level', type:'text'},
            //     {text:"Age of child", value:'child_age', type:'text'},
            //     {text:"Full or Half Day", value:'full_half_day', type:'text'},
            //     {text:"Type", value:'type', type:'text'},
            // ],
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
        // watch(){
        //     immediate:true;
        //     handler() {
        //         this.childcare_organization = this.childcareArray.childcare_organization;
        //     }
        // }
}
</script>