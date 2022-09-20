<template>
  <transition v-if="modalVisible" name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        :class="[padding]"
        :style="[{ 'max-width': maxWidth }, { 'max-height': maxHeight }]"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <div class="flex justify-between">
          <div class="flex space-x-4" :class="{ invisible: hideTitle }">
            <div v-if="titleIcon" :class="titleIconClasses">
              <component :is="titleIcon" />
            </div>
            <h3 class="title-m-600">{{ title }}</h3>
          </div>
          <button class="w-5" @click="close">
            <XIcon />
          </button>
        </div>
        <component
          :is="component"
          id="modalDescription"
          v-on-clickaway="close"
          :initial-data="initialData"
          @hideTitle="hideTitle = true"
        ></component>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import { XIcon } from 'vue-feather-icons';
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'Modal',
  components: { XIcon },
  mixins: [clickaway],

  data() {
    return {
      component: null,
      hideTitle: false,
    };
  },

  computed: {
    ...mapGetters({
      modalVisible: 'modal/visible',
      initialData: 'modal/initialData',
      title: 'modal/title',
      titleIcon: 'modal/titleIcon',
      titleIconClasses: 'modal/titleIconClasses',
      padding: 'modal/padding',
      maxWidth: 'modal/maxWidth',
      maxHeight: 'modal/maxHeight',
    }),

    ...mapState({
      modalComponent: state => state.modal.component,
    }),
  },

  watch: {
    modalComponent(componentName) {
      if (!componentName) return;
      this.component = () => import(`@/components/modals/${componentName}`);
    },
    modalVisible(visible) {
      document.body.classList.toggle('overflow-hidden', visible);
    },
  },

  created() {
    document.addEventListener('keydown', this.escapeHandler);
    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', this.escapeHandler);
    });
  },

  methods: {
    close() {
      this.$modal.close();
    },

    escapeHandler(e) {
      if (e.key === 'Escape' && this.modalVisible) {
        this.close();
      }
    },
  },
};
</script>

<style scoped>
.modal-backdrop {
  @apply bg-black bg-opacity-30 z-50 fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center py-10;
}

.modal {
  @apply bg-white z-50 rounded-xl overflow-y-scroll h-full w-full;
  box-shadow: 40px 72px 96px 0px rgba(157, 149, 140, 0.2);
  box-shadow: 24px 24px 40px 0px rgba(154, 151, 142, 0.15);
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
