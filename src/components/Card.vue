<template>
  <div class="container">
    <header v-if="hasHeaderSlot">
      <slot name="header"></slot>
      </header>
    <main><slot></slot></main>
    <footer v-if="hasFooterSlot">
      <slot name="footer"></slot>
    </footer>
</div>
</template>

<script>
export default {
  name: 'Card',
  computed: {
    hasHeaderSlot() {
      return !!this.$slots.header;
    },
    hasFooterSlot() {
      return !!this.$slots.footer;
    },
  },
};
</script>

<style lang="scss">
.container {
  background: white;
  box-shadow: 6px 6px 5px -4px rgba(130, 130, 130, .8);
  display: flex;
  flex-direction: column;
  margin: 1rem;

  header {
    background: #F87060;
    color: white;
    font-size: 1.25rem;
    font-weight: bold;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
  }

  footer {
    border-top: 1px solid #EEEEFF;
    height: 3rem;
  }
}

</style>
