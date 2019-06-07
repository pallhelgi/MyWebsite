<template>
  <div id="app">
    <div class="nav-bar-container">
      <b-button class="log-in">
        Log In
      </b-button>
    </div>
    <div class="name-div">
      <h1>Páll Helgi</h1>
    </div>
    <div id="nav">
      <router-link to="/">About me</router-link> |
      <router-link to="/">Education</router-link> |
      <router-link to="/">Experience</router-link> |
      <router-link to="/about">Interests</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.name-div {
  padding-top: 100px;
}

.nav-bar-container {
  background-color: #42b983;
  padding: 50px;
}

.log-in {
   position: absolute;
   top: 0;
   right: 0;
}

</style>
