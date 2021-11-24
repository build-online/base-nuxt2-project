<template>
  <NuxtLink :to='route' class='sidebar-item hover:bg-primary-50'>
    <slot name='icon'></slot>
    {{ text }}
  </NuxtLink>
</template>
<script>
export default {
  name: 'SidebarItem',
  
  props: {
    route: { type: String, default: '/' },
    text: { type: String, default: 'Sidebar item' }
  }
}
</script>

<style scoped>
.sidebar-item {
  @apply text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-all ease-in duration-150;
}

.nuxt-link-exact-active {
  background: #F5ABAB;
}
</style>
