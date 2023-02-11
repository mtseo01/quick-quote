<template>
  <div class="app">
    <!-- header -->
    <TheHeader></TheHeader>
    <div class="app-contents-wrap">
      <div class="app-contents">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue';
export default {
  components: { TheHeader },
  data() {
    return {};
  },
  setup() {},
  created() {
    this.setToken();
  },
  mounted() {},
  unmounted() {},
  methods: {
    setToken() {
      this.$store.commit('setToken');
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
}

.app-contents-wrap {
  display: flex;
  justify-content: center;
  /* width: 70%; */

  min-height: 100vh;
  background-color: #12202f;
}
.app-contents {
  margin: 10px auto;

  /* background: blue; */
  color: #fff;
}
</style>
