<template>
  <div>
    <!-- Menu item -->
    <MobileMenu :menu-items="menuItems" />

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex-1 flex flex-col min-h-0 bg-gray-800">
        <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div class="flex items-center flex-shrink-0 px-4">
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
              alt="Workflow"
            />
          </div>
          <nav class="mt-5 flex-1 px-2 space-y-1">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <SidebarItem v-for="item in menuItems" :key="item.id">
              <template slot="icon">
                <span class="w-6 h-6 mr-4">
                  <component :is="item.icon"></component>
                </span>
              </template>
            </SidebarItem>
          </nav>
        </div>
        <!-- Sidebar footer-->
        <SidebarFooter />
      </div>
    </div>
  </div>
</template>

<script>
import SidebarItem from '@/components/shared/layout/Sidebar/partials/SidebarItem';
import SidebarFooter from '@/components/shared/layout/Sidebar/partials/SidebarFooter';
import InfoIcon from '@/components/shared/icons/InfoIcon';
import MobileMenu from '@/components/shared/layout/Sidebar/partials/MobileMenu';

export default {
  name: 'Sidebar',
  components: { MobileMenu, SidebarFooter, SidebarItem },
  data() {
    return {
      menuItems: [
        {
          id: 1,
          name: 'Home',
          icon: InfoIcon,
        },
        {
          id: 2,
          name: 'Home',
          icon: InfoIcon,
        },
      ],
    };
  },
};
</script>
