import Vue from "vue";
import App from "./App.vue";
import "@/plugins";
import router from "@/router";
import service from "./utils/http";
Vue.config.productionTip = false;

Vue.prototype.$http = service;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
