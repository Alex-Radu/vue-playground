<template>
  <div id="app">
    <AvatarMenu/>

    <router-view/>
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
