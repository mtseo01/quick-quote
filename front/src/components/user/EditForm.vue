<template>
  <alert-block v-if="alert" :mode="alertMode" @close-alert="closeAlert">
    <p>{{ alertMessage }}</p>
  </alert-block>
  <base-form @submit.prevent="update(user.userId)">
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
    <base-button mode="large-comfirm" type="submit">변경하기</base-button>
  </base-form>
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
      alertMessage: '',
      alert: false,
      alertMode: null,
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
        this.alertMessage = data.message;
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
        this.alertMode = 'success';
        this.alertMessage = data.message;
      } catch (error) {
        console.log(error.response.data);
        this.alert = true;
        this.alertMode = 'error';
        this.alertMessage = error.response.data.message;
      }
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
input {
  padding: 5px 12px;
  margin-top: 4px;
  margin-bottom: 16px;
  border: none;
  border-radius: 4px;
  width: 280px;
  height: 25px;
}
</style>
