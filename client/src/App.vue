<template>
  <div class="vue-template">
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-end fixed-top">
      <div class="container">
        <a class="navbar-brand float-left">
           10 Degrees
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/Register">Sign up</router-link>
          </li>
        </ul>
      </div>
    </nav>
./components/dataSource
    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
          <router-view />
      </div>
    </div>
  </div>
</template>