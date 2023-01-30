<template>
  <h1>거래처 정보 변경</h1>
  <div>
    <EditClient />
  </div>
</template>
<script>
import EditClient from '@/components/client/EditForm.vue';
export default {
  components: { EditClient },
  data() {
    return {
      sampleData: '',
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
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
