<template>
    <div class = "container">
        <h1> List of childcares </h1>
<!-- v-for to loop through 
id- mongodb generated id field-->
        <hr>
        <p class = "error" v-if="error">{{ error }}></p>
        <div class="childcares-container">
            <div class="childcare"
                v-for = "(childcare, index) in childcare"
                v-bind:item="childcare"
                v-bind:index="index"
                v-bind:key="childcare._id"
            >
            </div>
            <div id = "checkboxes">
                <label>childcare_organization</label>
                <d-checkbox inline checked = "childcare_organization" value="" v-model="childcare.categories"/>
                <label>Ninjas</label>
                <input type="checkbox" value="" v-model="childcare.categories"/>
                <label>Ninjas</label>
                <input type="checkbox" value="" v-model="childcare.categories"/>
                <label>Ninjas</label>
                <input type="checkbox" value="" v-model="childcare.categories"/>
                <label>Ninjas</label>
                <input type="checkbox" value="" v-model="childcare.categories"/>
                <label>Ninjas</label>
            </div>
            <div :style="{backgroundImage:'url(https://api.time.com/wp-content/uploads/2020/03/child-care-coronavirus.jpg)'}">
            </div>
        </div>
    </div>
</template>

<script>
import ChildcareService from '../services/ChildcareService'
export default({
    name:'ChildcareListing',
    data(){
        return{
            childcare:[],
            error:'',
            text:''
        }
    },
    async created(){
        try{
            this.childcare = await ChildcareService.getChildcare;    
        } catch(err){
            this.error = err.message;
            //object has message value
        }
    }
})
</script>


