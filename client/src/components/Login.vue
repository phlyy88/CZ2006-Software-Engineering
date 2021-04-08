<template>
<b-modal ref="login-modal" hide-footer>
    <div class="modal-body">
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

            <b-button
                type="submit"
                variant = "info"
                style="margin-top: 10px"
            ><p1 style = "color:white">Sign In</p1>
            </b-button> <!-- on click, call method "login" -->
        </form>
    </div>    
</b-modal>
</template>

<script>
    export default {
        data() {
            return {
                login: {
                    email: '',
                    password: ''
                },
                //toPass:null,
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
                        //this.toPass = this.login.email
                        this.$router.push("/mainpage")
                    }
                } catch (err) {
                    this.$swal("Error", "Invalid login credentials", "error")
                    console.log(err.response)
                }
            },
            showModal(){
                this.$refs['login-modal'].show();
            }
        }

};
</script>