<template>
  <div>회원가입</div>
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
