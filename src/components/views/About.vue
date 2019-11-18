<template>
  <div id="about">
    <ProfileCard/>
  </div>
</template>

<script>

import ProfileCard from '../ProfileCard.vue';

export default {
  name: 'About',
  components: {
    ProfileCard,
  },
};
</script>

<style lang="scss">
#about {
  color: #2c3e50;
  display: flex;
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
