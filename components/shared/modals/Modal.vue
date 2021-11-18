<template>
  <transition @enter='enter'>
    <div v-if='showModal' class='fixed z-50 inset-0 overflow-y-auto' aria-labelledby='modal-title' role='dialog'
         aria-modal='true'
         @close='close'>
      <div class='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
        <div class='fixed inset-0' :class='[overlay]' aria-hidden='true'>
          <!--Close Button-->
          <button v-if='withCloseButton'
                  class='absolute top-6 left-6 text-white opacity-90 hover:opacity-100 transition-all ease-in duration-100'
                  @click='close'>
            <XIcon stroke-width='3' />
          </button>
        </div>

        <!--Content-->
        <div v-on-clickaway='close' class='h-screen flex items-center justify-center'>
          <slot name='content'></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import anime from 'animejs'
import { XIcon } from 'vue-feather-icons'
import { mixin as clickaway } from 'vue-clickaway'

export default {
  name: 'Modal',
  components: {
    XIcon
  },
  mixins: [clickaway],
  props: {
    overlay: { type: String, default: 'bg-gray-500 bg-opacity-75 transition-opacity' },
    withCloseButton: { type: Boolean, default: true }
  },
  data() {
    return {
      showModal: false
    }
  },
  mounted() {
    document.addEventListener('keyup', this.handleEscape)
    this.$nuxt.$on('close', () => {
      this.close()
    })
  },
  destroyed() {
    document.removeEventListener('keyup', this.handleEscape)
  },
  methods: {
    show() {
      this.showModal = true
    },
    close() {
      this.showModal = false
    },
    enter(el) {
      anime({
        targets: el,
        opacity: [0, 1],
        duration: 2000
      })
    },
    handleEscape(e) {
      if (e.keyCode === 27) {
        this.close()
      }
    }
  }

}
</script>

<style scoped>

</style>
