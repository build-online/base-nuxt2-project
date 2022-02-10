<template>
  <div v-show="show" class="toast" :class="componentStyles">
    <div class="p-4">
      <div class="flex items-start">
        <div class="flex-shrink-0">
          <InfoIcon v-if="type === ''" class="h-5 w-5" />
          <SuccessIcon v-if="type === 'success'" class="h-5 w-5" />
          <WarningIcon v-if="type === 'warning'" class="h-5 w-5" />
          <XIcon v-if="type === 'danger'" class="h-5 w-5" />
        </div>
        <div class="ml-3 w-0 flex-1 pt-0.5">
          <p class="text-sm font-medium">{{ title }}</p>
          <p class="mt-1 text-sm">{{ message }}</p>
        </div>
        <div v-if="withCloseButton" class="ml-4 flex-shrink-0 flex">
          <button class="rounded-md inline-flex">
            <XIcon class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import XIcon from '@/components/shared/icons/XIcon';
import SuccessIcon from '@/components/shared/icons/SuccessIcon';
import InfoIcon from '@/components/shared/icons/InfoIcon';
import WarningIcon from '@/components/shared/icons/WarningIcon';

export default {
  name: 'Toast',

  components: { WarningIcon, InfoIcon, SuccessIcon, XIcon },

  props: {
    withCloseButton: { type: Boolean, default: true },
  },

  data() {
    return {
      title: '',
      message: '',
      type: 'success',
      duration: 4000,
      show: false,
    };
  },

  computed: {
    componentStyles() {
      switch (this.type) {
        case 'success':
          return 'bg-green-50 text-green-800';
        case 'warning':
          return 'bg-yellow-50 text-yellow-800';
        case 'danger':
          return 'bg-red-50 text-red-800';
        default:
          return 'bg-blue-50 text-blue-800';
      }
    },
  },

  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'toast/showMessage') {
        this.title = state.toast.title;
        this.message = state.toast.message;
        this.type = state.toast.type;
        this.duration = state.toast.duration;
        this.show = true;

        setTimeout(() => {
          this.show = false;
        }, this.duration);
      }
    });
  },
};
</script>

<style scoped>
.toast {
  @apply absolute max-w-sm w-full  shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden right-6  bottom-6 z-10;
}

.button {
  @apply inline-flex rounded-md p-1.5 focus:outline-none;
}
</style>
