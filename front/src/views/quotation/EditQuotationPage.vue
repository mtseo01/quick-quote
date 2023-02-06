<template>
  <!-- <h1>견적서</h1> -->
  <form class="quote" @submit.prevent>
    <form class="quote-info-form">
      <div class="quote-num-form">
        <label for="quote-num">견적번호</label>
        <input id="quote-num" type="text" v-model="quoteNumber" />
      </div>
      <div class="quote-date-form">
        <label for="quote-date">견적일자</label>
        <input id="quote-date" type="date" v-model="quoteDate" />
      </div>
    </form>

    <section class="client-user">
      <EditClientForm
        v-if="getQuotationData"
        @client-data="putClient"
        :data="client"
      />
      <EditUserForm v-if="getQuotationData" @user-data="putUser" :data="user" />
    </section>

    <EditProductForm
      v-if="getQuotationData"
      @product-data="putProduct"
      @note-data="putNote"
      :productsData="productList"
      :amountData="amount"
      :noteData="note"
    />
    <base-button mode="large" @click="update">수정하기</base-button>
    <base-button mode="large-comfirm"> 생성하기 </base-button>
  </form>
</template>

<script>
import { getQuotation, updateQuotation } from '@/api/quotation';
import EditClientForm from '@/components/quotation/EditClientForm.vue';
import EditUserForm from '@/components/quotation/EditUserForm.vue';
import EditProductForm from '@/components/quotation/EditProductForm.vue';
export default {
  components: { EditUserForm, EditProductForm, EditClientForm },
  data() {
    return {
      quoteNumber: '',
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
      getQuotationData: false,
    };
  },
  setup() {},
  created() {},
  mounted() {
    this.fetch();
  },
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
    async fetch() {
      const id = this.$route.params.id;
      try {
        const res = await getQuotation(id);
        this.quoteNumber = res.data.doc.quoteNumber;
        this.quoteDate = res.data.doc.quoteDate;
        this.user = res.data.doc.user;

        this.client = res.data.doc.client;
        this.productList = res.data.doc.products;
        this.note = res.data.doc.note;
        this.amount = res.data.doc.amount;
        this.getQuotationData = true;
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
    async update() {
      // 로그인 여부에 확인 후 타이틀 입력하기
      const id = this.$route.params.id;
      const data = {
        quoteNumber: this.quoteNumber,
        quoteDate: this.quoteDate,
        user: this.user,
        client: this.client,
        products: this.productList,
        note: this.note,
        amount: this.amount,
      };
      try {
        const res = await updateQuotation(id, data);
        console.log(res);

        // res.data.doc.
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
</style>
