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
  <div class="client-user">
    <ClientForm @client-data="putClient" />
    <UserForm @user-data="putUser" />
  </div>
  <ProductForm @product-data="putProduct" />
  <button @click="log">다음</button>
</template>
<script>
import ClientForm from '@/components/quotation/ClientForm.vue';
import UserForm from '@/components/quotation/UserForm.vue';
import ProductForm from '@/components/quotation/ProductForm.vue';
export default {
  components: { UserForm, ProductForm, ClientForm },
  data() {
    return {
      quoteNum: 'AA-0001',
      quoteDate: '',
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
      productList: [
        {
          name: '',
          // standard: '',
          quantity: 1,
          unitPrice: 1,
          price: 1,
          tax: 0,
        },
      ],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    putClient(data) {
      this.client = data;
      console.log(this.client);
    },
    putUser(data) {
      this.user = data;
      console.log(this.user);
    },
    putProduct(data) {
      this.productList = data;
    },
    log() {
      console.log(this.client, this.user, this.productList);
    },
  },
};
</script>
<style scoped>
.client-user {
  display: flex;
}
</style>
