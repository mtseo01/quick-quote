<template>
  <base-modal v-if="modal" title="거래처 목록" @close="modal = false">
    <template #default>
      <div v-if="clients.length === 0"><p>거래처가 없습니다.</p></div>
      <div
        class="select-client"
        v-for="(client, index) in clients"
        :key="client._id"
      >
        <h4 @click="selectClient(index)">{{ client.companyName }}</h4>
        <div class="content-company-info">
          <p>{{ client.clientName }}</p>
          <p>{{ client.email }}</p>
        </div>
      </div>
    </template>
  </base-modal>
  <form @submit.prevent @change="sendData">
    <div class="form-head">
      <span>수신인</span>
      <base-button @click="getClients">검색</base-button>
    </div>
    <div>
      <input placeholder="상호명" type="text" v-model="client.companyName" />
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
    <div>
      <input placeholder="이메일" type="text" v-model="client.email" />
    </div>
    <div>
      <input placeholder="전화번호" type="text" v-model="client.telephoneNum" />
    </div>
    <div>
      <input placeholder="주소" type="text" v-model="client.companyAddress" />
    </div>
  </form>
</template>
<script>
import { getClientAll } from '@/api/client';
export default {
  emits: ['client-data'],

  data() {
    return {
      client: {
        companyName: '',
        clientName: '',
        companyRegiNum: '',
        email: '',
        telephoneNum: '',
        companyAddress: '',
        _id: '',
      },
      modal: false,
      clients: [],
    };
  },
  computed: {},
  setup() {},
  created() {
    // this.fetch();
  },
  mounted() {},
  unmounted() {},
  methods: {
    sendData() {
      return this.$emit('client-data', this.client);
    },
    async getClients() {
      this.modal = true;
      try {
        const { data } = await getClientAll();
        this.clients = data.docs;

        console.log(data);
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    selectClient(index) {
      this.client = this.clients[index];
      this.modal = false;
    },
  },
};
</script>
<style scoped>
form {
  width: 400px;
  margin: 8px 12px 8px 0;
  border-radius: 8px;
  padding: 12px 20px 12px;
  background: rgba(59, 65, 75, 0.836);
  font-size: 14px;
  border: 1px solid #b1b1b1;
  /* font-weight: 500; */
}
.form-head {
  display: flex;
  justify-content: space-between;
}

input {
  padding: 5px 12px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
  width: 100%;
  height: 25px;
}

.select-client {
  cursor: pointer;
  margin-bottom: 8px;
}
</style>
