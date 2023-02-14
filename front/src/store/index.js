import { createStore } from 'vuex';
import {
  getAuthFromCookie,
  saveAuthToCookie,
  deleteCookie,
} from '@/utils/cookie';
export default createStore({
  state: {
    isLogin: getAuthFromCookie() || '',
  },
  getters: {
    isLogin(state) {
      return !!state.isLogin || getAuthFromCookie();
    },
  },
  mutations: {
    login(state) {
      state.isLogin = true;
      saveAuthToCookie(true);
    },
    logout(state) {
      state.isLogin = '';
      saveAuthToCookie();
      deleteCookie('is_login');
    },
  },
  actions: {},
  modules: {},
});
