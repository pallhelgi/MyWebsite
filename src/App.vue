<template>
  <div id="app">
    <header>
      <div class="logo-container">
        <a href="#"><img src="../src/assets/logo.png" alt="Logo" width="100px" height="50px"></a>
      </div>
      <nav>
        <ul class="nav-links">
          <li><a class="nav-link" href="#about" title="About me">About me</a></li>
          <li><a class="nav-link" href="#projects" title="Projects">Projects</a></li>
          <li><a class="nav-link-login"  v-b-popover.hover.bottom="'Dsiabled!'">Log In</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <div v-if="supergroupOn">
        <div>
          <Map v-on:toggleGroupToParent="toggleSupergroup" />
        </div>
      </div>
      <div v-else>
        <div>
          <Home id="home"/>
        </div>
        <div>
          <About id="about"/>
        </div>
        <div>
          <Projects id="projects" v-on:toggleGroupToParent="toggleSupergroup" />
        </div>
      </div>
    </main>
    <footer>
      <div class="logo-footer-container">
        <img src="../src/assets/logo.png" alt="Logo" width="100px" height="50px">
      </div>
    </footer>
  </div>
</template>

<script>
import Home from './views/Home'
import About from './views/About'
import Projects from './views/Projects'
import Map from './views/Map'

export default {
  name: 'app',
  components: {
    Home,
    About,
    Projects,
    Map
  },
  data() {
    return {
      supergroupOn: false
    }
  },
  methods: {
    toggleSupergroup(event) {
      this.supergroupOn = !this.supergroupOn
    }
  }
  
}
</script>

<style scoped lang="scss"> 
  header {
    position: fixed;
    min-width: 320px;
    width: 100%;
    height: 100px;
    left: 0px;
    top: 0px;
    background: #FFFFFF;
    border-style: solid;
    border-width: 0 0 2px 0;
    border-color: black;
    display: flex;
    align-items: center;
  }

  .logo-container {
    padding-left: 20px;
  }

  nav {
    width: 100%;
    padding: 20px;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    float: right;
    align-items: center;
    margin: 0;
  }

  .nav-link {
    font-family: sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    text-decoration: none;
    color: black; 
  }

  .nav-link:hover {
    font-weight: bold;
  }

  .nav-link::after {
    display: block;
    content: attr(title);
    font-weight: bold;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  .nav-link-login {
    font-size: 25px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: normal;
    text-decoration: none;
    color: black; 
    cursor: pointer;
  }

  li {
    float: right;
    margin: 10px;
  }

  footer {
    width: 100%;
    height: 200px;
    background: black;
    display: flex;
    align-items: center;
  }

  .logo-footer-container {
    margin: auto;
  }
</style>
