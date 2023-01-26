<template>
  <div v-if="alert" class="alert-form">
    {{ logMessage }}
  </div>
  <form class="login-form" @submit.prevent>
    <div class="email-form">
      <label for="email">email</label>
      <input id="email" autofocus required type="text" v-model="email" />
    </div>
    <div>
      <label for="password">password</label>
      <input id="password" required type="text" v-model="password" />
    </div>
    <button @click="login">로그인</button>
  </form>

  <div class="signup-form">
    <span>아이디가 없으신가요?</span>
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
      logMessage: '',
      alert: false,
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async login() {
      try {
        const userObj = {
          email: this.email,
          password: this.password,
        };
        const response = await loginUser(userObj);
        console.log(response.data);
        this.logMessage = response.data.message;
        this.$router.push({ name: 'main' });
      } catch (error) {
        console.log(error.response.data.message);
        this.logMessage = error.response.data.message;
        this.alert = true;
      }
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
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  padding: 20px 20px;
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
div .alert-form {
  color: rgb(251, 39, 39);
  border-radius: 8px;
  padding: 20px 20px;
  background: rgba(59, 65, 75, 0.836);
  font-size: 14px;
  margin-bottom: 8px;
  transition: 0.3s;
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
  border: 1px solid;
  border-radius: 4px;
  width: 280px;
  height: 25px;
}
button {
  color: white;
  background-color: rgb(73, 154, 73);
  display: block;
  border: none;
  width: 100%;
  padding: 5px 12px;
  margin-top: 8px;
  border-radius: 4px;
}
button:hover {
  background-color: rgb(90, 172, 90);
}
</style>
