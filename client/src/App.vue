<template>
  <div>
    <header>
      <!-- Image and text -->
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img
            src="data:image/png;base64,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"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
          <strong style ="text-transform: uppercase;">
          Plan for your future</strong>
        </a>
      </nav>
    </header>

    <router-view/>

    <!-- Footer -->
    <footer class="page-footer font-small blue pt-4">
      <!-- Footer Links -->
      <div class="container-fluid text-center text-md-left">
        <!-- Grid row -->
        <div class="row">
          <!-- Grid column -->
          <div class="col-md-6 mt-md-0 mt-3">
            <!-- Content -->
            <h5 class="text-uppercase">Footer Content</h5>
            <p>
              Here you can use rows and columns to organize your footer content.
            </p>
          </div>
          <!-- Grid column -->

          <hr class="clearfix w-100 d-md-none pb-3" />

          <!-- Grid column -->
          <div class="col-md-3 mb-md-0 mb-3">
            <!-- Links -->
            <h5 class="text-uppercase">Links</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
            </ul>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 mb-md-0 mb-3">
            <!-- Links -->
            <h5 class="text-uppercase">Links</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
            </ul>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
      <!-- Footer Links -->

      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      links: ["About Us", "Contact Us"],
      slides: ["First", "Second", "Third"],
      items: [
        {
          src: "http://m1.sdimgs.com/sd_static/u/201312/52ac736ba8caa.jpg",
        },
        {
          src:
            "https://www.topteny.com/wp-content/uploads/2015/09/Ciprian-Mihai-3.jpg",
        },
        {
          src:
            "https://s3-ap-southeast-1.amazonaws.com/mindchamps-prod-wp/wp-content/uploads/2019/05/16224647/MindChamps-RaffelsTownclub-1045-1280x853.jpg",
        },
      ],
      login: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>

