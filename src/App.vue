<template>
  <div id="app">
    <h1 class="text-4xl">Dragon Raja Color-Text Generator</h1>
    <p class="madelove">Made with <span class="material-icons">favorite</span> by Malice(S1) - ORCA</p>
    <div id="nav">
      <router-link to="/">Single Color Text</router-link> |
      <router-link to="/rainbow-text">Rainbow Color Text</router-link> |
      <router-link to="/saved-text">Saved Text</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
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
.material-icons {
  vertical-align: middle;
}

.madelove {
  font-size: 14px;
  color: #607D8B;

  .material-icons {
    color: #D32F2F;
  }
}
input:focus, button:focus, textarea:focus {
  outline: none;
}
</style>
