<template>
  <h1>로그인</h1>
  <LoginForm></LoginForm>
</template>
<script>
import LoginForm from '@/components/user/LoginForm.vue';
export default {
  components: { LoginForm },
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
