<template>
  <span class="badge" :class="withCloseButton ? 'pl-2.5 pr-1' : 'px-3'">
    {{ text }}
    <button v-if="withCloseButton" type="button" class="button" @click="onClick">
      <span class="sr-only">Remove large option</span>
      <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
        <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
      </svg>
    </button>
  </span>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    text: { type: String, default: '' },
    withCloseButton: { type: Boolean, default: false },
    id: { type: Number },
  },
  methods: {
    onClick() {
      this.$emit('onClick', this.id);
    },
  },
};
</script>

<style scoped>
.badge {
  @apply inline-flex rounded-full items-center py-1 text-sm font-medium bg-indigo-100 text-indigo-700;
}

.button {
  @apply flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white;
}
</style>
