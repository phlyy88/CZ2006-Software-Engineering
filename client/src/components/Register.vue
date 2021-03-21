<template>
    <div>
        <h1>Register</h1>
        <!-- use v-models for binding -->
        <input
        type = "email"
        name = "email"
        v-model = email 
        placeholder= "email"/>
        <br>
        <input
        type = "password"
        name = "password"
        v-model = password
        placeholder= "password"/>
        <br>
        <!-- on click call register method -->
        <button @click="register">Register</button>
    </div>
</template>



<script>
import AuthenticationServices from '@/services/AuthenticationServices'
    export default {
        data() {
            return {
                email: 'abc',
                password: '123'
            }
        },
        //How two way binding works to update datamodels when value in input box chnages
        watch: {
            email(value){
                console.log('email has changed', value )
            }
        },
        methods:{
      async register () {
          // call upon the endpoint
                const response = await AuthenticationServices.register({
                    email: this.email,
                    password: this.password
                })
                // console print sentence and email, password
                //console.log('register button clicked', this.email, this.password)
                // print data in the function
                console.log(response.data)
            }
        },
        mounted (){ // email input changes to hello world after 2 seconds
            setTimeout(function(){
                this.email = "hello world"
            }, 2000)

        }
    }
</script>