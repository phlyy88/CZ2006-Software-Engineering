<template>
  <div class="vertical-center">
    <div class="inner-block">
      <h2>Email : {{ user.email }}</h2>
      <!-- on click log user out -->
      <button @click="logUserOut" class="btn btn-dark btn-lg btn-block">Log out</button>
    </div>
  </div>
</template>

<script>
  import VueJwtDecode from "vue-jwt-decode"
  export default {
    data() {
      return {
        /** 
         * User object
         */
        user: {}
      }
    },
    methods: {
      /**
       * Get user object details
       */
      getUserDetails() {
        let token = localStorage.getItem("jwt")
        let decoded = VueJwtDecode.decode(token)
        this.user = decoded
      },
      /**
       * Log current user out
       */
      logUserOut() {
        localStorage.removeItem("jwt")
        this.$router.push("/")
      }
    },
    created() {
      this.getUserDetails();
    }
  }
</script>