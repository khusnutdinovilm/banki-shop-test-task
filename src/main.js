import "@/assets/scss/main.scss";

import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import uiComponents from "@/components/ui";
import iconsComponents from "./components/icons";

Vue.config.productionTip = false;

[...uiComponents, ...iconsComponents].forEach((component) => {
  Vue.component(component.name, component);
});

new Vue({
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
