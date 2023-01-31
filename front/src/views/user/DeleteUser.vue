<template>
  <h1>탈퇴 페이지</h1>
  <DeleteForm />
</template>
<script>
import DeleteForm from '@/components/user/DeleteForm.vue';
export default {
  components: { DeleteForm },
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
