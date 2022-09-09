<template>
  <div id="app" class="app">
    <div class="ods-main">
      <HelloWorld />
      <Icons />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Icons from "./components/Icons.vue";
export default {
  components: {
    HelloWorld,
    Icons,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "./assets/main.scss";

#app {
  font-family: "Oslo sans", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-black);
}
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.ods-main {
  flex-grow: 1;
}
</style>
