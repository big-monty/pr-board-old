<!-- 
NOTE: Scoped Slots
-->

<template>
    <div class="prs">
        <div class="muscle-group" id="arms">
            <h2>Arms</h2>
            <h3 class="mid-title">Biceps</h3>
            <div class="muscle-group-container">
                <div class="prs-container">
                    <h3>Dumbbell Curl</h3>
                    <prCard :workout="user.workouts.arms.biceps.dumbbellCurl" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Easy-Bar Curl</h3>
                    <prCard :workout="user.workouts.arms.biceps.barCurl" :userData="user" v-for="user in users" :key="user._id">
                    </prCard>
                </div>
                <div class="prs-container">
                    <h3>Isolated Bar Curl</h3>
                    <prCard :workout="user.workouts.arms.biceps.isolatedBarCurl" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Hammer Curl</h3>
                    <prCard :workout="user.workouts.arms.biceps.hammerCurl" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Cable Rope Curl</h3>
                    <prCard :workout="user.workouts.arms.biceps.ropeCableCurl" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Cable Bar Curl</h3>
                    <prCard :workout="user.workouts.arms.biceps.barCableCurl" :userData="user" v-for="user in users" :key="user._id" />
                </div>
            </div>
        <h3 class="mid-title">Triceps</h3>
            <div class="muscle-group-container">
                <div class="prs-container">
                    <h3>Tricep Pushdown</h3>
                    <prCard :workout="user.workouts.arms.triceps.tricepPushDown" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Tricep Pulldown</h3>
                    <prCard :workout="user.workouts.arms.triceps.tricepPullDown" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Skull Crushers</h3>
                    <prCard :workout="user.workouts.arms.triceps.skullCrushers" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Close Grip Benchpress</h3>
                    <prCard :workout="user.workouts.arms.triceps.closeGripBenchpress" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Tricep Kickback</h3>
                    <prCard :workout="user.workouts.arms.triceps.tricepKickback" :userData="user" v-for="user in users" :key="user._id" />
                </div>
            </div>
        </div>
        <div class="muscle-group" id="chest">
            <h2>Chest</h2>
            <div class="muscle-group-container">
                <div class="prs-container">
                    <h3>Benchpress</h3>
                    <prCard :workout="user.workouts.chest.benchpress" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Dumbbell Benchpress</h3>
                    <prCard :workout="user.workouts.chest.dumbbellBenchpress" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Dumbbell Fly</h3>
                    <prCard :workout="user.workouts.chest.dumbbellFly" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Cable Fly</h3>
                    <prCard :workout="user.workouts.chest.cableFly" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Pushups</h3>
                    <prCard :workout="user.workouts.chest.pushups" :userData="user" v-for="user in users" :key="user._id" />
                </div>
            </div>
        </div>
        <div class="muscle-group" id="back">
            <h2>Back</h2>
            <div class="muscle-group-container">
                <div class="prs-container">
                    <h3>Deadlift</h3>
                    <prCard :workout="user.workouts.back.deadlift" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Landmine</h3>
                    <prCard :workout="user.workouts.back.landmine" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Lat Pulldown</h3>
                    <prCard :workout="user.workouts.back.latPulldown" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Shrugs</h3>
                    <prCard :workout="user.workouts.back.shrugs" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Cable Row</h3>
                    <prCard :workout="user.workouts.back.cableRow" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>One Arm Bent Over Row</h3>
                    <prCard :workout="user.workouts.back.oneArmBentOverRow" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Rack Pull</h3>
                    <prCard :workout="user.workouts.back.rackPull" :userData="user" v-for="user in users" :key="user._id" />
                </div>
            </div>
        </div>
        <div class="muscle-group" id="shoulders">
            <h2>Shoulders</h2>
            <div class="muscle-group-container">
                <div class="prs-container">
                    <h3>Barbell Shoulder Press</h3>
                    <prCard :workout="user.workouts.shoulders.barbellShoulderPress" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Dumbbell Shoulder Press</h3>
                    <prCard :workout="user.workouts.shoulders.dumbbellShoulderPress" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Jammer</h3>
                    <prCard :workout="user.workouts.shoulders.jammer" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Dumbbell Front Raise</h3>
                    <prCard :workout="user.workouts.shoulders.dumbbellFrontRaise" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>lateralRaise</h3>
                    <prCard :workout="user.workouts.shoulders.lateralRaise" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Rear Delt Raise</h3>
                    <prCard :workout="user.workouts.shoulders.rearDeltRaise" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Behind-The-Neck Press</h3>
                    <prCard :workout="user.workouts.shoulders.behindTheNeckPress" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Face Pull</h3>
                    <prCard :workout="user.workouts.shoulders.facePull" :userData="user" v-for="user in users" :key="user._id" />
                </div>
            </div>
        </div>
        <div class="muscle-group" id="legs">
            <h2>Legs</h2>
            <div class="muscle-group-container">
                <div class="prs-container">
                    <h3>Squat</h3>
                    <prCard :workout="user.workouts.legs.squat" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Leg Extension</h3>
                    <prCard :workout="user.workouts.legs.legExtension" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Leg Curl</h3>
                    <prCard :workout="user.workouts.legs.legCurl" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Romanian Deadlift</h3>
                    <prCard :workout="user.workouts.legs.romanianDeadlift" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Straight Leg Deadlift</h3>
                    <prCard :workout="user.workouts.legs.straightLegDeadlift" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Calf-Raise</h3>
                    <prCard :workout="user.workouts.legs.calfRaise" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Hip Thrust</h3>
                    <prCard :workout="user.workouts.legs.hipThrust" :userData="user" v-for="user in users" :key="user._id" />
                </div>
            </div>
        </div>
        <div class="muscle-group" id="abs">
            <h2>Abs</h2>
            <div class="muscle-group-container">
                <div class="prs-container">
                    <h3>Situps</h3>
                    <prCard :workout="user.workouts.abs.situps" :userData="user" v-for="user in users" :key="user._id" />
                </div>
                <div class="prs-container">
                    <h3>Side Bends</h3>
                    <prCard :workout="user.workouts.abs.sideBend" :userData="user" v-for="user in users" :key="user._id" />
                </div>
            </div>
        </div>
        

        <!-- <prCard workout="Dumbbell Curl"/> -->
    </div>
</template>

<script>

import { ref } from 'vue';
import prCard from '@/components/prCard';

export default {
    components: {
        prCard,
    },
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
    data: ()=> ({
        
    }),
    

}
</script>

<style lang="scss">
    .prs-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // margin-right: 2em;
        padding: 0 2em;

        &:last-child {
            margin-right: 0px;
        }

    }
    .muscle-group {
        h2 {
            padding: 1em;
            border-radius: 5px;
            box-shadow: 0px 5px 15px rgba($color: #2c3e50, $alpha: 0.2);
            background-color: #AEE;
            text-align: center;
        }
        .mid-title {
            width: 50%;
            margin: 0 auto;
            margin-bottom: 1em;
            text-align: center;
            padding: 1em;
            border-bottom: 2px solid #AEE;
        }
        .muscle-group-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            max-width: 80%;
            margin: 0 auto;
        }

    }
</style>