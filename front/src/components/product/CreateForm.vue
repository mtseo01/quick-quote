<template>
  <div>
    <alert-block v-if="alert" :mode="alertMode" @close-alert="closeAlert">
      <p>{{ alertMessage }}</p>
    </alert-block>
    <base-form>
      <div>
        <label for="">제품명</label>
        <input type="text" v-model="productName" />
      </div>
      <div>
        <label for="">단가(금액)</label>
        <input type="text" v-model.number="unitPrice" />
      </div>
      <div>
        <label for="">카테고리</label>
        <input type="text" v-model="category" />
      </div>
      <div>
        <base-button mode="large-comfirm" @click="create">생성</base-button>
      </div>
    </base-form>
  </div>
</template>
<script>
import { createProduct } from '@/api/product';
export default {
  components: {},
  data() {
    return {
      alert: false,
      alertMessage: '',
      alertMode: null,
      productName: '',
      unitPrice: '',
      category: '',
    };
  },

  methods: {
    async create() {
      const productObj = {
        productName: this.productName,
        unitPrice: this.unitPrice,
        category: this.category,
      };
      try {
        const res = await createProduct(productObj);
        this.alertMessage = res.data.message;
        this.alertMode = 'success';
        this.alert = true;
        console.log(res);
      } catch (error) {
        console.log(error);
        this.alertMessage = error.response.data.message;
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
label {
  display: block;
  font-size: 14px;
  margin-bottom: 2px;
  text-align: left;
}
input {
  padding: 5px 12px;
  margin-top: 4px;
  margin-bottom: 16px;
  border: none;
  border-radius: 4px;
  width: 280px;
  height: 25px;
}
</style>
