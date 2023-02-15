<template>
  <alert-block v-if="alert" :mode="alertMode" @close-alert="closeAlert">
    {{ alertMessage }}
  </alert-block>
  <base-form @submit.prevent>
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
  </base-form>
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
          this.alertMode = 'success';
          this.alertMessage = res.data.message;
        } catch (error) {
          console.log(error);
          this.alert = true;
          this.alertMode = 'error';
          this.alertMessage = error.response.data.message;
        }
      } else {
        this.alert = true;
        this.alertMode = 'error';
        this.alertMessage = '비밀번호가 틀렸습니다';
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
