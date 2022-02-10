<template>
  <div class="flex items-center space-x-3">
    <button
      type="button"
      class="toggle-container"
      :class="on ? 'bg-success' : 'bg-gray-200'"
      role="switch"
      @click="toggle"
    >
      <span
        aria-hidden="true"
        :class="on ? 'translate-x-5' : 'translate-x-0'"
        class="
          pointer-events-none
          inline-block
          h-5
          w-5
          rounded-full
          bg-white
          shadow
          transform
          ring-0
          transition
          ease-in-out
          duration-200
        "
      ></span>
    </button>
    <Label :text="label" />
  </div>
</template>

<script>
import Label from '@/components/shared/Label';

export default {
  name: 'Toggle',

  components: { Label },

  props: {
    background: { type: String, default: 'bg-success' },
    label: { type: String },
  },

  data() {
    return {
      on: false,
    };
  },

  methods: {
    toggle() {
      this.on = !this.on;
      this.$emit('input', this.on);
    },
  },
};
</script>

<style scoped>
.toggle-container {
  @apply relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none;
}
</style>
