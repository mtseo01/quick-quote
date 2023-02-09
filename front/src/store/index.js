import { createStore } from 'vuex';
import { deleteCookie, getTokenFromCookie } from '@/utils/cookie';
export default createStore({
  state: {
    token: getTokenFromCookie() || '',
  },
  getters: {
    isLogin(state) {
      return !!state.token || getTokenFromCookie();
    },
    getToken(state) {
      return state.token;
    },
  },
  mutations: {
    setToken(state) {
      state.token = getTokenFromCookie();
    },
    login(state) {
      state.isLogin = true;
      state.token = getTokenFromCookie();
    },
    logout(state) {
      state.token = '';
      deleteCookie('token');
    },
  },
  actions: {},
  modules: {},
});
