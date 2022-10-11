<template>
  <div id="app">
    <h1>主应用</h1>
    <nav>
      <router-link to="/v2-app-1">v2-app-1</router-link>
      |
      <router-link to="/v2-app-2">v2-app-2</router-link>
    </nav>

    <div id="v2-app-1"></div>
    <div id="v2-app-2"></div>
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
