import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 전역 컴포넌트
import BaseButton from '@/components/UI/BaseButton';
import BaseModal from '@/components/UI/BaseModal';
import BaseForm from '@/components/UI/BaseForm';
import AlertBlock from '@/components/UI/AlertBlock';

createApp(App)
  .use(store)
  .use(router)
  .component('base-button', BaseButton)
  .component('base-modal', BaseModal)
  .component('base-form', BaseForm)
  .component('alert-block', AlertBlock)
  .mount('#app');
