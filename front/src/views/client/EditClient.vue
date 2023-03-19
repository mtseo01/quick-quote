<template>
  <h1>거래처 정보 변경</h1>
  <alert-block v-if="alert" :mode="alertMode" @close-alert="closeAlert">
    <p>{{ alertMessage }}</p>
  </alert-block>
  <div>
    <ClientForm
      v-if="fetched"
      :fetchedData="fetchedData"
      buttonName="수정"
      @form-data="update"
    />
  </div>
</template>
<script>
import ClientForm from '@/components/client/ClientForm.vue';
import { getClinet, updateClient } from '@/api/client';
export default {
  components: { ClientForm },
  data() {
    return {
      alertMessage: '',
      alert: false,
      alertMode: null,
      fetchedData: {},
      fetched: false,
      clientId: this.$route.params.id,
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
        const res = await getClinet(this.clientId);
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
        const res = await updateClient(this.clientId, dataObj);
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
