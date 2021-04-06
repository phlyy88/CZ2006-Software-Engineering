
<template>
<div>
  <v-app>
    <v-toolbar color="primary lighten-1"
    >
      <v-toolbar-title class="text-center white--text"
      >Family Planning</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-toolbar>

  <v-carousel
    cycle
    
    height=1100
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
    >
    <v-btn color="error" 
    align = "center"
    justift = "center"
    dark large>{{item.title}}</v-btn>
    </v-carousel-item>

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

  <v-footer
    color="primary lighten-1"
    padless
  >
  
  <!-- <v-container> -->
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
      </v-row>
    <!-- </v-container> -->
  </v-footer>
  </v-app>
</div>
</template>

<script>
//import Navbar from '@/components/NavBar'
//import mdiVue from 'mdi-vue'
export default {
  name: 'App',
  data () {
    return {
        links: [
        'About Us',
        'Contact Us',
      ],
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