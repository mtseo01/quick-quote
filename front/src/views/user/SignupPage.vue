<template>
  <h1>회원가입</h1>
  <SignupForm></SignupForm>
</template>
<script>
import SignupForm from '@/components/user/SignupForm.vue';
export default {
  components: { SignupForm },
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
