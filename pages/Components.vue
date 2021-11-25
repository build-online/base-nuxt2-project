<template>
  <div>
    <h1 class='text-3xl font-bold text-primary mb-5'>Components</h1>
    <div class='grid grid grid-cols-1 lg:grid-cols-2 gap-10'>
      <div class='flex flex-col space-y-5'>
        <BaseInput v-model='inputData' label='Name' />
        <BaseSelect v-model='selectedOption' label='Options' :options='selectOptions' />
        <BaseTextArea label='Message' />
      </div>
      <div class='flex flex-col space-y-5 items-start'>
        <div class='grid grid-cols-2 grid-rows-2 gap-4 items-center w-full'>
          <BaseButton text='Login' @click="onLogin" />
          <BaseButton text='Button' size='small' />
          <BaseButton text='Launch toast' btn-style='outline' @click='launchToast'>
            <template slot='leftIcon'>
              <InfoIcon class='w-5 h-5' />
            </template>
          </BaseButton>
          <BaseButton text='Launch modal' @click='launchModal'>
            <template slot='rightIcon'>
              <InfoIcon class='w-5 h-5' />
            </template>
          </BaseButton>

        </div>
        <div class='flex justify-start space-x-3'>
          <Badge text='Badge' />
          <Badge text='Badge' :with-close-button='true' />
        </div>
        <div class='flex items-center space-x-3'>
          <AvatarImage />
          <AvatarImage size='medium' :with-status='true' status='active' />
          <AvatarImage size='small' :with-status='true' />
        </div>
        <Toggle v-model='toggle' />
        <Toggle label='Accept terms and conditions' />
      </div>
    </div>
    <!-- Modal-->
    <portal to='main'>
      <Modal ref='modal'>
        <template slot='content'>
          <ActionsModal />
        </template>
      </Modal>
    </portal>
  </div>
</template>

<script>
import BaseInput from '@/components/shared/inputs/BaseInput'
import BaseSelect from '@/components/shared/inputs/BaseSelect'
import BaseButton from '@/components/shared/buttons/BaseButton'
import Toggle from '@/components/shared/buttons/Toggle'
import BaseTextArea from '@/components/shared/inputs/BaseTextArea'
import Badge from '@/components/shared/Badge'
import AvatarImage from '@/components/shared/AvatarImage'
import InfoIcon from '@/components/shared/icons/InfoIcon'
import Modal from '@/components/shared/modals/Modal'
import ActionsModal from '@/components/shared/modals/ActionsModal'


export default {
  name: 'Components',
  components: {
    InfoIcon,
    AvatarImage,
    Badge,
    BaseTextArea,
    Toggle,
    BaseButton,
    BaseSelect,
    BaseInput,
    Modal,
    ActionsModal
  },
  layout: 'default',
  data() {
    return {
      selectOptions: [
        {
          id: 1,
          name: 'Option 1'
        },
        {
          id: 2,
          name: 'Option 2'
        },
        {
          id: 3,
          name: 'Option 3'
        }
      ],
      inputData: null,
      selectedOption: null,
      toggle: null
    }
  },
  methods: {
    launchToast() {
      this.$toast.showMessage({
        title: "It works",
        message: "YAY Our Plugin worked Successfully!",
        type: "success"
      });
    },

    launchModal() {
      this.$refs.modal.show()
    },

    async onLogin() {
      await this.$auth.loginWith('local', {
        data: {
          email: 'admin@admin.com',
          password: 'password',
        },
      });
    }
  }
}
</script>
