<template>
  <div class="tooltip">
    <p><slot></slot></p>
  </div>
</template>

<script>
export default {
  name: 'Tooltip',
  props: {
    forTarget: String,
  },
  data: () => ({
    coords: Object,
  }),
  mounted() {
    const targetElement = document.querySelector(`#${this.forTarget}`);

    targetElement.addEventListener('mouseenter', this.showTooltip);
    targetElement.addEventListener('focusin', this.showTooltip);

    targetElement.addEventListener('mouseleave', this.hideTooltip);
    targetElement.addEventListener('focusout', this.hideTooltip);
  },
  methods: {
    showTooltip() {
      this.$el.classList.add('displayed');
      this.positionTooltip();
      this.$el.classList.add('visible');
    },

    hideTooltip() {
      this.$el.classList.remove('displayed');
      this.$el.classList.remove('visible');
    },

    positionTooltip() {
      const targetElement = document.querySelector(`#${this.forTarget}`);
      const tooltipElement = this.$el;
      const targetRect = targetElement.getBoundingClientRect();
      const tooltipRect = tooltipElement.getBoundingClientRect();

      tooltipElement.style.top = `${targetRect.top + targetRect.height / 2 - tooltipRect.height / 2}px`;
      tooltipElement.style.left = `${targetRect.left + targetRect.width + 15}px`;
    },
  },
};
</script>

<style lang="scss">
.tooltip {
  background: rgba(125, 226, 209, .8);
  border: thick double #173753;
  color: #173753;
  display: none;
  font-size: .75rem;
  line-height: .75rem;
  position: fixed;
  opacity: 0;
  transition: opacity .25s linear;
  width: 7rem;

  &.displayed {
    display: initial;
  }

  &.visible {
    background: rgba(125, 226, 209, 1);
    opacity: 1;
  }

  &:before {
    border-top: 8px solid transparent;
    border-right: 8px solid transparent;
    border-left: 8px solid #173753;
    border-bottom: 8px solid #173753;
    content: '';
    left: -8px;
    position: absolute;
    top: 50%;
    transform:  translateY(-50%) rotateZ(45deg);
  }

  p {
    margin: .5rem;
    position: relative;
    z-index: 2;
  }
}
</style>
