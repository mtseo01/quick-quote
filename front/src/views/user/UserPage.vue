<template>
  <div>마이페이지</div>
  <div>
    <p>{{ user.companyName }}</p>
    <p>{{ user.companyRegiNum }}</p>
    <p>{{ user.companyAddress }}</p>
    <p>{{ user.userName }}</p>
    <p>{{ user.telephoneNum }}</p>
    <p>{{ user.email }}</p>
    <p>{{ user.businessType }}</p>
    <p>{{ user.businessItem }}</p>
  </div>
  <button @click="updateUser(user.userId)">수정하기</button>
</template>
<script>
// import axios from 'axios';
import { getUserInfo } from '@/api/user';
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
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    updateUser(userId) {
      this.$router.push('/users/' + userId);
    },
  },
};
</script>
