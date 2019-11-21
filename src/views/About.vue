<template>
  <div id="about">
    <ProfileCard/>
    <SkillsCard/>
  </div>
</template>

<script>

import ProfileCard from '../components/ProfileCard.vue';
import SkillsCard from '../components/SkillsCard.vue';

export default {
  name: 'About',
  components: {
    ProfileCard, SkillsCard,
  },
};
</script>

<style lang="scss">
#about {
  color: #2c3e50;
  display: flex;
}
</style>
