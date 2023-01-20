<template>
  <div class="app">
    <!-- header -->
    <AppHeader></AppHeader>
    <div class="test">
      <div class="app-contents">
        <router-view />
      </div>
    </div>

    <!-- footer -->
    <div><AppFooter></AppFooter></div>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';
export default {
  components: { AppHeader, AppFooter },
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

<style>
* {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* display: flex; */
}

/* .test {
  display: flex;
  justify-content: center;
} */
/* 
.app-contents {
  display: flex;
  justify-content: center;
  width: 70%;
  height: 100vh;
  background-color: darkolivegreen;
} */

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
