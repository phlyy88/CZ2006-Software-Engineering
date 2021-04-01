<template>
    <div class="vue-template">
        <div class="vertical-center">
            <div class="inner-block">
                <form @submit.prevent="loginUser">
                    <h3>Sign In</h3>

                    <div class="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            class="form-control form-control-lg" 
                            v-model="login.email"
                        />
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            class="form-control form-control-lg"
                            v-model="login.password"
                        />
                    </div>

                    <button
                        type="submit"
                        class="btn btn-dark btn-lg btn-block"
                    >Sign In
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
                login: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            async loginUser() {
                try {
                    let response = await this.$http.post("user/login", this.login)
                    let token = response.data.token
                    localStorage.setItem("jwt", token)
                    if (token) {
                        this.$swal("Success", "Login Successful", "success")
                        this.$router.push("/mainpage")
                    }
                } catch (err) {
                    this.$swal("Error", "Something Went Wrong", "error")
                    console.log(err.response)
                }
            }
        }
    }
</script>