<template>
  <h1>비빌번호 변경</h1>
  <EditPasswordForm />
</template>
<script>
import EditPasswordForm from '@/components/user/EditPasswordForm.vue';
export default {
  components: { EditPasswordForm },
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
