<template>
  <div>
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
  emits: ['alert-message'],
  components: {},
  data() {
    return {
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

        // emit
        const alertObj = {
          alertMessage: res.data.message,
          alertMode: 'success',
        };
        this.$emit('alert-message', alertObj);
        console.log(res);
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
