<template>
  <div v-if="alert" class="alert-form">
    {{ logMessage }}
  </div>
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
      logMessage: '',
      alert: false,
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
        this.logMessage = data.message;
        this.alert = true;
      } catch (error) {
        this.logMessage = error.response.data.message;
        this.alert = true;
      }
    },
    async update() {
      try {
        let clientId = this.client._id;
        const clientObj = this.client;
        const { data } = await updateClient(clientId, clientObj);

        this.logMessage = data.message;
        this.alert = true;
      } catch (error) {
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
input {
  padding: 5px 12px;
  margin-top: 4px;
  margin-bottom: 16px;
  border: none;
  border-radius: 4px;
  width: 280px;
  height: 25px;
}

div .alert-form {
  color: rgb(0, 97, 252);
  border-radius: 8px;
  padding: 20px 20px;
  background: rgba(59, 65, 75, 0.836);
  font-size: 14px;
  margin-bottom: 8px;
  transition: 0.3s;
}
</style>
