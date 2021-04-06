
<template>
<div>
<v-app>
  <v-carousel
    cycle
    height=100%
    hide-delimiter-background
    show-arrows-on-hover
  >
    <!-- <v-carousel-item
      v-for="(carousel_image, i) in carousel_images"
      :key="i"
      :src="carousel_image.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    > -->
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
      <!-- <v-sheet
        :color="colors[i]"
        height="100%"
      > -->
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">
            {{ slide }} Slide
          </div>
        </v-row>
      <!-- </v-sheet> -->
    <!-- </v-carousel-item> -->
  </v-carousel>
</v-app>
<!-- <v-container class="choice of register/login">
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="6"
        md="8"
      >
      <v-card
        class="mx-auto"
        max-width="400"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://www.jennygarrett.global/storage/2020/01/shutterstock_280658234.jpg"
        >
          <v-card-title>Top 10 Australian beaches</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">
          Number 10
        </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Whitehaven Beach</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>

        <v-card-actions>
          <v-btn
            color="orange"
            text
          >
            Share
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-col>
      <v-col
        cols="6"
        md="4"
      >
                <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://www.jennygarrett.global/storage/2020/01/shutterstock_280658234.jpg"
    >
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      Number 10
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>
    </v-card-actions>
  </v-card>
      </v-col>
    </v-row>
  </v-container> -->
</div>
</template>

<script>
//import Navbar from '@/components/NavBar'
//import mdiVue from 'mdi-vue'
export default {
  name: 'App',
  data () {
    return {
        slides: [
          'First',
          'Second',
          'Third',
        ],
        items: [
          {
            src: 'http://m1.sdimgs.com/sd_static/u/201312/52ac736ba8caa.jpg',
          },
          {
            src: 'https://www.topteny.com/wp-content/uploads/2015/09/Ciprian-Mihai-3.jpg',
          },
          {
            src: 'https://s3-ap-southeast-1.amazonaws.com/mindchamps-prod-wp/wp-content/uploads/2019/05/16224647/MindChamps-RaffelsTownclub-1045-1280x853.jpg'
          },
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
  },
}
</script>