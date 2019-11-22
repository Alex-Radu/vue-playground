<template>
  <div class="container">
    <header v-if="hasHeaderSlot">
      <slot name="header"></slot>
      <span v-if="withInfo">
        <img src="../../assets/images/icons8-info.svg" id="info-icon" alt>
        <Tooltip :for-target="`info-icon`">Click on each skill to see more</Tooltip>
      </span>
    </header>
    <main><slot></slot></main>
    <footer v-if="hasFooterSlot">
      <slot name="footer"></slot>
    </footer>
</div>
</template>

<script>
import Tooltip from './Tooltip.vue';

export default {
  name: 'Card',
  components: { Tooltip },
  props: {
    withInfo: Boolean,
  },
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
    color: #173753;
    font-size: 1.25rem;
    font-weight: bold;
    height: 3rem;
    line-height: 3rem;
    position: relative;
    text-align: center;

    span {
      cursor: pointer;
      position: absolute;
      right: .5rem;
      top: .125rem;

      img {
        height: 2.75rem;
        opacity: .85;
        width: 2.75rem;

        &:hover {
          opacity: 1;
        }
      }
    }
  }

  footer {
    border-top: 1px solid #EEEEFF;
    height: 3rem;
  }
}

</style>
