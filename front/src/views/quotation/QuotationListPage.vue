<template>
  <div>
    <alert-block v-if="alert" :mode="alertMode" @close-alert="closeAlert">
      <p>{{ alertMessage }}</p>
    </alert-block>
    <table>
      <tr class="head">
        <th class="head-company">Quotations List</th>
      </tr>
      <tr class="content" v-for="quoation in quotationList" :key="quoation">
        <td>
          <h4>{{ quoation.quoteTitle }}</h4>
          <div class="content-company">
            <div class="content-company-info">
              <p>생성일자 : {{ quoation.createdAt }}</p>
              <p>수정일자 : {{ quoation.updatedAt }}</p>
            </div>
            <div>
              <base-button @click="updateBtn(quoation._id)">수정</base-button>
              <base-button mode="cancel" @click="deleteBtn(quoation._id)"
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
import { getQuotationsAll, deleteQuotation } from '@/api/quotation';
export default {
  components: {},
  data() {
    return {
      quotationList: [],
      alertMessage: '',
      alert: false,
      alertMode: null,
    };
  },
  created() {
    this.getQuotations();
  },
  mounted() {},
  unmounted() {},
  methods: {
    async getQuotations() {
      try {
        const res = await getQuotationsAll();
        this.quotationList = res.data.docs;
        this.alertMessage = `${res.data.docs.length}개의 견적서를 불러왔습니다.`;
        this.alertMode = 'success';
        this.alert = true;
        console.log(this.quotationList);
      } catch (error) {
        this.alertMessage = error.response.data.message;
        this.alertMode = 'error';
        this.alert = true;
        console.log(error);
      }
    },
    updateBtn(quotationId) {
      this.$router.push('/quotations/' + quotationId);
    },
    async deleteBtn(quotationId) {
      try {
        if (confirm('견적서를 삭제하시겠습니까?')) {
          const res = await deleteQuotation(quotationId);
          console.log(res);
          this.getQuotations();
        }
      } catch (error) {
        console.log(error);
        this.alertMessage = '삭제를 실패하였습니다.';
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
