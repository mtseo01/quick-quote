<template>
  <h1>견적서</h1>
  <div>
    <label for="quote-num">No. </label>
    <input id="quote-num" type="text" v-model="quoteNum" />
  </div>
  <div>
    <label for="quote-date">견적일자 </label>
    <input id="quote-date" type="date" v-model="quoteDate" />
  </div>
  <div>
    <label for="quote-title">견적서 제목 </label>
    <input id="quote-title" type="text" v-model="quoteTitle" />
  </div>
  <div class="client-user">
    <ClientForm @client-data="putClient" />
    <UserForm @user-data="putUser" />
  </div>

  <ProductForm @product-data="putProduct" @note-data="putNote" />
  <button @click="create">다음</button>
</template>

<script>
import { createQuotation } from '@/api/quotation';
import ClientForm from '@/components/quotation/ClientForm.vue';
import UserForm from '@/components/quotation/UserForm.vue';
import ProductForm from '@/components/quotation/ProductForm.vue';
export default {
  components: { UserForm, ProductForm, ClientForm },
  data() {
    return {
      quoteNum: 'AA-0001',
      quoteDate: '',
      quoteTitle: '',
      amount: '',
      client: {
        companyName: '',
        clientName: '',
        companyRegiNum: '',
        email: '',
        telephoneNum: '',
        companyAddress: '',
        _id: '',
      },
      user: {
        userId: '',
        userName: '',
        email: '',
        companyName: '',
        companyRegiNum: '',
        telephoneNum: '',
        companyAddress: '',
        businessType: '',
        businessItem: '',
      },
      productList: [],
      note: '',
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    putClient(data) {
      this.client = data;
    },
    putUser(data) {
      this.user = data;
    },
    putProduct(data, amount) {
      this.productList = data;
      this.amount = amount;
    },
    putNote(data) {
      this.note = data;
    },
    log() {
      const data = {
        quoteNum: this.quoteNum,
        quoteDate: this.quoteDate,
        quoteTitle: this.quoteTitle,
        user: this.user,
        client: this.client,
        products: this.productList,
        note: this.note,
        amount: this.amount,
      };
      console.log(data);
    },
    putName(data) {
      console.log(data);
    },
    async create() {
      const data = {
        quoteNum: this.quoteNum,
        quoteDate: this.quoteDate,
        quoteTitle: this.quoteTitle,
        user: this.user,
        client: this.client,
        products: this.productList,
        note: this.note,
        amount: this.amount,
      };
      try {
        const res = await createQuotation(data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
.client-user {
  display: flex;
}
</style>
