<template>
  <nav class="nav-container">
    <div>
      <router-link class="logo" :to="{ name: 'main' }">Quotation</router-link>
    </div>
    <ul>
      <li v-if="isLogin">
        <router-link :to="{ name: 'mypage' }"> 메뉴 ▾ </router-link>
        <ul class="drop-menu">
          <li>
            <router-link :to="{ name: 'mypage' }">내 프로필</router-link>
          </li>
          <hr />
          <li>
            <router-link :to="{ name: 'clients' }">거래처 목록</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'create-client' }"
              >거래처 등록</router-link
            >
          </li>
          <hr />
          <li>
            <router-link :to="{ name: 'quotations-list' }"
              >견적서 목록</router-link
            >
          </li>
          <hr />
          <li @click="logout">
            <a href="javascript:;">로그아웃</a>
          </li>
        </ul>
      </li>
      <li v-if="!isLogin">
        <router-link :to="{ name: 'signup' }">회원가입</router-link>
      </li>
      <li v-if="!isLogin">
        <router-link :to="{ name: 'login' }">로그인</router-link>
      </li>
      <li class="quote-btn" v-if="isLogin">
        <router-link :to="{ name: 'quotations' }">작성하기</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  components: {},
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
    routeName() {
      return this.$route.name;
    },
  },
  data() {
    return {
      sampleData: '',
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    logout() {
      this.$store.commit('logout');
      this.$router.replace({ name: 'main' });
    },
  },
};
</script>

<style scoped>
body {
  background: #f2f2f2;
}
nav {
  background: #12202f;
}
nav:after {
  content: '';
  clear: both;
  display: table;
}
nav ul {
  float: right;
  list-style: none;
  margin-right: 40px;
  position: relative;
}
nav ul li {
  /* float: left; */
  display: inline-block;
  background: #12202f;
  margin: 0 5px;
}
nav ul li a {
  color: #f2f2f2;
  text-decoration: none;
  line-height: 70px;
  font-size: 18px;
  padding: 8px 15px;
}
nav ul li a:hover {
  color: #dad6d6;
}

nav ul ul li a:hover {
  color: #2968f0;
  box-shadow: none;
}

nav ul ul {
  position: absolute;
  top: 80px;
  opacity: 0;
  visibility: hidden;
  transition: top 0.3s;
}

nav ul li:hover > ul {
  top: 60px;
  opacity: 1;
  visibility: visible;
}

.drop-menu {
  background-color: #f2f2f2;
  border-radius: 8px;
  border: 1px solid #b2b2b2;
}

nav ul ul li {
  background-color: #f2f2f2;
  border-radius: 8px;
  position: relative;
  margin: 0;
  width: 150px;
  float: none;
  display: list-item;
}

nav ul ul li a {
  color: #12202f;
  line-height: 50px;
  font-size: 16px;
}

nav ul ul ul li {
  position: relative;
  top: -70px;
  left: 150px;
}
nav .logo {
  float: left;
  text-decoration: none;
  color: white;
  font-size: 27px;
  font-weight: 600;
  line-height: 70px;
  padding-left: 60px;
}

.quote-btn a {
  margin-left: 12px;
  border-radius: 8px;
  /* border: 1px solid rgb(221, 94, 115); */
  background-color: rgb(221, 94, 115);
}

.quote-btn a:hover {
  border-radius: 8px;
  background-color: rgb(222, 139, 153);
}

.user-icon {
  width: 32px;
  height: 32px;
}
</style>
