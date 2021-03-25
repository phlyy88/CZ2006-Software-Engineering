<template>
    <div class="vue-template">
        <div style="padding-top:300px;" class="vertical-center"> <!-- padding for navbar -->
            <div class="inner-block">
                <form @submit.prevent="editUser">
                    <h3>Edit Profile</h3>

                    <div class="form-group">
                        <label>Email Address</label>
                        <input v-model="edit.email" type="email" class="form-control" />
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <input v-model="edit.password" type="password" class="form-control" />
                    </div>
            
                    <div class="form-group">
                        <label>First Name</label>
                        <input v-model="edit.firstName" type="text" class="form-control"/>
                    </div>

                    <div class="form-group">
                        <label>Last Name</label>
                        <input v-model="edit.lastName" type="text" class="form-control" />
                    </div>

                    <div class="form-group">
                        <label>Gender</label>
                        <b-form-select v-model="edit.gender" :options="edit.genderOptions"></b-form-select>
                        <p>Value: '{{ edit.gender }}'</p>
                    </div>

                    <div class="form-group">
                        <label for="example-datepicker">Date of Birth</label>
                        <b-form-datepicker v-model="edit.dob" class="mb-2"></b-form-datepicker>
                        <p>Value: '{{ edit.dob }}'</p>
                    </div>

                    <div class="form-group">
                        <label>Annual Income</label>
                        <b-form-select v-model="edit.income" :options="edit.incomeOptions"></b-form-select>
                        <p>Value: '{{ edit.income }}'</p>
                    </div>
                    <!-- on click call editUser method -->
                    <button class="btn btn-dark btn-lg btn-block" type="submit">Edit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                edit: {
                    /** 
                     * Identical as User data
                     */
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
            /** 
             * Awaits a response from userController.editUser before flashing message with appropriate message
             */
            async editUser() {
                // try {
                //     let response = await this.$http.post("/user/login", this.login);
                //     let token = response.data.token;
                //     localStorage.setItem("jwt", token);
                //     if (token) {
                //         this.$swal("Success", "Edit Successful", "success");
                //         this.$router.push("/mainpage");
                //     }
                // } catch (err) {
                //     this.$swal("Error", "Something Went Wrong", "error");
                //     console.log(err.response);
                // }
            }
        }
    }
</script>