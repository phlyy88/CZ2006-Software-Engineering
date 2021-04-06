
<template>
<div class="carousel-item">
  <img src="http://m1.sdimgs.com/sd_static/u/201312/52ac736ba8caa.jpg'" alt="...">
  <div class="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
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