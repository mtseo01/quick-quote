<template>
  <div>
    <div class="container-user">
      <table @change="sendData">
        <tr>
          <td rowspan="6">공<br />급<br />자</td>
          <td>사업자등록번호</td>
          <td colspan="3">
            <input id="regi-num" type="text" v-model="user.companyRegiNum" />
            <button @click="getUserInfo">유저 불러오기</button>
          </td>
        </tr>
        <tr>
          <td>상호</td>
          <td colspan="3">
            <input id="company-name" type="text" v-model="user.companyName" />
          </td>
        </tr>
        <tr>
          <td>주소</td>
          <td colspan="3">
            <input id="address" type="text" v-model="user.companyAddress" />
          </td>
        </tr>
        <tr>
          <td>업태</td>
          <td>
            <input id="business-type" type="text" v-model="user.businessType" />
          </td>
          <td>업종</td>
          <td>
            <input id="business-item" type="text" v-model="user.businessItem" />
          </td>
        </tr>
        <tr>
          <td>담당자</td>
          <td><input id="name" type="text" v-model="user.userName" /></td>
          <td>전화번호</td>
          <td>
            <input id="telephone" type="text" v-model="user.telephoneNum" />
          </td>
        </tr>
        <tr>
          <td>이메일</td>
          <td colspan="3">
            <input id="email" type="text" v-model="user.email" />
            <!-- <input id="email" type="text" v-model="user.email[0]" />
            <span>@</span>
            <input id="email" type="text" v-model="user.email[1]" /> -->
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import { getUserInfo } from '@/api/user';
export default {
  components: {},
  data() {
    return {
      user: {
        userId: '',
        userName: '',
        email: '',
        companyName: '',
        companyRegiNum: '',
        telephoneNum: '',
        companyAddress: '',
        businessType: '',
        businessItem: '',
      },
    };
  },

  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async getUserInfo() {
      try {
        const { data } = await getUserInfo();
        // const email = data.user.email.split('@');
        this.user = data.user;
        // this.user.email = email;
        console.log(data);
        this.sendData();
      } catch (error) {
        console.log(error.response.data.message);
      }
    },

    sendData() {
      return this.$emit('user-data', this.user);
    },
  },
};
</script>
