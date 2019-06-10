<template>
  <div id="app">
    <div class="nav-bar-container">
      <h1>Páll Helgi Sigurðarson</h1>
      <b-button class="log-in">Log In</b-button>
    </div>
    <div class="name-div"></div>
    <div id="nav">
      <router-link to="/">About me</router-link>|
      <router-link to="/education">Education</router-link>|
      <router-link to="/experience">Experience</router-link>|
      <router-link to="/interests">Interests</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
      color: #003e70;
    }
  }
}
/*
.name-div {
  padding-top: 100px;
  h1 {
    font-family: "Georgia", "Helvetica";
    font-size: 100px;
  }
}
*/
.nav-bar-container {
  background-color: #003e70;
  padding: 25px;
  h1 {
    font-family: "Georgia", "Helvetica";
    font-size: 100px;
    color: azure;
  }
}

.log-in {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
