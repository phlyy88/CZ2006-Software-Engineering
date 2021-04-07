<template>
    <div class="vue-template">
        <NavBar/>
        <b-container>
        <div class="vertical-center">
            <div class="inner-block">
                <form @submit.prevent="editUser">
                    <h3>Edit Profile</h3>
            
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
                        
                    </div>

                    <div class="form-group">
                        <label for="example-datepicker">Date of Birth</label>
                        <b-form-datepicker v-model="edit.dob" class="mb-2"></b-form-datepicker>
                        
                    </div>

                    <b-button variant="primary" type="submit">Confirm Changes</b-button>

                </form>
            </div>
        </div>
        </b-container>
    </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import NavBar from "./NavBar.vue"
export default {
    data() {
        return {
            edit: {
                email: '',
                firstName: '',
                lastName: '',
                gender: null,
                genderOptions: [
                    { value: null, text: 'Please select an option'},
                    { value: 'male', text: 'Male' },
                    { value: 'female', text: 'Female'}
                ],
                dob: ''
            },
            currentUser : {}
        }
    
    },
    components:{NavBar},
    methods: {
        async editUser() {
            try {
                console.log("before")
                await this.$http.post('user/edit', this.edit)
                this.$router.push("/mainpage")
                console.log("after")
                this.$swal("Success", "Edit was successful", "success") 
            } catch (err) {
                let error = err.response
                if (error.status == 409) {
                    this.$swal("Error", error.data.message, "error")
                } else {
                    this.$swal("Error", error.data.err.message, "error")
                }
            }
        },
        getUserDetails() {
            let token = localStorage.getItem("jwt")
            let decoded = VueJwtDecode.decode(token)
            this.currentUser = decoded
            this.edit.email = decoded.email
        }  
    },
    created() {
        this.getUserDetails()
    }
}
</script>