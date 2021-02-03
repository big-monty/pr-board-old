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
@import "/scss/fontawesome.scss";
@import "/scss/solid.scss";
// @import "/scss/brands.scss";

:root {
  --main: rgb(238, 170, 170);
  --mainDark: rgb(165, 72, 72);
  --text: #310e0e;
  --white: white;
}

body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text);
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: var(--text);
    }
  }
}
</style>
