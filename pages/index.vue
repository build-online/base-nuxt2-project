<template>
  <div>
    <h1 class="text-3xl font-bold text-indigo-500 mb-5">Components</h1>
    <div class="grid grid-cols-2 gap-10">
      <div class="flex flex-col space-y-5">
        <BaseInput v-model="inputData" label="Name" />
        <BaseSelect v-model="selectedOption" label="Options" :options="selectOptions" />
        <BaseTextArea label="Message" />
        <portal to="main">
          <Toast message="Here write your message" />
        </portal>
      </div>
      <div class="flex flex-col space-y-5 items-start">
        <div class="flex items-center space-x-3">
          <BaseButton text="Button" />
          <BaseButton text="Button">
            <template slot="leftIcon">
              <InfoIcon class="w-5 h-5" />
            </template>
          </BaseButton>
          <BaseButton text="Button">
            <template slot="rightIcon">
              <InfoIcon class="w-5 h-5" />
            </template>
          </BaseButton>
          <BaseButton text="Button" size="small" />
        </div>
        <div class="flex justify-start space-x-3">
          <Badge text="Badge" />
          <Badge text="Badge" :with-close-button="true" />
        </div>
        <div class="flex items-center space-x-3">
          <AvatarImage />
          <AvatarImage size="medium" :with-status="true" status="active" />
          <AvatarImage size="small" :with-status="true" />
        </div>
        <Toggle v-model="toggle" />
        <Toggle label="Accept terms and conditions" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from '@/components/shared/inputs/BaseInput';
import BaseSelect from '@/components/shared/inputs/BaseSelect';
import BaseButton from '@/components/shared/buttons/BaseButton';
import Toggle from '@/components/shared/buttons/Toggle';
import BaseTextArea from '@/components/shared/inputs/BasetextArea';
import Badge from '@/components/shared/Badge';
import AvatarImage from '@/components/shared/AvatarImage';
import InfoIcon from '@/components/shared/icons/InfoIcon';

export default {
  layout:'default',
  components: {
    InfoIcon,
    AvatarImage,
    Badge,
    BaseTextArea,
    Toggle,
    BaseButton,
    BaseSelect,
    BaseInput,
  },
  data() {
    return {
      selectOptions: [
        {
          id: 1,
          name: 'Option 1',
        },
        {
          id: 2,
          name: 'Option 2',
        },
        {
          id: 3,
          name: 'Option 3',
        },
      ],
      inputData: null,
      selectedOption: null,
      toggle: null,
    };
  },
};
</script>
