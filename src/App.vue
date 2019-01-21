<template>
  <div id="app">
    <router-view></router-view>
    <div id="nav">
      <router-link to="/">1. Home </router-link> |
      <router-link to="/form">2. Form </router-link> |
      <router-link to="/checkbox">3. CheckBox </router-link>
    </div>
  </div>
</template>

<style>
#app {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

#title {
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  color: #2c3e50;
  margin-bottom: 20px;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
