<template>
  <!-- <h1>견적서</h1> -->
  <form class="quote" @submit.prevent>
    <form class="quote-info-form">
      <div class="quote-num-form">
        <label for="quote-num">견적번호</label>
        <input id="quote-num" type="text" v-model="quoteNumer" />
      </div>
      <div class="quote-date-form">
        <label for="quote-date">견적일자</label>
        <input id="quote-date" type="date" v-model="quoteDate" />
      </div>
    </form>

    <section class="client-user">
      <ClientForm @client-data="putClient" />
      <UserForm @user-data="putUser" />
    </section>

    <ProductForm @product-data="putProduct" @note-data="putNote" />
    <button @click="create">다음</button>
  </form>
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
      quoteNumer: 'AA-0001',
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
        quoteNumer: this.quoteNumer,
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
        quoteNumer: this.quoteNumer,
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
  justify-content: space-between;
}

h1 {
  color: white;
  text-align: center;
  font-weight: regular;
  margin: 10px;
}
.quote {
  border-radius: 8px;
  padding: 12px 20px 12px;
  font-size: 14px;
  border: 1px solid #b1b1b1;
  box-shadow: 0px 0px 5px #444;
}
.quote-info-form {
  display: flex;
  justify-content: space-between;
  width: 400px;
  border-radius: 8px;
  padding: 12px 20px 12px;
  margin: 8px 0 8px;
  background: rgba(59, 65, 75, 0.836);
  border: 1px solid #b1b1b1;
}

label {
  display: block;
  font-size: 14px;
  margin-bottom: 2px;
  text-align: left;
}

#quote-num,
#quote-date {
  padding: 5px 12px;
  margin-top: 4px;
  border: none;
  border-radius: 4px;
  width: 145px;
  height: 25px;
}

button {
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: rgb(73, 154, 73);
  display: block;
  border: none;
  width: 100%;
  padding: 5px 12px;
  margin: 8px 0 8px;
  border-radius: 4px;
}
button:hover {
  background-color: rgb(90, 172, 90);
}
</style>
