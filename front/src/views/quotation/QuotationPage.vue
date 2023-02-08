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
      <ClientForm @client-data="putClient" />
      <UserForm @user-data="putUser" />
    </section>

    <ProductForm @product-data="putProduct" @note-data="putNote" />
    <base-modal v-if="modal" title="견적서 제목" @close="modal = false">
      <template #default>
        <input
          class="input-title"
          type="text"
          placeholder="견적서 제목을 입력해주세요."
          v-model="quoteTitle"
        />
      </template>
      <template #button>
        <base-button mode="large" @click="saveQuotation">확인</base-button>
        <base-button mode="large-cancel" @click="modal = false"
          >취소</base-button
        >
      </template>
    </base-modal>
    <base-button mode="large" @click="modal = true">저장하기</base-button>
    <base-button mode="large-comfirm" @click="create"> 생성하기 </base-button>
  </form>
</template>

<script>
import { createQuotation, updateQuotation } from '@/api/quotation';
import ClientForm from '@/components/quotation/ClientForm.vue';
import UserForm from '@/components/quotation/UserForm.vue';
import ProductForm from '@/components/quotation/ProductForm.vue';
import BaseModal from '@/components/UI/BaseModal.vue';
import { makePdf } from '@/utils/pdf';
export default {
  components: { UserForm, ProductForm, ClientForm, BaseModal },
  data() {
    return {
      quoteNumber: 'AA-0001',
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
      modal: false,
      quoteId: null,
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

    putName(data) {
      console.log(data);
    },
    async saveQuotation() {
      // 로그인 여부에 확인 후 타이틀 입력하기
      const data = {
        quoteNumber: this.quoteNumber,
        quoteDate: this.quoteDate,
        quoteTitle: this.quoteTitle,
        user: this.user,
        client: this.client,
        products: this.productList,
        note: this.note,
        amount: this.amount,
      };
      if (this.quoteId === null) {
        try {
          const res = await createQuotation(data);
          console.log(res);
          this.quoteId = res.data.result._id;
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const res = await updateQuotation(this.quoteId, data);
          console.log(res);
        } catch (error) {
          console.log(error);
        }
      }
    },
    create() {
      let quoteObj = {
        quoteNumber: this.quoteNumber,
        quoteDate: this.quoteDate,
        amount: this.amount,
        note: this.note,
      };
      let userObj = this.user;
      let clientObj = this.client;
      let productArr = [];
      this.productList.forEach(e => {
        productArr.push([
          e.name,
          e.quantity.toLocaleString('ko-KR'),
          e.unitPrice.toLocaleString('ko-KR'),
          e.rate,
          e.price.toLocaleString('ko-KR'),
          e.tax.toLocaleString('ko-KR'),
          e.subTotal.toLocaleString('ko-KR'),
        ]);
      });
      makePdf(quoteObj, userObj, clientObj, productArr);
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
.input-title {
  text-align: center;
  padding: 5px 12px;
  margin-top: 30px;
  border: 1px solid #b1b1b1;
  border-radius: 4px;
  width: 280px;
  height: 25px;
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
