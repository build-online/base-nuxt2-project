<template>
  <div class="flex">
    <button
      type="button"
      class="btn"
      :class="[padding]"
      :disabled="disabled"
      @click.stop="onClick"
      @mousedown="onMousedown"
    >
      <span class="mr-3 -ml-1">
        <slot name="leftIcon"></slot>
      </span>
      {{ text }}
      <span class="ml-3 -mr-1">
        <slot name="rightIcon"></slot>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: { type: String, default: '' },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    btnStyle: { type: String, default: 'primary' },
    size: { type: String, default: 'normal' },
  },

  computed: {
    padding() {
      switch (this.size) {
        case 'small':
          return 'px-4 py-1';
        default:
          return 'px-4 py-2';
      }
    },
    buttonType() {
      switch (this.btnStyle) {
        case 'primary':
          return 'btn';
        case 'outline':
          return 'btn-outline';
        default:
          return 'btn';
      }
    },
    /*    textStyle() {
      let weight = '500';
      let size = 'l';
      if (this.btnStyle === 'primary') {
        weight = '600';
      }
      if (this.size === 'small') {
        size = 's';
      }
      return `label-${size}-${weight}`;
    },*/
  },

  methods: {
    onClick() {
      this.$emit('onClick');
    },
    onMousedown() {
      this.$emit('onMousedown');
    },
  },
};
</script>

<style scoped>
.btn {
  @apply inline-flex items-center border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary hover:bg-primary-80 transition-all ease-in duration-300;
}
.btn-outline {
  @apply inline-flex items-center border border-primary  shadow-sm text-base font-medium rounded-md text-white bg-transparent hover:bg-primary-80 transition-all ease-in duration-300;
}
</style>
