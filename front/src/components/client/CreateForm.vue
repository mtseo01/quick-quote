<template>
  <alert-block v-if="alert" :mode="alertMode" @close-alert="closeAlert">
    <p>{{ alertMessage }}</p>
  </alert-block>
  <form @submit.prevent>
    <div>
      <input placeholder="상호명(*필수)" type="text" v-model="companyName" />
    </div>
    <div>
      <input placeholder="담당자 이름" type="text" v-model="clientName" />
    </div>
    <div>
      <input
        placeholder="사업자등록번호"
        type="text"
        v-model="companyRegiNum"
      />
    </div>
    <div><input placeholder="이메일" type="text" v-model="email" /></div>
    <div>
      <input placeholder="전화번호" type="text" v-model="telephoneNum" />
    </div>
    <div><input placeholder="주소" type="text" v-model="companyAddress" /></div>

    <base-button mode="large-comfirm" type="submit" @click="submit"
      >등록하기</base-button
    >
  </form>
</template>
<script>
// import axios from 'axios';
import { registerClient } from '@/api/client';
export default {
  components: {},
  data() {
    return {
      companyName: '', // 필수
      clientName: '',
      companyRegiNum: '',
      email: '',
      telephoneNum: '',
      companyAddress: '',
      // 로그메세지
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
    async submit() {
      try {
        const clientObj = {
          companyName: this.companyName, // 필수
          clientName: this.clientName,
          companyRegiNum: this.companyRegiNum,
          email: this.email,
          telephoneNum: this.telephoneNum,
          companyAddress: this.companyAddress,
        };
        const { data } = await registerClient(clientObj);

        console.log(data);
        this.alertMessage = data.message;
        this.alertMode = 'success';
        this.alert = true;
      } catch (error) {
        console.log(error.response.data.message);
        this.alertMessage = error.response.data.message;
        this.alertMode = 'error';
        this.alert = true;
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
input {
  padding: 5px 12px;
  margin-top: 4px;
  margin-bottom: 16px;
  border: none;
  border-radius: 4px;
  width: 280px;
  height: 25px;
}
</style>
