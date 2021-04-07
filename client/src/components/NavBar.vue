<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" id = "navbar">
      <b-navbar-brand href="/mainpage">
        <strong style="text-decoration: underline">
          Home
        </strong>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav> </b-navbar-nav>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em style="color: black">{{user.email}}</em>
            </template>
            <b-dropdown-item href="/editprofile">Edit Profile</b-dropdown-item>
            <b-dropdown-item href="/plan">My Saved Plans</b-dropdown-item>
            <b-dropdown-item @click="logUserOut">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props:{
    user:{
      type:Object
    }
  },
  methods: {
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    },
  }
};
</script>