<template>
  <div>
    <alert-block v-if="alert" :mode="alertMode" @close-alert="closeAlert">
      {{ alertMessage }}
    </alert-block>
    <form class="signup-form" @submit.prevent>
      <div>
        <label for="email">email</label>
        <input id="email" type="text" v-model="email" />
      </div>
      <div>
        <label for="password">password</label>
        <input id="password" type="password" v-model="password" />
      </div>
      <div>
        <label for="userName">담당자 이름</label>
        <input id="userName" type="text" v-model="userName" />
      </div>
      <div>
        <label for="companyName">회사 상호</label>
        <input id="companyName" type="text" v-model="companyName" />
      </div>
      <div>
        <label for="companyRegiNum">사업자등록번호</label>
        <input id="companyRegiNum" type="text" v-model="companyRegiNum" />
      </div>
      <div>
        <label for="telephoneNum">전화번호</label>
        <input id="telephoneNum" type="text" v-model="telephoneNum" />
      </div>
      <div>
        <label for="companyAddress">회사 주소</label>
        <input id="companyAddress" type="text" v-model="companyAddress" />
      </div>
      <p @click="add">+ 추가 정보 입력하기</p>
      <div v-if="addInfo">
        <div>
          <label for="businessType">업태</label>
          <input id="businessType" type="text" v-model="businessType" />
        </div>
        <div>
          <label for="businessItem">업종</label>
          <input id="businessItem" type="text" v-model="businessItem" />
        </div>
      </div>
      <base-button mode="large-comfirm" @click="signup">회원가입</base-button>
    </form>
    <div class="login-form">
      <span>이미 회원이신가요?</span>
      <router-link :to="{ name: 'login' }">로그인</router-link>
    </div>
  </div>
</template>
<script>
// import axios from 'axios';
import { registerUser } from '@/api/user';

export default {
  components: {},
  data() {
    return {
      userName: '',
      email: '',
      password: '',
      companyName: '',
      companyRegiNum: '',
      telephoneNum: '',
      companyAddress: '',
      businessType: '',
      businessItem: '',
      alertMessage: '',
      alert: false,
      alertMode: null,
      addInfo: false,
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async signup() {
      try {
        const userObj = {
          userName: this.userName,
          email: this.email,
          password: this.password,
          companyName: this.companyName,
          companyRegiNum: this.companyRegiNum,
          telephoneNum: this.telephoneNum,
          companyAddress: this.companyAddress,
          businessType: this.businessType,
          businessItem: this.businessItem,
        };
        const response = await registerUser(userObj);
        console.log(response.data);
        this.$router.push({ name: 'main' });
      } catch (error) {
        this.alertMessage = error.response.data.message;
        this.alert = true;
        this.alertMode = 'error';
      }
    },
    add() {
      this.addInfo = !this.addInfo;
    },
    closeAlert() {
      this.alert = false;
      this.alertMessage = '';
      this.alertMode = null;
    },
  },
};
</script>
<style scoped>
form {
  border-radius: 8px;
  padding: 12px 20px 20px;
  background: rgba(59, 65, 75, 0.836);
  font-size: 14px;
  /* font-weight: 500; */
}
label {
  display: block;
  font-size: 14px;
  margin-bottom: 2px;
  text-align: left;
}

.signup-form input {
  padding: 5px 12px;
  margin-top: 4px;
  margin-bottom: 8px;
  border: 1px solid;
  border-radius: 4px;
  width: 280px;
  height: 25px;
  border: none;
}

p {
  color: rgb(0, 97, 252);
  cursor: pointer;
  text-align: right;
}
p:hover {
  color: rgb(34, 116, 247);
}
div .login-form {
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  padding: 20px 20px;
  background: rgba(59, 65, 75, 0.836);
  font-size: 14px;
  margin-top: 20px;
}
div .login-form a {
  color: rgb(0, 97, 252);
  text-decoration: none;
}
div .login-form a:hover {
  color: rgb(34, 116, 247);
}
</style>
