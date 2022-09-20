<template>
  <div class="flex flex-col text-primary-dark-2">
    <div class="title-m-600 uppercase mb-10">log in</div>
    <ValidationObserver v-slot="{ handleSubmit }" ref="loginForm" class="mb-10 w-full px-6 md:px-20">
      <form @submit.prevent="handleSubmit(submit)">
        <div class="flex flex-col space-y-10 mb-10">
          <BaseInput
            v-model="form.email"
            label="Email Address"
            vee-rules="required|email"
            vee-name="Email"
            vee-id="email"
          />
          <BaseInput
            v-model="form.password"
            label="Password"
            type="password"
            vee-rules="required|min:8"
            vee-name="Password"
          />
        </div>
        <BaseButton
          text="Log In"
          class="w-full"
          width="w-full"
          type="submit"
          :disabled="loading"
          :loading="loading"
        />
      </form>
      <h4 v-if="error" class="text-danger caption-s-500 mt-2 self-start">
        {{ error }}
      </h4>
    </ValidationObserver>
    <router-link to="/forgot-password" class="link-m-500">Forgot your password?</router-link>
  </div>
</template>

<script>
import BaseInput from '@/components/shared/inputs/BaseInput';
import BaseButton from '@/components/shared/buttons/BaseButton';

export default {
  name: 'Login',
  components: {
    BaseInput,
    BaseButton,
  },
  layout: 'empty',
  auth: 'guest',

  data() {
    return {
      form: {},
      error: '',
      loading: false,
    };
  },

  methods: {
    async submit() {
      try {
        this.error = '';
        this.loading = true;
        this.form.timezone = this.$moment.tz.guess();
        await this.$auth.loginWith('laravelSanctum', { data: this.form });
      } catch (error) {
        this.error = error.response.data.message;
      } finally {
        this.loading = false;
        if (!this.$auth.user.terms_accepted_at) {
          this.$router.push('/onboarding/terms');
        } else {
          this.$router.push('/');
        }
      }
    },
  },
};
</script>
