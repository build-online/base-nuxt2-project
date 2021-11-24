<template>
  <div>
    <!-- Menu item -->
    <MobileMenu :menu-items='menuItems' />
    <!-- Static sidebar for desktop -->
    <div class='hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0'>
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class='flex-1 flex flex-col min-h-0 bg-secondary'>
        <div class='flex-1 flex flex-col pt-5 pb-4 overflow-y-auto'>
          <div class='flex items-center flex-shrink-0 px-4'>
            <img
              class='h-12 w-auto'
              src='~/assets/img/logo.svg'
              alt='Build Online'
            />
          </div>
          <nav class='mt-5 flex-1 px-2 space-y-1'>
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <SidebarItem v-for='item in menuItems' :key='item.id' :text='item.name' :route='item.route'>
              <template slot='icon'>
                <span class='w-6 h-6 mr-4'>
                  <component :is='item.icon'></component>
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
import { HomeIcon, FigmaIcon } from 'vue-feather-icons';

import SidebarItem from '@/components/shared/layout/Sidebar/partials/SidebarItem';
import SidebarFooter from '@/components/shared/layout/Sidebar/partials/SidebarFooter';
import MobileMenu from '@/components/shared/layout/Sidebar/partials/MobileMenu';

export default {
  name: 'Sidebar',

  components: { MobileMenu, SidebarFooter, SidebarItem, HomeIcon, FigmaIcon },
  
  data() {
    return {
      menuItems: [
        {
          id: 1,
          name: 'Home',
          route:'/home',
          icon: HomeIcon
        },
        {
          id: 2,
          name: 'Components',
          route:'/components',
          icon: FigmaIcon
        }
      ]
    }
  }
}
</script>
