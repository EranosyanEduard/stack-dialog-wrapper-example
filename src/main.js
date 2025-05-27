import Vue from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";
import App from "./App.vue";
import StackToast2 from "./components/StackDialogs/StackToast2.vue";

import "./assets/main.css";

Vue.use(PiniaVuePlugin);
Vue.component("StackToast", StackToast2);

new Vue({
  pinia: createPinia(),
  render: (h) => h(App),
}).$mount("#app");
