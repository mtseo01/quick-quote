<template>
  <div>
    <h1>제품 수정</h1>
    <alert-block v-if="alert" :mode="alertMode" @close-alert="closeAlert">
      <p>{{ alertMessage }}</p>
    </alert-block>
    <EditForm
      v-if="fetched"
      :fetchedData="fetchedData"
      @alert-message="setAlert"
    />
  </div>
</template>
<script>
import EditForm from '@/components/product/EditForm.vue';
import { getProduct } from '@/api/product';
export default {
  components: { EditForm },
  data() {
    return {
      alert: false,
      alertMode: null,
      alertMessage: '',
      fetchedData: {},
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
        const productId = this.$route.params.id;
        const res = await getProduct(productId);
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
