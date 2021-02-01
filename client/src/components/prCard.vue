<!-- 
NOTE: Scoped Slots
-->

<template>
<!-- <h2>{{ workout.name }}</h2> -->
<!-- <div class="pr-card" v-for="user in users" :key="user._id"> -->
<div class="pr-card">
    <h3>{{ userData.name }}</h3>
    <!-- <h4>{{ workout.name }}</h4> -->
    <p>Weight:<br> <span class="bold">{{ workout.weight }}</span></p>
    <p>Reps:<br> <span class="bold">{{ workout.reps }}</span></p>
    <p>Sets:<br> <span class="bold">{{ workout.sets }}</span></p>
    <slot :data="workout.name" :data2="data2" />
</div>

</template>

<script>

import { ref } from 'vue';

export default {
    props: {
        workout: Object,
        userData: Object,
        
    },
    setup() {

        const users = ref([]);

        const API_URL = 'http://192.168.1.105:5000/api/v1/prs/';

        async function getPRs() {
            const response = await fetch(API_URL);
            const json = await response.json();
            users.value = json;
        }

        getPRs();
        // console.log(PRs.value);

        return {
            users,
        }
    },
    data: ()=>({
        data: 'Test',
        data2: 'Test2',
        workoutName: '',
    }),

}
</script>

<style lang="scss">
    h2 {
        text-align: center;
    }
    .bold {
        font-weight: bold;
    }
    .pr-card {
        // width: 200px;
        width: 300px;
        max-width: 90%;
        padding: 1em;
        margin-bottom: 2em;
        // margin-right: 2em;
        box-shadow: 0px 5px 15px rgba($color:#2c3e50, $alpha: 0.3);
        border-radius: 5px;
        display: flex;
        // flex-direction: column;
        justify-content: space-between;
        align-items: center;

        h3 {
            // padding-bottom: 0.5em;
            // border-bottom: 2px solid #2c3e50;
            margin-right: 1em;
        }
        p {
            margin-right: 0.5em;

            &:last-child {
                margin-right: 0px;
            }
        }
        &:last-child {
            margin-right: 0px;
        }

    }
    


        

</style>