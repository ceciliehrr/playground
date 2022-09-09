import Vue from "vue";
import App from "./App.vue";
import "./assets/main.scss";
import OdsVue from "@oslokommune/oslo-designsystem-vue";
import { faker } from "@faker-js/faker";

Vue.use(OdsVue);
Vue.use(faker);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
