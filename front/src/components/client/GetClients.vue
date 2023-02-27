<template>
  <div>
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
import { deleteClient } from '@/api/client';
export default {
  emits: ['alert-message'],
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  components: {},
  data() {
    return {
      clients: this.data,
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    getClient(clientId) {
      console.log(clientId);
      this.$router.push('/clients/' + clientId);
    },
    async deleteBtn(clientId) {
      try {
        if (confirm('거래처 정보를 삭제하시겠습니까?')) {
          const res = await deleteClient(clientId);
          // 삭제 완료시 clients 업데이트해서 컴포넌트 재 랜더링
          const index = this.clients.findIndex(
            client => client._id === clientId,
          );
          this.clients.splice(index, 1);

          // emit
          const alertObj = {
            alertMessage: res.data.message,
            alertMode: 'success',
          };
          this.$emit('alert-message', alertObj);
        }
      } catch (error) {
        // emit
        const alertObj = {
          alertMessage: error.response.data.message,
          alertMode: 'error',
        };
        this.$emit('alert-message', alertObj);
      }
    },
  },
};
</script>
<style scoped>
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
