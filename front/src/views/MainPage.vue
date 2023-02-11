<template>
  <div class="main-container">
    <div class="main-left"><img src="../assets/main.svg" alt="svg" /></div>
    <div class="main-right">
      <h1>웹에서 쉽고 빠르게 견적서를 만들어 보세요!</h1>
      <h2>작성한 견적서를 PDF파일로 다운로드</h2>
      <h2>견적서와 거래처 정보 간편 관리</h2>

      <div class="button-area">
        <button class="quote-btn" @click="moveQuotePage">시작하기</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  setup() {},
  created() {
    this.checkAuth();
  },
  mounted() {},
  unmounted() {},
  methods: {
    moveQuotePage() {
      this.$router.push('/quotations');
    },
    checkAuth() {
      this.$store.commit('setToken');
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
}
.main-container {
  margin: 100px 0;
  display: flex;
  justify-content: space-between;
}
.main-left {
  /* display: block; */
  margin-left: 100px;
  margin-right: 50px;
  max-width: 40%;
}
.main-right {
  /* display: block; */
  /* margin-left: 0; */
  text-align: center;
  margin-right: 100px;
  min-width: 300px;
  max-width: 800px;
}

h1 {
  /* font-size: 6px; */
  margin-bottom: 30px;
}
h2 {
  color: #b1b1b1;
}

img {
  /* margin-top: 50px; */
  /* margin-right: 50px; */
  min-width: 500px;
  width: 80%;
}
.button-area {
  text-align: center;
}
.quote-btn {
  font-size: 26px;
  width: 200px;
  color: white;
  padding: 12px 22px;
  margin: 30px auto;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background-color: rgb(221, 94, 115);
}

.quote-btn:hover {
  background-color: rgb(222, 139, 153);
}
</style>
