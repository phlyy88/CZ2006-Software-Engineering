<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" id = "navbar">
      <b-button size="lg" variant="light" href="/mainpage">
        <b-icon font-scale="1.5" icon="house-door-fill"></b-icon>
      </b-button>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-dropdown variant="light" class="m-md-2">
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em style="color: black">{{user.email}}</em>
            </template>
            <b-dropdown-item href="/plan">My Saved Plans</b-dropdown-item>
            <b-dropdown-item @click="logUserOut">Sign Out</b-dropdown-item>
          </b-dropdown>
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
    }
  }
};
</script>