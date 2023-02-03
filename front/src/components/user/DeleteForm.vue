<template>
  <div v-if="alert" class="alert-form">
    {{ logMessage }}
  </div>
  <form @submit.prevent>
    <div>
      <label for="password">password</label>
      <input
        id="password"
        autofocus
        required
        type="password"
        placeholder="비밀번호"
        v-model="password"
      />
    </div>
    <div>
      <label for="confirm-password">confirm password</label>
      <input
        id="confirm-password"
        required
        type="password"
        placeholder="비밀번호 확인"
        v-model="confirmPassword"
      />
    </div>
    <base-button mode="large-cancel" @click="deleteOne()">탈퇴하기</base-button>
  </form>
</template>
<script>
// import axios from 'axios';
import { deleteUser } from '@/api/user';
export default {
  components: {},
  data() {
    return {
      password: '',
      confirmPassword: '',
      logMessage: '',
      alert: false,
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async deleteOne() {
      if (this.password === this.confirmPassword) {
        try {
          const userId = this.$route.params.id;
          const password = {
            password: this.password,
          };
          const res = await deleteUser(userId, password);
          this.logMessage = res.data.message;
          this.alert = true;
          console.log(res);
        } catch (error) {
          console.log(error);
          this.logMessage = error.response.data.message;
          this.alert = true;
        }
      } else {
        this.logMessage = '비밀번호가 틀렸습니다.';
        this.alert = true;
      }
    },
  },
};
</script>
<style scoped>
div .alert-form {
  color: rgb(251, 39, 39);
  border-radius: 8px;
  padding: 20px 20px;
  background: rgba(59, 65, 75, 0.836);
  font-size: 14px;
  margin-bottom: 8px;
  transition: 0.3s;
}

form {
  width: 320px;
  padding: 20px 20px;
  border-radius: 8px;
  text-align: center;
  background: rgba(59, 65, 75, 0.836);
}
label {
  display: block;
  font-size: 14px;
  margin-bottom: 2px;
  text-align: left;
}

input {
  padding: 5px 12px;
  margin-top: 4px;
  margin-bottom: 8px;
  border: 1px solid;
  border-radius: 4px;
  width: 280px;
  height: 25px;
  border: none;
}
</style>
