<template>
  <div class="flex-shrink-0 flex bg-gray-700 p-4">
    <a href="#" class="flex-shrink-0 w-full group block">
      <div class="flex items-center">
        <div>
          <AvatarImage size="xs" />
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-white">Tom Cook</p>
          <p class="text-xs font-medium text-gray-300 group-hover:text-gray-200">View profile</p>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
import AvatarImage from '@/components/shared/AvatarImage';
export default {
  name: 'SidebarFooter',
  components: { AvatarImage },
};
</script>
