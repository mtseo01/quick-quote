<template>
  <div>
    <div class="alert-form">{{ logMessage }}</div>

    <table>
      <tr class="head">
        <th class="head-company">Company List</th>
      </tr>
      <tr class="content" v-for="client in clients" :key="client">
        <td>
          <h4>{{ client.companyName }}</h4>
          <div class="content-company">
            <div class="content-company-info">
              <p>{{ client.clientName }}</p>
              <p>{{ client.email }}</p>
            </div>
            <div>
              <base-button @click="getClient(client._id)">수정</base-button>
              <base-button mode="cancel" @click="deleteBtn(client._id)"
                >삭제</base-button
              >
            </div>
          </div>
        </td>
      </tr>
    </table>
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
<style scoped>
div .alert-form {
  color: rgb(0, 97, 252);
  border-radius: 8px;
  padding: 20px 20px;
  background: rgba(59, 65, 75, 0.836);
  font-size: 14px;
  margin-bottom: 8px;
  transition: 0.3s;
}

table {
  width: 320px;
  padding: 20px 20px;
  border-radius: 8px;
  text-align: center;
  background: rgba(59, 65, 75, 0.836);
}

table th {
  border-bottom: 1px solid snow;
  padding-bottom: 5px;
}

table .content {
  font-size: 12px;
}
table h4 {
  text-align: left;
  margin-top: 8px;
}

.content-company {
  display: flex;
  justify-content: space-between;
  padding: 3px;
  margin-bottom: 5px;
}
.content-company-info {
  text-align: left;
}
</style>
