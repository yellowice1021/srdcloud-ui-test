import Vue from "vue";
import App from "./App.vue";

import "srdcloud-ui-test/dist/css/demo.css";
import "srdcloud-ui-test/dist/css/card.css";
import { Demo } from "srdcloud-ui-test/dist/demo.umd.js";
import { Card } from "srdcloud-ui-test/dist/card.umd.js";
Vue.use(Demo);
Vue.use(Card);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
