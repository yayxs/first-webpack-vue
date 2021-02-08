import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 动态加载views下路由文件

const files = require.context("@/views", true, /router\.js$/);
const routes = files.keys().map((key) => {
  const page = require("@/views" + key.replace(".", ""));
  return page.default;
});

export default new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});
