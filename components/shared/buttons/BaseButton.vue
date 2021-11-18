<template>
  <button
    type="button"
    :class="[buttonType, padding, centerText]"
    :disabled="disabled"
    @click="onClick"
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
</template>

<script>
export default {
  name: 'BaseButton',
  
  props: {
    text: { type: String, default: '' },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    btnStyle: { type: String, default: 'primary' },
    size: { type: String, default: 'normal' }
  },

  computed: {
    padding() {
      switch (this.size) {
        case 'small':
          return 'px-4 py-1'
        default:
          return 'px-4 py-2'
      }
    },

    buttonType() {
      switch (this.btnStyle) {
        case 'primary':
          return 'btn'
        case 'outline':
          return 'btn-outline'
        case 'success':
          return 'btn-success'
        case 'success-outline':
          return 'btn-success-outline'
        default:
          return 'btn'
      }
    },

    hasLeftIcon() {
      return !!this.$slots.leftIcon;
    },

    hasRightIcon() {
      return !!this.$slots.rightIcon;
    },

    centerText() {
      return this.hasLeftIcon === false && this.hasRightIcon === false
        ? 'justify-center'
        : 'justify-between';
    },
  },

  methods: {
    onClick() {
      this.$emit('click');
    },

    onMousedown() {
      this.$emit('mousedown');
    },
  },
}
</script>

<style scoped>
.btn {
  @apply inline-flex items-center border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary hover:bg-primary-80 transition-all ease-in duration-300 flex-shrink-0;
}

.btn-outline {
  @apply inline-flex items-center border border-primary  shadow-sm text-base font-medium rounded-md text-primary hover:text-white bg-transparent hover:bg-primary transition-all ease-in duration-300 flex-shrink-0;
}

.btn-success {
  @apply inline-flex items-center border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-success hover:bg-green-300 transition-all ease-in duration-300 flex-shrink-0;
}

.btn-success-outline {
  @apply inline-flex items-center border border-success shadow-sm text-base font-medium rounded-md text-success hover:text-white bg-transparent hover:bg-success transition-all ease-in duration-300 flex-shrink-0;
}
</style>
