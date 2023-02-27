<template>
  <h1>거래처 리스트</h1>
  <alert-block v-if="alert" :mode="alertMode" @close-alert="closeAlert">
    <p>{{ alertMessage }}</p>
  </alert-block>
  <GetClients v-if="fetched" :data="clients" @alert-message="setAlert" />
</template>
<script>
import { getClientAll } from '@/api/client';
import GetClients from '@/components/client/GetClients.vue';
export default {
  components: { GetClients },
  data() {
    return {
      alert: false,
      alertMessage: '',
      alertMode: null,
      clients: [],
      fetched: false,
    };
  },
  mounted() {
    this.getClients();
  },
  methods: {
    async getClients() {
      try {
        const { data } = await getClientAll();
        this.clients = data.docs;
        this.alertMessage = data.message;
        this.alertMode = 'success';
        this.alert = true;
        this.fetched = true;
      } catch (error) {
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
