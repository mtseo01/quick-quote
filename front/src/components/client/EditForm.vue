<template>
  <alert-block v-if="alert" :mode="alertMode" @close-alert="closeAlert">
    <p>{{ alertMessage }}</p>
  </alert-block>
  <form @submit.prevent>
    <div>
      <input
        placeholder="상호명(*필수)"
        type="text"
        v-model="client.companyName"
      />
    </div>
    <div>
      <input
        placeholder="담당자 이름"
        type="text"
        v-model="client.clientName"
      />
    </div>
    <div>
      <input
        placeholder="사업자등록번호"
        type="text"
        v-model="client.companyRegiNum"
      />
    </div>
    <div><input placeholder="이메일" type="text" v-model="client.email" /></div>
    <div>
      <input placeholder="전화번호" type="text" v-model="client.telephoneNum" />
    </div>
    <div>
      <input placeholder="주소" type="text" v-model="client.companyAddress" />
    </div>

    <base-button mode="large-comfirm" type="submit" @click="update"
      >변경하기</base-button
    >
  </form>
</template>
<script>
import { getClinet, updateClient } from '@/api/client';
export default {
  components: {},
  data() {
    return {
      client: [
        {
          companyName: '',
          clientName: '',
          companyRegiNum: '',
          email: '',
          telephoneNum: '',
          companyAddress: '',
          _id: '',
        },
      ],
      alertMessage: '',
      alert: false,
      alertMode: null,
    };
  },
  setup() {},
  created() {
    this.fetch();
  },
  mounted() {},
  unmounted() {},
  methods: {
    async fetch() {
      try {
        const clientId = this.$route.params.id;
        const { data } = await getClinet(clientId);

        this.client = data.doc;
        this.alertMessage = data.message;
        this.alertMode = 'success';
        this.alert = true;
      } catch (error) {
        this.alertMessage = error.response.data.message;
        this.alertMode = 'error';
        this.alert = true;
      }
    },
    async update() {
      try {
        let clientId = this.client._id;
        const clientObj = this.client;
        const { data } = await updateClient(clientId, clientObj);

        this.alertMessage = data.message;
        this.alertMode = 'success';
        this.alert = true;
      } catch (error) {
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
