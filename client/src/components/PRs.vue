<template>
    <div class="prs">
        <div class="header-container">
            <button class="muscle-group-header" @click="mgMenu()">Arms</button>
        </div>
        <div class="muscle-group" id="arms">
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
        <div class="header-container">
            <button class="muscle-group-header" @click="mgMenu()">Chest</button>
        </div>
        <div class="muscle-group" id="chest">
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
        <div class="header-container">
            <button class="muscle-group-header" @click="mgMenu()">Back</button>
        </div>
        <div class="muscle-group" id="back">
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
        <div class="header-container">
            <button class="muscle-group-header" @click="mgMenu()">Shoulders</button>
        </div>
        <div class="muscle-group" id="shoulders">
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
        <div class="header-container">
            <button class="muscle-group-header" @click="mgMenu()">Legs</button>
        </div>
        <div class="muscle-group" id="legs">
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
        <div class="header-container">
            <button class="muscle-group-header" @click="mgMenu()">Abs</button>
        </div>
        <div class="muscle-group" id="abs">
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
    methods: {
        mgMenu() {
            
        }
    },
    mounted: function() {
        var acc = document.getElementsByClassName("header-container");
            var i;

            for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function() {
                    /* Toggle between adding and removing the "active" class,
                    to highlight the button that controls the panel */
                    this.classList.toggle("active");
                    // if (this.classList.contains("active")){
                    //     this.innerHTML= "<button class='muscle-group-header'>Arms<font-awesome-icon :icon=\"['fas', 'plus']\"/></button>";
                    // } else {
                    //     this.innerHTML= "<button class='muscle-group-header'>Arms<font-awesome-icon :icon=\"['fas', 'minus']\"/></button>";
                    // }

                    /* Toggle between hiding and showing the active panel */
                    var muscleGroup = this.nextElementSibling;
                    if (muscleGroup.style.maxHeight) {
                    muscleGroup.style.maxHeight = null;
                    } else {
                    muscleGroup.style.maxHeight = muscleGroup.scrollHeight + "px";
                    
                    } 
                });
            } 
            console.log('test');
    }
    

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
    button {
        
    }
    .muscle-group {
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
    .header-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
     /* Style the buttons that are used to open and close the accordion panel */
    .muscle-group-header {
        // @include fa-icon;        
        // @extend %fa-icon;
        // @extend .fas;

        background-color: #aee;
        color: #444;
        cursor: pointer;
        padding: 1em;
        width: 100%;
        max-width: 1000px;
        text-align: left;
        border: none;
        outline: none;
        transition: 0.5s;
        margin: 0 auto;
        margin-bottom: 0.5em;
        padding: 1em;
        border-radius: 5px;
        box-shadow: 0px 5px 15px rgba($color: #2c3e50, $alpha: 0.2);
        font-size: 1.5em;
        // display: flex;
        // justify-content: space-between;

        &:hover {
            background-color: darken(#aee, 20%);
        }
        &:after {
            

            // content: fa-content($fa-var-plus);
            // content: "\2795";
            content: "Show";
            font-size: 0.75em;
            font-weight: 100;
            color: var(--text);
            float: right;
            margin-left: 0.3em;
            outline: none;
        }
    }

    /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
    .active > .muscle-group-header {
        background-color: darken(#aee, 20%);

        &:after {
            content: "Hide"; /* Unicode character for "minus" sign (-) */
            // content: "\2796"; /* Unicode character for "minus" sign (-) */
        }
    }

    /* Style the accordion panel. Note: hidden by default */
    .muscle-group {
        padding: 0 18px;
        background-color: white;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.5s ease-out;
    } 
</style>