<template>
  <div>
    <div>{{ logMessage }}</div>
    <div v-for="client in clients" :key="client">
      {{ client.companyName }}
      <button @click="getClient(client._id)">수정하기</button>
      <!-- <button @click="getClient(client._id)">삭제하기</button> -->
    </div>
  </div>
</template>
<script>
import { getClientAll } from '@/api/client';
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
  },
};
</script>
