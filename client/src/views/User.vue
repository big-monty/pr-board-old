<template>
  <ul>
    <li>
      <!-- {{ user.name }} -->
    </li>
  </ul>
</template>

<script>

import { ref } from 'vue';
// import { useRouter } from 'vue-router';


export default {
    setup() {

        // const { route } = useRouter();
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

        function getUser() {
          // const { id } = route.params;
          // console.log(id);
        }

        getUser();

        return {
            users,
        }
    },
}
</script>

<style>

</style>