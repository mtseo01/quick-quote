<template>
  <div v-if="alert" class="alert-form">
    {{ logMessage }}
  </div>
  <form @submit.prevent="update(user.userId)">
    <div>
      <input placeholder="상호명" type="text" v-model="user.companyName" />
    </div>
    <div>
      <input
        placeholder="사업자등록번호"
        type="text"
        v-model="user.companyRegiNum"
      />
    </div>
    <div>
      <input placeholder="주소" type="text" v-model="user.companyAddress" />
    </div>
    <div>
      <input placeholder="담당자 이름" type="text" v-model="user.userName" />
    </div>

    <div>
      <input placeholder="전화번호" type="text" v-model="user.telephoneNum" />
    </div>
    <div><input placeholder="이메일" type="text" v-model="user.email" /></div>
    <div>
      <input placeholder="업종" type="text" v-model="user.businessType" />
    </div>
    <div>
      <input placeholder="업태" type="text" v-model="user.businessItem" />
    </div>
    <button type="submit">변경하기</button>
  </form>
</template>
<script>
import { getUserInfo, updateUser } from '@/api/user';
export default {
  components: {},
  data() {
    return {
      user: {
        userId: '',
        //
        userName: '',
        email: '',
        telephoneNum: '',
        companyName: '',
        companyRegiNum: '',
        companyAddress: '',
        businessType: '', // 업종
        businessItem: '', // 업태
      },
      logMessage: '',
      alert: false,
    };
  },
  setup() {},
  created() {
    this.getUser();
  },
  mounted() {},
  unmounted() {},
  methods: {
    async getUser() {
      try {
        const { data } = await getUserInfo();
        this.user = data.user;
        this.logMessage = data.message;
        this.alert = true;
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    async update(userId) {
      try {
        const userObj = {
          userName: this.user.userName,
          email: this.user.email,
          telephoneNum: this.user.telephoneNum,
          companyName: this.user.companyName,
          companyRegiNum: this.user.companyRegiNum,
          companyAddress: this.user.companyAddress,
          businessType: this.user.businessType, // 업종
          businessItem: this.user.businessItem,
        };
        const { data } = await updateUser(userId, userObj);
        this.alert = true;
        this.logMessage = data.message;
      } catch (error) {
        console.log(error.response.data);
      }
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
input {
  padding: 5px 12px;
  margin-top: 4px;
  margin-bottom: 16px;
  border: none;
  border-radius: 4px;
  width: 280px;
  height: 25px;
}

button {
  color: white;
  background-color: rgb(73, 154, 73);
  display: block;
  border: none;
  width: 100%;
  padding: 5px 12px;
  margin-top: 8px;
  border-radius: 4px;
}
button:hover {
  background-color: rgb(90, 172, 90);
}

div .alert-form {
  color: rgb(0, 97, 252);
  border-radius: 8px;
  padding: 20px 20px;
  background: rgba(59, 65, 75, 0.836);
  font-size: 14px;
  margin-bottom: 8px;
  transition: 0.3s;
}
</style>
