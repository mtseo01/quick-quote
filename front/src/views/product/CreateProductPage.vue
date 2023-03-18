<template>
  <div>
    <h1>제품 등록</h1>
    <alert-block v-if="alert" :mode="alertMode" @close-alert="closeAlert">
      <p>{{ alertMessage }}</p>
    </alert-block>
    <ProductForm fetchedData="" @form-data="create" buttonName="생성" />
  </div>
</template>
<script>
import ProductForm from '@/components/product/ProductForm.vue';
import { createProduct } from '@/api/product';
export default {
  components: { ProductForm },
  data() {
    return {
      alert: false,
      alertMessage: '',
      alertMode: null,
    };
  },
  methods: {
    async create(dataObj) {
      try {
        const res = await createProduct(dataObj);
        const alertObj = {
          alertMessage: res.data.message,
          alertMode: 'success',
        };
        this.setAlert(alertObj);
        console.log(res);
      } catch (error) {
        const alertObj = {
          alertMessage: error.response.data.message,
          alertMode: 'error',
        };
        this.setAlert(alertObj);
      }
    },
    closeAlert() {
      this.alert = false;
      this.alertMessage = '';
      this.alertMode = null;
    },
    setAlert(alertObj) {
      this.alertMessage = alertObj.alertMessage;
      this.alertMode = alertObj.alertMode;
      this.alert = true;
    },
  },
};
</script>
<style scoped>
h1 {
  color: white;
  text-align: center;
  font-weight: regular;
  margin: 10px;
}
</style>
