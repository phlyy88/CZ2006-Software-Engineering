<template>
    <div class="vue-template">
        <div class="vertical-center">
            <div class="inner-block">
                <form>
                    <h3>Sign Up</h3>

                    <div class="form-group">
                        <label>Email Address</label>
                        <input v-model="email" type="email" class="form-control" />
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <input v-model="password" type="password" class="form-control" />
                    </div>
            
                    <div class="form-group">
                        <label>First Name</label>
                        <input v-model="firstName" type="text" class="form-control"/>
                    </div>

                    <div class="form-group">
                        <label>Last Name</label>
                        <input v-model="lastName" type="text" class="form-control" />
                    </div>

                    <div class="form-group">
                        <label>Gender</label>
                        <b-form-select v-model="gender" :options="genderOptions"></b-form-select>
                        <p>Value: '{{ gender }}'</p>
                    </div>

                    <div class="form-group">
                        <label for="example-datepicker">Date of Birth</label>
                        <b-form-datepicker v-model="dob" class="mb-2"></b-form-datepicker>
                        <p>Value: '{{ dob }}'</p>
                    </div>

                    <div class="form-group">
                        <label>Annual Income</label>
                        <b-form-select v-model="income" :options="incomeOptions"></b-form-select>
                        <p>Value: '{{ income }}'</p>
                    </div>

                    <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

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
    export default {
        data() {
            return {
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
    }
</script>