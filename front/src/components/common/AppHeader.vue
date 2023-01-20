<template>
  <header class="header-container">
    <div>
      <router-link :to="{ name: 'main' }">Quotation</router-link>
    </div>
    <div>
      <router-link :to="{ name: 'mypage' }">마이페이지</router-link>
      <router-link :to="{ name: 'clients' }">거래처 관리</router-link>
      <router-link :to="{ name: 'signup' }">회원가입</router-link>
      <router-link :to="{ name: 'login' }">로그인</router-link>
    </div>
  </header>
</template>
<script>
export default {
  components: {},
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
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #f8b672;
  color: white;
}
a {
  font-size: 18px;
  margin: 12px;
}
</style>
