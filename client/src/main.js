import { createApp } from "vue";
// import VueCompositionAPI from '@vue/composition-api';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faPlus, faMinus, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas, faPlus, faMinus, faEdit);

// Vue.component('font-awesome-icon', FontAwesomeIcon);

createApp(App)
  // .use(VueCompositionAPI)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
