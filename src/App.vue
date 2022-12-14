<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
// importazione api
import { store } from './store.js';

export default {
  name: 'App',
  components: {
    Header,
    Main
  },
  data() {
    return {
      // sempre per l'api
      store,
    }
  },
}
</script>

<template>
  <div id="bg-color">

    <Header :title="store.title" />

    <Main character="g" />

  </div>
</template>

<style lang="scss">
@use './style/general.scss' as *;
@use './style/partials/variables' as *;
@use './style/partials/mixin' as *;

#bg-color {
  background-color: $primaryBackgroundColor;
  height: 100vh;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: $primaryColor;
  }
}
</style>
