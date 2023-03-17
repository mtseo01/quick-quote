<template>
  <div>
    <h1>제품 등록</h1>
    <alert-block v-if="alert" :mode="alertMode" @close-alert="closeAlert">
      <p>{{ alertMessage }}</p>
    </alert-block>
    <CreateForm @alert-message="setAlert" />
  </div>
</template>
<script>
import CreateForm from '@/components/product/CreateForm.vue';
export default {
  components: { CreateForm },
  data() {
    return {
      alert: false,
      alertMessage: '',
      alertMode: null,
    };
  },
  methods: {
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
