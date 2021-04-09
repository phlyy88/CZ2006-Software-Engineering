<template>
    <b-modal ref="reg-modal" hide-footer>
      <div class="modal-body">
        <form @submit.prevent="registerUser">
          <h3>Sign Up</h3>

          <div class="form-group">
            <label>Email Address</label>
            <b-form-input v-model="register.email" type="email" class="form-control"></b-form-input>
          </div>
          <div class="form-group">
            <label>Password</label>
            <b-form-input
              v-model="register.password"
              type="password"
              :state="passwordState"
              aria-describedby="password-live-help password-live-feedback"
              class="form-control"
            ></b-form-input>
            <b-form-invalid-feedback id="password-live-feedback">
              Password requires:
              <br>
              1. At least 10 characters
              <br>
              2. At least 1 uppercase and lowercase character
              <br>
              3. At least 1 numeric character
              <br>
              4. At least 1 special character 
            </b-form-invalid-feedback>
          </div>

          <div class="form-group">
            <label>First Name</label>
            <b-form-input
              v-model="register.firstName"
              type="text"
              class="form-control"
            ></b-form-input>
          </div>

          <div class="form-group">
            <label>Last Name</label>
            <b-form-input
              v-model="register.lastName"
              type="text"
              class="form-control"
            ></b-form-input>
          </div>

          <div class="form-group">
            <label>Gender</label>
            <b-form-select
              v-model="register.gender"
              :options="register.genderOptions"
            ></b-form-select>
          </div>
<!-- 
          <div class="form-group">
            <label for="example-datepicker">Date of Birth</label>
            <b-form-datepicker
              v-model="register.dob"
              class="mb-2"
            ></b-form-datepicker>
          </div> -->

          <b-button 
          type="submit" 
          variant="info"
          >
            <p1 style="color: white">Sign Up</p1></b-button
          >
          <!-- on click, call method "login" -->
        </form>
      </div>
    </b-modal>
</template>

<script>
export default {
  data() {
    return {
      register: {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        gender: null,
        genderOptions: [
          { value: null, text: "Please select an option" },
          { value: "male", text: "Male" },
          { value: "female", text: "Female" },
        ],
        dob: ""
      },
    };
  },
  //hello@gmail.comA4
  computed: {
    passwordState() {
      if (this.register.password=="") {
        return null
      }
      var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{10,100}$/
      if (this.register.password.match(passw)) {
        return true
      } else {
        return false
      }
      
    }
  },
  methods: {
    async registerUser() {
      try {
        let response = await this.$http.post("user/register", this.register);
        console.log(response);
        let token = response.data.token;
        if (token) {
          localStorage.setItem("jwt", token);
          this.$router.push("/mainpage");
          this.$swal("Success", "Registration was successful", "success");
        } else {
          this.$swal("Error", "Something went wrong", "error");
        }
      } catch (err) {
        let error = err.response;
        if (error.status == 409) {
          this.$swal("Error", error.data.message, "error");
        } else {
          this.$swal("Error", error.data.err.message, "error");
        }
      }
    },
    show() {
      this.$refs["reg-modal"].show();
    },
  },
};
</script>