<template>
  <h1>거래처 등록</h1>
  <alert-block v-if="alert" :mode="alertMode" @close-alert="closeAlert">
    <p>{{ alertMessage }}</p>
  </alert-block>
  <div>
    <CreateClient fetchedData="" @form-data="create" buttonName="생성" />
  </div>
</template>
<script>
import { registerClient } from '@/api/client';
import CreateClient from '@/components/client/ClientForm.vue';
export default {
  components: { CreateClient },
  data() {
    return {
      alertMessage: '',
      alert: false,
      alertMode: null,
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async create(dataObj) {
      try {
        const res = await registerClient(dataObj);

        console.log(res);
        const alertObj = {
          alertMessage: res.data.message,
          alertMode: 'success',
        };
        this.setAlert(alertObj);
      } catch (error) {
        console.log(error.response.data.message);
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
