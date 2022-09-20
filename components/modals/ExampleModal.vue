<template>
  <form class="w-full p-5">
    <div class="pb-4">
      <BaseInput v-model="data.name" label="Name" />
    </div>

    <div class="pb-4">
      <BaseInput v-model="data.description" label="Description" />
    </div>

    <div class="pb-4">
      <BaseTextArea label="Message" />
    </div>

    <div class="pb-4">
      <BaseButton text="submit" />
    </div>
  </form>
</template>

<script>
import BaseInput from '@/components/shared/inputs/BaseInput';
import BaseTextArea from '@/components/shared/inputs/BaseTextArea';
import BaseButton from '@/components/shared/buttons/BaseButton';

export default {
  components: {
    BaseInput,
    BaseTextArea,
    BaseButton,
  },

  props: {
    initialData: { type: Object, default: () => {} },
  },

  data() {
    return {
      data: {},
    };
  },

  created() {
    this.data = this.initialData;
  },
};
</script>
