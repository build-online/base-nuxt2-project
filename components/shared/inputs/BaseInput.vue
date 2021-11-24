<template>
  <div>
    <!--Label-->
    <Label :text="label" />
    <div class="mt-1 relative rounded-md shadow-sm">
      <!--Left icon-->
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <slot name="leftIcon"></slot>
      </div>
      <!--Input-->
      <input
        :type="type"
        class="input"
        :class="[{ 'pl-10': hasLeftIcon, 'pr-10': hasRightIcon }]"
        :value="value"
        :placeholder="placeholder"
        @input="onInput"
      />
      <!--Right icon-->
      <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <slot name="rightIcon"></slot>
      </div>
    </div>
    <p v-if="errors" class="error">We'll only use this for spam.</p>
  </div>
</template>

<script>
import Label from '@/components/shared/Label';

export default {
  name: 'BaseInput',

  components: { Label },

  props: {
    label: { type: String },
    type: { type: String, default: 'text' },
    errors: { type: Array },
    value: { type: String },
    placeholder: { type: String },
  },

  computed: {
    hasLeftIcon() {
      return this.$slots.leftIcon ? true : false;
    },
    
    hasRightIcon() {
      return this.$slots.rightIcon ? true : false;
    },
  },

  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  @apply shadow-sm outline-none focus:outline-none ring-primary  block w-full sm:text-sm border-gray-300 rounded-md;
}

.error {
  @apply mt-2 text-sm text-red-600;
}
</style>
