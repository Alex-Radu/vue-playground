<template>
  <div id="app">
    <div class="card">
      <h1>🚧 Under construction 🚧</h1>
    </div>
    <AvatarMenu/>
  </div>
</template>

<script>
import AvatarMenu from './components/AvatarMenu.vue';

export default {
  name: 'app',
  components: {
    AvatarMenu,
  },
};
</script>

<style lang="scss">
#app {
  box-sizing: border-box;
  color: #2c3e50;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100vh;
  padding-top: 10rem;
  position: relative;
  text-align: center;
  width: 100vw;
  z-index: 2;
}

.card {
  background: white;
  box-shadow: 6px 6px 5px -4px rgba(130, 130, 130, .8);
  display: inline-block;
  margin: 0 auto;
  padding: 2em;

  h1 {
    margin: 0;
  }
}
</style>
