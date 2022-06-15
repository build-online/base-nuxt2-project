<template>
  <transition @enter="onEnter">
    <div v-show="show" class="fixed z-50 inset-0 overflow-y-auto bg-black-transparent">
      <div class="flex justify-center items-center h-screen">
        <div
          class="inline-block align-bottom bg-white rounded-lg pt-2 pb-8 px-8 text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="text-center mt-2">
            <div class="flex justify-between">
              <h3 id="modal-title" class="text-2xl leading-6 font-medium text-gray-900">
                {{ title ? title : 'Title' }}
              </h3>

              <button @click="close">
                <XIcon stroke-width="3" />
              </button>
            </div>
            <div class="mt-2">
              <p class="text-sm text-gray-500">
                <component v-bind:is="component" v-on-clickaway="close" :initialData="initialData" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import anime from 'animejs';
import { XIcon } from 'vue-feather-icons';
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'Modal',

  components: {
    XIcon,
  },

  mixins: [clickaway],

  data() {
    return {
      show: false,
      title: '',
      component: null,
      initialData: {},
    };
  },

  methods: {
    close() {
      this.show = false;
    },

    handleEscape(e) {
      if (e.keyCode === 27) {
        this.close();
      }
    },

    onEnter(el) {
      anime({
        targets: el,
        opacity: [0, 1],
        duration: 2000,
      });
    },
  },

  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'modal/open') {
        this.title = state.modal.title;
        this.component = state.modal.component;
        this.initialData = state.modal.initialData;
        this.show = true;
      }
    });
  },

  mounted() {
    document.addEventListener('keyup', this.handleEscape);
  },

  destroyed() {
    document.removeEventListener('keyup', this.handleEscape);
  },
};
</script>

<style scoped>
.bg-black-transparent {
  background: #0000003b;
}
</style>
