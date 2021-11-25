<template>
  <div>
    <Sidebar />
    <div class='md:pl-64 flex flex-col flex-1'>
      <main class='flex-1'>
        <div class='py-6'>
          <div class='mx-auto px-4 sm:px-6 md:px-8'>
            <Nuxt />
          </div>
        </div>
      </main>
      <portal-target name='main' />
    </div>
    <Toast />
  </div>
</template>

<script>
import Toast from '@/components/shared/Toast';
import Sidebar from '@/components/shared/layout/Sidebar';

export default {
  components: { Sidebar, Toast }
}
</script>

<style scoped>

</style>
