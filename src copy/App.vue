<template>
  <div class="app-container">
    <span>App</span>
  </div>
</template>

<script>
import logoImg from "./assets/images/logo.png";
// import svgImg from './icons/svg/dashboard.svg';
// import  './styles/test.css'

import "./styles/test.scss";
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    testEs6() {
      console.log(`test es6`);
    },
  },
  mounted() {},
};
</script>
<style scoped lang="scss">
span {
  color: pink;
}
</style>
