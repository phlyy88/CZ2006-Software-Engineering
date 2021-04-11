<template>
    <b-modal ref="reg-modal" hide-footer>
      <div class="modal-body">
        <form @submit.prevent="registerUser">
          <h3>Sign Up</h3>

          <div class="form-group"> <!-- let user enter their email address-->
            <label>Email Address</label>
            <b-form-input v-model="register.email" type="email" class="form-control" required></b-form-input>
          </div>
          <div class="form-group"> <!-- let user enter their password-->
            <label>Password</label>
            <b-form-input
              v-model="register.password"
              type="password"
              :state="passwordState"
              aria-describedby="password-live-help password-live-feedback"
              class="form-control"
              required
            ></b-form-input>
            <b-form-invalid-feedback id="password-live-feedback"> <!-- tell the user the password complexity requirements-->
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

          <div class="form-group"> <!-- let user enter their first name-->
            <label>First Name</label> 
            <b-form-input
              v-model="register.firstName"
              type="text"
              class="form-control"
              required
            ></b-form-input>
          </div>

          <div class="form-group"> <!-- let user enter their last name-->
            <label>Last Name</label>
            <b-form-input
              v-model="register.lastName"
              type="text"
              class="form-control"
              required
            ></b-form-input>
          </div>

          <div class="form-group"> <!-- let user enter their gender-->
            <label>Gender</label>
            <b-form-select
              v-model="register.gender"
              :options="register.genderOptions"
              required
            ></b-form-select>
          </div>
          <!-- submit all the variables that the user pass in earlier
              @params firstName, lastName, gender, email, password
              @return user object-->
          <b-button 
          type="submit" 
          variant="info"
          >
            <p1 style="color: white">Sign Up</p1></b-button
          >
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
  computed: {
    // function to ensure the password contains all the complexity requirement
    // @params password
    // return true/false
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
    // function to add the user into database upon successful registration
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