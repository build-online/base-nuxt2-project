<template>
  <div v-on-clickaway="close">
    <Label :text="label" />
    <div class="mt-1 relative">
      <button type="button" class="select" @click="isOpen = !isOpen">
        <span v-if="selectedOption === null" class="block truncate">Select an option</span>
        <span v-else class="block truncate">{{ selectedOption.name }}</span>
        <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <ArrowsIcon />
        </span>
      </button>
      <!--Option-->
      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ul v-if="isOpen" class="options" tabindex="-1" role="listbox">
          <li
            v-for="option in options"
            :key="option.id"
            class="option"
            role="option"
            @click="setSelectedOption(option)"
          >
            <span class="font-normal block truncate"> {{ option.name }} </span>
            <span
              v-if="selectedOption !== null && option.id === selectedOption.id"
              class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4"
            >
              <CheckIcon />
            </span>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import Label from '@/components/shared/Label';
import ArrowsIcon from '@/components/shared/icons/ArrowsIcon';
import CheckIcon from '@/components/shared/icons/CheckIcon';

export default {
  name: 'BaseSelect',
  components: { CheckIcon, ArrowsIcon, Label },
  mixins: [clickaway],
  props: {
    options: { type: Array },
    label: { type: String },
  },
  data() {
    return {
      isOpen: false,
      selectedOption: null,
    };
  },
  methods: {
    setSelectedOption(option) {
      this.selectedOption = option;
      this.$emit('input', option);
      this.close();
    },
    close() {
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
.select {
  @apply bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none sm:text-sm focus:border-primary;
}

.options {
  @apply absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base  overflow-auto focus:outline-none sm:text-sm;
}

.option {
  @apply text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-primary hover:text-white;
}
</style>
