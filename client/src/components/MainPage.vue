<template>
  <div style="padding-top:300px;" class="vertical-center">
    <div class="inner-block">
      <h2>Email : {{ user.email }}</h2>
      <button @click="logUserOut" class="btn btn-dark btn-lg btn-block">Log out</button>
    </div>
  </div>
</template>

<script>
  import VueJwtDecode from "vue-jwt-decode"
  export default {
    data() {
      return {
        user: {}
      }
    },
    methods: {
      getUserDetails() {
        let token = localStorage.getItem("jwt")
        let decoded = VueJwtDecode.decode(token)
        this.user = decoded
      },
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