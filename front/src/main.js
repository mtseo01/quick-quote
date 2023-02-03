import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 전역 컴포넌트
import BaseButton from '@/components/UI/BaseButton.vue';

createApp(App)
  .use(store)
  .use(router)
  .component('base-button', BaseButton)
  .mount('#app');
