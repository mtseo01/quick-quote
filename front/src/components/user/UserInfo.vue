<template>
  <base-form>
    <p>{{ user.companyName }}</p>
    <p>{{ user.companyRegiNum }}</p>
    <p>{{ user.companyAddress }}</p>
    <p>{{ user.userName }}</p>
    <p>{{ user.telephoneNum }}</p>
    <p>{{ user.email }}</p>
    <p>{{ user.businessType }}</p>
    <p>{{ user.businessItem }}</p>
    <br />
    <base-button @click="updateUser(user.userId)">수정하기</base-button>
    <base-button @click="editPassword(user.userId)">비빌번호 변경</base-button>
    <base-button mode="cancel" @click="deleteUser(user.userId)">
      탈퇴하기
    </base-button>
  </base-form>
</template>
<script>
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
    deleteUser(userId) {
      this.$router.push('/users/delete/' + userId);
    },
    editPassword(userId) {
      this.$router.push('/users/password/' + userId);
    },
  },
};
</script>
<style scoped></style>
