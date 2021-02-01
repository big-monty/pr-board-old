<template>
  <Navbar />
  <router-view />
</template>

<script>

import Navbar from '@/components/Navbar';

export default {
  components: {
    Navbar,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: darken(#AEE, 50%);
    }
  }
}
</style>
