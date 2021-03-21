<template>
    <div class="vue-template">
        <div style="padding-top:300px;" class="vertical-center"> <!-- padding for navbar -->
            <div class="inner-block">
                <form @submit.prevent="registerUser">
                    <h3>Sign Up</h3>

                    <div class="form-group">
                        <label>Email Address</label>
                        <input v-model="register.email" type="email" class="form-control" />
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <input v-model="register.password" type="password" class="form-control" />
                    </div>
            
                    <div class="form-group">
                        <label>First Name</label>
                        <input v-model="register.firstName" type="text" class="form-control"/>
                    </div>

                    <div class="form-group">
                        <label>Last Name</label>
                        <input v-model="register.lastName" type="text" class="form-control" />
                    </div>

                    <div class="form-group">
                        <label>Gender</label>
                        <b-form-select v-model="register.gender" :options="register.genderOptions"></b-form-select>
                        <p>Value: '{{ register.gender }}'</p>
                    </div>

                    <div class="form-group">
                        <label for="example-datepicker">Date of Birth</label>
                        <b-form-datepicker v-model="register.dob" class="mb-2"></b-form-datepicker>
                        <p>Value: '{{ register.dob }}'</p>
                    </div>

                    <div class="form-group">
                        <label>Annual Income</label>
                        <b-form-select v-model="register.income" :options="register.incomeOptions"></b-form-select>
                        <p>Value: '{{ register.income }}'</p>
                    </div>

                    <button class="btn btn-dark btn-lg btn-block" type="submit">Sign Up</button>

                    <p class="forgot-password text-right">
                        Already registered 
                        <router-link :to="{name: 'login'}">sign in?</router-link>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import swal from 'vue-sweetalert2'
    export default {
        data() {
            return {
                register: {
                    email: '',
                    password: '',
                    firstName: '',
                    lastName: '',
                    gender: null,
                    genderOptions: [
                        { value: null, text: 'Please select an option'},
                        { value: 'male', text: 'Male' },
                        { value: 'female', text: 'Female'}
                    ],
                    dob: '',
                    income: null,
                    incomeOptions: [
                        { value: null, text: 'Please select an income range'},
                        { value: 15000, text: '10,000 - 19,999' },
                        { value: 35000, text: '20,000 - 49,999' },
                        { value: 65000, text: '50,000 - 79,999' },
                        { value: 80000, text: '>80,000'}
                    ]
                }
            }
        },
        methods: {
            async registerUser() {
                try {
                    let response = await this.$http.post("/user/register", this.register)
                    console.log(response)
                    let token = response.data.token
                    if (token) {
                        localStorage.setItem("jwt", token)
                        this.$router.push("/mainpage")
                        swal("Success", "Registration Was successful", "success")
                    } else {
                        swal("Error", "Something Went Wrong", "error")
                    }
                } catch (err) {
                    let error = err.response
                    if (error.status == 409) {
                        swal("Error", error.data.message, "error")
                    } else {
                        swal("Error", error.data.err.message, "error")
                    }
                }
            }
        }
    }
</script>