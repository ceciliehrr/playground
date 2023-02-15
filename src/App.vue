<template>
  <div id="app" class="app">
    <pkt-header />
    <div class="pkt-main">
      <HelloWorld />
      <Icons />
    </div>
    <pkt-footer class="page-footer" :links="links"></pkt-footer>
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
    return {
      links: [
        { text: "Kontakt", href: "#" },
        { text: "Personvern og informasjonskapsler", href: "#" },
      ],
    };
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
.pkt-main {
  flex-grow: 1;
}
</style>
