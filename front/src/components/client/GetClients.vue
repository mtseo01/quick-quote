<template>
  <div>
    <div>{{ logMessage }}</div>
    <div v-for="client in clients" :key="client">
      {{ client.companyName }}
      <button @click="getClient(client._id)">수정하기</button>
      <button @click="deleteBtn(client._id)">삭제하기</button>
    </div>
  </div>
</template>
<script>
import { getClientAll, deleteClient } from '@/api/client';
export default {
  components: {},
  data() {
    return {
      clients: [],
      logMessage: '',
    };
  },
  setup() {},
  created() {
    this.getClients();
  },
  mounted() {},
  unmounted() {},
  methods: {
    async getClients() {
      try {
        const { data } = await getClientAll();
        this.clients = data.docs;
        this.logMessage = data.message;
        console.log(data);
      } catch (error) {
        console.log(error.response.data.message);
        this.logMessage = error.response.data.message;
      }
    },
    getClient(clientId) {
      console.log(clientId);
      this.$router.push('/clients/' + clientId);
    },
    async deleteBtn(clientId) {
      try {
        if (confirm('거래처 정보를 삭제하시겠습니까?')) {
          const res = await deleteClient(clientId);
          console.log(res);
          this.getClients();
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
