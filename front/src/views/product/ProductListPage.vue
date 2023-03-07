<template>
  <div>
    <h1>제품 목록</h1>
    <alert-block v-if="alert" :mode="alertMode" @close-alert="closeAlert">
      <p>{{ alertMessage }}</p>
    </alert-block>
    <ProductList
      v-if="fetched"
      :data="fetchProducts"
      @alert-message="setAlert"
    />
  </div>
</template>
<script>
import { getProductsAll } from '@/api/product';
import ProductList from '@/components/product/ProductList.vue';
export default {
  components: { ProductList },
  data() {
    return {
      alert: false,
      alertMode: null,
      alertMessage: '',
      fetchProducts: [],
      fetched: false,
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
        const res = await getProductsAll();
        this.fetched = true;
        this.fetchProducts = res.data.docs;
        this.alertMessage = res.data.message;
        this.alert = true;
        this.alertMode = 'success';
      } catch (error) {
        this.alertMessage = error.response.data.message;
        this.alert = true;
        this.alertMode = 'error';
        console.log(error);
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
