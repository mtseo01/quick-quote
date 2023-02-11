<template>
  <h1>유저 정보 변경</h1>
  <EditForm />
</template>
<script>
import EditForm from '@/components/user/EditForm.vue';
export default {
  components: { EditForm },
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
