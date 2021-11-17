<template>
  <div>
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
        <!-- Toast-->
        <Toast :title='toastData.title' :message='toastData.message' :type='toastData.type' :show-toast='showToast' />
      </div>
    </div>
  </div>
</template>

<script>
import Toast from '@/components/shared/Toast'
import Sidebar from '~/components/shared/layout/Sidebar'

export default {
  components: { Sidebar, Toast },
  data() {
    return {
      showToast: false,
      toastData: {
        title: 'Toast title',
        message: 'Toast message',
        type: 'success'
      }
    }
  },
  created() {
    this.$nuxt.$on('show-toast', (data) => {
      this.showToast = true
      this.toastData = data
      setTimeout(() => {
        this.showToast = false
      }, data.duration ? data.duration : 2000)
    })
  }
}
</script>

<style scoped>

</style>
