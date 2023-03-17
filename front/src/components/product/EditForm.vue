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
        <base-button mode="large-comfirm" @click="update">수정</base-button>
      </div>
    </base-form>
  </div>
</template>
<script>
import { updateProduct } from '@/api/product';
export default {
  emits: ['alert-message', 'form-data'],
  props: ['fetchedData'],
  data() {
    return {
      productName: this.fetchedData.productName || '',
      unitPrice: this.fetchedData.unitPrice || '',
      category: this.fetchedData.category || '',
      productId: this.fetchedData._id || null,
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async update() {
      try {
        const dataObj = {
          productName: this.productName,
          unitPrice: this.unitPrice,
          category: this.category,
        };
        const res = await updateProduct(this.productId, dataObj);
        // emit
        const alertObj = {
          alertMessage: res.data.message,
          alertMode: 'success',
        };
        this.$emit('alert-message', alertObj);
        console.log(res);
      } catch (error) {
        console.log(error);
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
