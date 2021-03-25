/** This class implements the ChildcareListing boundary class. */ 

<template>
    <div class = "container">
        <h1> List of childcares </h1>
<!-- v-for to loop through id
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
    <div class="vue-template">
        <div style="padding-top:300px;" class="vertical-center">
            <div class="inner-block">
                <h1> List of childcares </h1>
                <h1> List of childcares </h1>
                <h1> List of childcares </h1>
                <h1> List of childcares </h1>
                <h1> List of childcares </h1>
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
/**img_src = image */
<script>
import ChildcareService from '../services/ChildcareService'

export default({
    name:'ChildcareListing',
    data(){
        return{
            /**List of childcares retrieved from database */
            childcare:[],
            /**Whether there is an error */
            error:'',
            text:'',
            /**Contains response when user clicks checkboxes*/
            categories:[]
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

<style scoped>
label {
    display: block;
    margin: 20 px 0 10 px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#checkbox {
    display: inline-block;
}
</style>