<template>
  <div>
    <!--Label-->
    <Label :text="label" />
    <textarea
      :placeholder="placeholder"
      :rows="rows"
      class="textarea"
      :class="[resize]"
      @input="onInput"
    ></textarea>
    <p v-if="errors" class="error">We'll only use this for spam.</p>
  </div>
</template>

<script>
import Label from '@/components/shared/Label';

export default {
  name: 'BaseTextArea',

  components: { Label },

  props: {
    label: { type: String, default: '' },
    resize: { type: String, default: 'resize-none' },
    rows: { type: String, default: '3' },
    errors: { type: Array, default: () => [] },
    placeholder: { type: String, default: '' },
  },

  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style scoped>
.textarea {
  @apply shadow-sm block w-full outline-none focus:outline-none focus:border-primary focus:ring-0 sm:text-sm border border-gray-300  rounded-md mt-1;
}

.error {
  @apply mt-2 text-sm text-red-600;
}
</style>
