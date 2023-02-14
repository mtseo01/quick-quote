<template>
  <alert-block v-if="alert" :mode="alertMode" @close-alert="closeAlert">
    <p>{{ alertMessage }}</p>
  </alert-block>
  <form class="login-form" @submit.prevent>
    <div class="email-form">
      <label for="email">email</label>
      <input id="email" autofocus type="text" v-model="email" />
    </div>
    <div>
      <label for="password">password</label>
      <input id="password" type="password" v-model="password" />
    </div>
    <base-button mode="large-comfirm" @click="login">로그인</base-button>
  </form>

  <div class="signup-form">
    <span>회원가입이 필요하세요?</span>
    <router-link :to="{ name: 'signup' }">회원가입</router-link>
  </div>
</template>
<script>
// import axios from 'axios';
import { loginUser } from '@/api/user';

export default {
  components: {},
  data() {
    return {
      email: '',
      password: '',
      alertMessage: '',
      alert: false,
      alertMode: null,
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async login() {
      if (this.email.trim() === '') {
        this.alert = true;
        this.alertMode = 'warning';
        this.alertMessage = '이메일을 입력해주세요.';
      } else if (this.password.trim() === '') {
        this.alert = true;
        this.alertMode = 'warning';
        this.alertMessage = '비밀번호를 입력해주세요.';
      } else {
        try {
          const userObj = {
            email: this.email,
            password: this.password,
          };
          const response = await loginUser(userObj);
          console.log(response.data);
          this.alertMessage = response.data.message;
          this.$store.commit('login');
          this.$router.push({ name: 'main' });
        } catch (error) {
          console.log(error.response.data.message);
          this.alertMessage = error.response.data.message;
          this.alertMode = 'error';
          this.alert = true;
        }
      }
    },
    closeAlert() {
      this.alert = false;
      this.alertMessage = '';
      this.alertMode = null;
    },
  },
};
</script>
<style scoped>
form {
  border-radius: 8px;
  padding: 12px 20px 20px;
  background: rgba(59, 65, 75, 0.836);
  font-size: 14px;
  /* font-weight: 500; */
}
div .signup-form {
  /* border: 0.8px solid #9aa2ab; */
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  padding: 20px 20px;
  /* background: #12202f; */
  background: rgba(59, 65, 75, 0.836);
  font-size: 14px;
  margin-top: 20px;
}
div .signup-form a {
  color: rgb(0, 97, 252);
  text-decoration: none;
}
div .signup-form a:hover {
  color: rgb(34, 116, 247);
}

label {
  display: block;
  font-size: 14px;
  margin-bottom: 2px;
  text-align: left;
}
.login-form input {
  padding: 5px 12px;
  margin-top: 4px;
  margin-bottom: 16px;
  border: none;
  border-radius: 4px;
  width: 280px;
  height: 25px;
}
</style>
