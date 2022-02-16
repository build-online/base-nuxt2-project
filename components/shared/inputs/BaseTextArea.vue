<template>
  <div>
    <InputLabel :text="label" />
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
import InputLabel from '@/components/shared/InputLabel';

export default {
  name: 'BaseTextArea',

  components: { InputLabel },

  props: {
    label: { type: String },
    resize: { type: String, default: 'resize-none' },
    rows: { type: String, default: '3' },
    errors: { type: Array },
    placeholder: { type: String },
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
