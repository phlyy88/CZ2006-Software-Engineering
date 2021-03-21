<template>
    <div class="vue-template">
        <div class="vertical-center">
            <div class="inner-block">
                <form>
                    <h3>Sign In</h3>

                    <div class="form-group">
                        <label>Email address</label>
                        <input
                            type="email"
                            class="form-control form-control-lg" 
                            v-model="email"
                        />
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            class="form-control form-control-lg"
                            v-model="password"
                        />
                    </div>

                    <button
                        type="submit"
                        class="btn btn-dark btn-lg btn-block"
                        @click="login">Sign In
                    </button> <!-- on click, call method "login" -->

                    <p class="forgot-password text-right mt-2 mb-4">
                        <router-link to="/forgot-password">Forgot password ?</router-link>
                    </p>

                    <div class="social-icons">
                        <ul>
                            <li><a href="#"><i class="fa fa-google"></i></a></li>
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        </ul>
                    </div>
                </form>
            </div>    
        </div>
    </div>
</template>



<script>
    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        watch: { //watch for changes in email and password value, not necessary for now
            email (value) {
                console.log('Email changed value', value)
            },
            password (value) {
                console.log('Password changed value', value)
            }
        },
        methods: {
            login () {
                console.log('sign in button was clicked')
            }
        }
    }
</script>