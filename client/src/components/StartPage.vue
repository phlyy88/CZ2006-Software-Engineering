<template>
  <div class = "pageView">
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
          img-src="https://lifestyle2.prod.content.iproperty.com/news/wp-content/uploads/sites/2/2017/08/25112917/HDB-house.jpg"
        >
          <div>
            <b-button
              type="button"
              ref="reg-button"
              @click="showRegModal()"
              data-toggle="modal"
              data-target="#RegForm"
              variant="info"
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
            variant="info"
          >
            <p1>Already have one? Login now!</p1>
          </b-button>
          <LoginForm ref="LoginForm" />
        </b-carousel-slide>

        <!-- Vehicle carousel slide -->
        <b-carousel-slide
          caption="Plan for your dream vehicle"
          text="Find out cost breakdowns for your vehicle - including ARF, OMV etc. now :)"
          img-src="https://cdn.motor1.com/images/mgl/MQWXX/s1/2020-honda-civic-si-coupe.jpg"
        >
          <div>
            <b-button
              type="button"
              ref="reg-button"
              @click="showRegModal()"
              data-toggle="modal"
              data-target="#RegForm"
              variant="info"
            >
              <p1>Not registered yet? Create an account!</p1>
            </b-button>
            <RegForm ref="RegForm" />
          </div>

          <b-button
          style="margin-top: 10px"
            align="right"
            ref="login-button"
            variant = "info"
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
          img-src="https://www.ourxplor.com/wp-content/uploads/2020/03/CCS-software-for-your-childcare-2.png"
        >
          <div>
            <b-button
              type="button"
              ref="reg-button"
              @click="showRegModal()"
              data-toggle="modal"
              data-target="#RegForm"
              variant="info"
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
            variant="info"
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