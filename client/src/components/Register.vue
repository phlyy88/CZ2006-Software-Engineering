<template>
<b-modal ref="reg-modal">
      <div class="modal-body">
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
                    <!-- <p>Selected: '{{ register.gender }}'</p> -->
                </div>

                <div class="form-group">
                    <label for="example-datepicker">Date of Birth</label>
                    <b-form-datepicker v-model="register.dob" class="mb-2"></b-form-datepicker>
                    <!-- <p>Selected: '{{ register.dob }}'</p> -->
                </div>

                <div class="form-group">
                    <label>Annual Income</label>
                    <b-form-select v-model="register.income" :options="register.incomeOptions"></b-form-select>
                    <!-- <p>Selected: '{{ register.income }}'</p> -->
                </div>
            </form>
            </div>

    <div class="modal-footer">
            <button type="button" 
            class="btn btn-secondary"
            @click="registerUser()">
            Sign up
            </button>
            <!-- <button class="btn btn-light btn-lg btn-block" type="submit">Sign Up</button> -->
                <p class="forgot-password text-right">
                    Already registered? 
                    <router-link :to="{name: 'login'}">Login</router-link>
                </p>
    </div>
</b-modal>  

</template>

<script>
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
                    let response = await this.$http.post('user/register', this.register)
                    console.log(response)
                    let token = response.data.token
                    if (token) {
                        localStorage.setItem("jwt", token)
                        this.$router.push("/mainpage")
                        this.$swal("Success", "Registration was successful", "success")
                    } else {
                        this.$swal("Error", "Something went wrong", "error")
                    }
                } catch (err) {
                    let error = err.response
                    if (error.status == 409) {
                        this.$swal("Error", error.data.message, "error")
                    } else {
                        this.$swal("Error", error.data.err.message, "error")
                    }
                }
            },
            show(){
                this.$refs['reg-modal'].show();
            }
        }
    }
</script>