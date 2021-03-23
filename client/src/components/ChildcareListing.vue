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

            {{ `${post.createdAt.getDate()}/${post.createdAt.getDate()}`}}
            <p class = "text">{{ post.text}} </p>
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


