<template>
  <div>
    <main>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="2000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="720"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide
          caption="Plan for your dream home"
          text="From resales to HDB. Get more information now :)"
          img-src="http://m1.sdimgs.com/sd_static/u/201312/52ac736ba8caa.jpg"
        >
          <div>
            <b-button
              type="button"
              ref="reg-button"
              @click="showRegModal()"
              data-toggle="modal"
              data-target="#RegForm"
              variant="primary"
            >
              <p1>Not registered yet? Create an account!</p1>
            </b-button>
            <RegForm ref="RegForm" />
          </div>

          <b-button
            align="right"
            ref="login-button"
            @click="loginModal()"
            data-toggle="modal"
            data-target="#LoginForm"
            style="margin-top: 10px"
            variant="primary"
          >
            <p1>Already have one? Login now!</p1>
          </b-button>
          <LoginForm ref="LoginForm" />
        </b-carousel-slide>

        <!-- Vehicle carousel slide -->
        <b-carousel-slide
          caption="Plan for your dream vehicle"
          text="Find out cost breakdowns for your vehicle - including ARF, OMV etc. now :)"
          img-src="https://www.topteny.com/wp-content/uploads/2015/09/Ciprian-Mihai-3.jpg"
        >
          <div>
            <b-button
              type="button"
              ref="reg-button"
              @click="showRegModal()"
              data-toggle="modal"
              data-target="#RegForm"
              variant="primary"
            >
              <p1>Not registered yet? Create an account!</p1>
            </b-button>
            <RegForm ref="RegForm" />
          </div>

          <b-button
          style="margin-top: 10px"
            align="right"
            ref="login-button"
            variant = "primary"
            @click="loginModal()"
            data-toggle="modal"
            data-target="#LoginForm"
          >
            <p1>Already have one? Login now!</p1>
            </b-button>
          <LoginForm ref="LoginForm" />
        </b-carousel-slide>

        <!-- Childcare carousel slide -->
        <b-carousel-slide
          caption="Plan for your child's future"
          text="Find out cost and subsidies available at this one-stop destination"
          img-src="https://s3-ap-southeast-1.amazonaws.com/mindchamps-prod-wp/wp-content/uploads/2019/05/16224647/MindChamps-RaffelsTownclub-1045-1280x853.jpg"
        >
          <div>
            <b-button
              type="button"
              ref="reg-button"
              @click="showRegModal()"
              data-toggle="modal"
              data-target="#RegForm"
              variant="primary"
            >
              <p1>Not registered yet? Create an account!</p1>
            </b-button>
            <RegForm ref="RegForm" />
          </div>

          <b-button
          style="margin-top: 10px"
            align="right"
            ref="login-button"
            @click="loginModal()"
            data-toggle="modal"
            data-target="#LoginForm"
            variant="primary"
          >
            <p1>Already have one?</p1>
            <h>Login</h>
          </b-button>
          <LoginForm ref="LoginForm" />
        </b-carousel-slide>
      </b-carousel>
    </main>
  </div>
</template>

<script>
import RegForm from "./Register";
import LoginForm from "./Login";
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    showRegModal() {
      this.$refs.RegForm.show();
    },
    // showRegModal(){
    //   this.$refs.RegForm.show();
    // },
    loginModal() {
      this.$refs.LoginForm.showModal();
    },
  },
  components: {
    RegForm,
    LoginForm,
  },
};
</script>