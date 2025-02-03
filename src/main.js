import "@/assets/scss/main.scss";

import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import uiComponents from "@/components/ui";

Vue.config.productionTip = false;

uiComponents.forEach((component) => {
  Vue.component(component.name, component);
});

new Vue({
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
