<template>
  <div>
    <h1>제품 수정</h1>
    <alert-block v-if="alert" :mode="alertMode" @close-alert="closeAlert">
      <p>{{ alertMessage }}</p>
    </alert-block>
    <ProductForm
      v-if="fetched"
      :fetchedData="fetchedData"
      buttonName="수정"
      @form-data="update"
    />
  </div>
</template>
<script>
import ProductForm from '@/components/product/ProductForm.vue';
import { getProduct, updateProduct } from '@/api/product';
export default {
  components: { ProductForm },
  data() {
    return {
      alert: false,
      alertMode: null,
      alertMessage: '',
      fetchedData: {},
      fetched: false,
      productId: this.$route.params.id,
    };
  },
  setup() {},
  created() {},
  mounted() {
    this.fetchData();
  },
  unmounted() {},
  methods: {
    async fetchData() {
      try {
        const res = await getProduct(this.productId);
        this.fetchedData = res.data.doc;
        this.fetched = true;

        const alertObj = {
          alertMessage: res.data.message,
          alertMode: 'success',
        };
        this.setAlert(alertObj);
      } catch (error) {
        const alertObj = {
          alertMessage: error.response.data.message,
          alertMode: 'error',
        };
        this.setAlert(alertObj);
      }
    },
    async update(dataObj) {
      try {
        const res = await updateProduct(this.productId, dataObj);
        const alertObj = {
          alertMessage: res.data.message,
          alertMode: 'success',
        };
        this.setAlert(alertObj);
        console.log(res);
      } catch (error) {
        console.log(error);
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
