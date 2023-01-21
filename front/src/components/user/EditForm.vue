<template>
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
  <p>{{ logMessage }}</p>
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
    async update(userId) {
      try {
        const userObj = {
          userName: this.userName,
          email: this.email,
          telephoneNum: this.telephoneNum,
          companyName: this.companyName,
          companyRegiNum: this.companyRegiNum,
          companyAddress: this.companyAddress,
          businessType: this.businessType, // 업종
          businessItem: this.businessItem,
        };
        const res = await updateUser(userId, userObj);
        console.log(res);
      } catch (error) {
        console.log(error.response.data);
      }
    },
  },
};
</script>
