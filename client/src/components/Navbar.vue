<template>
    <div id="nav">
    <router-link to="/">Home</router-link>
    <img src="../assets/lightweight_fitness.png" alt="">
    <router-link to="/users">Users</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    #nav {
        display: flex;
        justify-content: space-around;
        align-items: center;

        a {
            text-decoration: none;
        }
        img {
            width: 300px;
            max-width: 50%;
        }
    }
</style>