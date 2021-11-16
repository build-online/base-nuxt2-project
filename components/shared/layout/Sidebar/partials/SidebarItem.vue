<template>
  <router-link :to="{ name: route }" class="sidebar-item">
    <slot name="icon"></slot>
    {{ text }}
  </router-link>
</template>
<script>
export default {
  name: 'SidebarItem',
  props: {
    route: { type: Object },
    text: { type: String, default: 'Sidebar item' },
  },
};
</script>

<style scoped>
.sidebar-item {
  @apply text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-gray-900;
}
</style>
