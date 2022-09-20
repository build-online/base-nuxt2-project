import Vue from 'vue';
import Spinner from '@/components/shared/Spinner';
import { ValidationProvider, ValidationObserver } from 'vee-validate';

const components = { ValidationProvider, ValidationObserver, Spinner };

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);
});
