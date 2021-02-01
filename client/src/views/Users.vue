<template>
  <ul>
    <li v-for="user in users" :key="user._id">
      {{ user.name }}
    </li>
  </ul>
</template>

<script>

import { ref } from 'vue';

export default {
    setup() {

        const users = ref([]);

        const API_URL = 'http://192.168.1.105:5000/api/v1/prs/';

        async function getPRs() {
            const response = await fetch(API_URL);
            const json = await response.json();
            users.value = json;
            // console.log(users.value);
        }

        getPRs();
        // console.log(PRs.value);

        return {
            users,
        }
    },
}
</script>

<style>

</style>