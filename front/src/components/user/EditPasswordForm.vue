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
        placeholder="기존 비밀번호"
        v-model="password"
      />
    </div>
    <div>
      <label for="new-password">new password</label>
      <input
        id="new-password"
        required
        type="password"
        placeholder="새 비밀번호"
        v-model="newPassword"
      />
    </div>
    <div>
      <label for="confirm-new-password">confirm new password</label>
      <input
        id="confirm-new-password"
        required
        type="password"
        placeholder="새 비밀번호 확인"
        v-model="confirmNewPassword"
      />
    </div>
    <base-button mode="large-cancel" @click="update()"
      >비빌번호 변경</base-button
    >
  </form>
</template>
<script>
import { updatePassword } from '@/api/user';
export default {
  components: {},
  data() {
    return {
      password: '',
      newPassword: '',
      confirmNewPassword: '',
      alert: false,
      logMessage: '',
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async update() {
      if (this.newPassword === this.confirmNewPassword) {
        try {
          const userId = this.$route.params.id;
          const userObj = {
            password: this.password,
            newPassword: this.newPassword,
          };
          const res = await updatePassword(userId, userObj);
          console.log(res);
          this.alert = true;
          this.logMessage = res.data.message;
        } catch (error) {
          console.log(error);
          this.alert = true;
          this.logMessage = error.response.data.message;
        }
      } else {
        this.alert = true;
        this.logMessage = '비밀번호가 틀렸습니다';
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
