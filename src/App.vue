<template>
  <div id="app">
    <div class="banner-container">
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#" class="logo">P.H</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template slot="button-content"><em>User</em></template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div>
      <Home />
    </div>
    <div>
      <About />
    </div>
    <div>
      <Portfolio />
    </div>
    <div class="footer">
      Footer
    </div>
  </div>
</template>

<script>
import Home from './views/Home'
import About from './views/About'
import Portfolio from './views/Portfolio'

export default {
  name: 'app',
  components: {
    Home,
    About,
    Portfolio
  }
}
</script>

<style scoped lang="scss">
  .banner-container {
    position: sticky;
    top: 0;
  }

  .logo {
    font-weight: bold;
    font-size: 60px;
    padding-left: 15px;
  }

  .footer {
    text-align: center;
    padding: 50px 50px 50px 50px;
    background-color: rgb(43, 43, 43);
    color: lightgray;
  }
</style>
