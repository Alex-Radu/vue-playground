<template>
  <div>
    <Card class="profile-card">
      <template v-slot:header>
        Profile
      </template>
      <img class="profile" src="../../assets/images/avatar.png" alt>
      <h1>Alex Radu</h1>
      <a href="https://github.com/Alex-Radu" target="_blank" rel="noopener noreferrer">
        <img class="social" src="../../assets/images/icons8-github.svg" alt>
      </a>
      <a href="https://www.linkedin.com/in/alexandru-bogdan-radu-78245a52/" target="_blank" rel="noopener noreferrer">
        <img class="social" src="../../assets/images/icons8-linkedin.svg" alt>
      </a>
      <a href="https://www.instagram.com/alexandrubogdanradu/" target="_blank" rel="noopener noreferrer">
        <img class="social" src="../../assets/images/icons8-instagram.svg" alt>
      </a>
    </Card>
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'ProfileCard',
  components: {
    Card,
  },
};
</script>

<style lang="scss">
.profile-card {
  img.profile {
    border-radius: 50%;
    display: block;
    height: 9rem;
    margin: 2rem auto 1rem;
    width: 9rem;
  }

  h1 {
    border-bottom: 2px dashed #F87060;
    border-top: 2px dashed #F87060;
    color: #173753;
    margin: 0 2rem;
    text-align: center;
  }

  a:hover {
    background: #EEEEFF;
    display: inline-block;
  }

  img.social {
    height: 5rem;
    width: 5rem;
  }
}
</style>
