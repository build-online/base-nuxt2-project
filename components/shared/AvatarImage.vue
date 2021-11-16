<template>
  <span class="inline-block relative">
    <img class="rounded-full" :class="componentSize" :src="src" alt="" />
    <span
      v-if="withStatus"
      class="absolute top-0 right-0 block rounded-full ring-2 ring-white"
      :class="[statusSize, componentStatus]"
    />
  </span>
</template>

<script>
export default {
  name: 'AvatarImage',
  props: {
    size: { type: String, default: 'big' },
    withStatus: { type: Boolean, default: false },
    status: { type: String },
    src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  computed: {
    componentSize() {
      switch (this.size) {
        case 'medium':
          return 'h-14 w-14';
        case 'small':
          return 'h-12 w-12';
        case 'xs':
          return 'h-9 w-9';
        default:
          return 'h-16 w-16';
      }
    },
    statusSize() {
      switch (this.size) {
        case 'medium':
          return 'h-3.5 w-3.5';
        case 'small':
          return 'h-3 w-3';
        case 'xs':
          return 'h-2 w-2';
        default:
          return 'h-4 w-4';
      }
    },
    componentStatus() {
      switch (this.status) {
        case 'active':
          return 'bg-success';
        case 'inactive':
          return 'bg-gray-300';
        default:
          return 'bg-gray-300';
      }
    },
  },
};
</script>

<style scoped></style>
