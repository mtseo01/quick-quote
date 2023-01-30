<template>
  <h1>거래처 등록</h1>
  <div>
    <CreateForm />
  </div>
</template>
<script>
import CreateForm from '@/components/client/CreateForm.vue';
export default {
  components: { CreateForm },
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
