<template>
  <form @change="sendData" @submit.prevent>
    <div class="form-head">
      <div>공급자</div>
      <base-button @click="getUserInfo">불러오기</base-button>
    </div>
    <div>
      <input type="text" placeholder="상호명" v-model="user.companyName" />
    </div>
    <div>
      <input type="text" placeholder="담당자 이름" v-model="user.userName" />
    </div>
    <div>
      <input
        type="text"
        placeholder="사업자등록번호"
        v-model="user.companyRegiNum"
      />
    </div>
    <div>
      <input type="text" placeholder="이메일" v-model="user.email" />
    </div>

    <div>
      <input type="text" placeholder="전화번호" v-model="user.telephoneNum" />
    </div>
    <div>
      <input type="text" placeholder="주소" v-model="user.companyAddress" />
    </div>
  </form>
</template>
<script>
import { getUserInfo } from '@/api/user';
export default {
  props: {
    data: {
      type: Object,
      required: false,
    },
  },
  emits: ['user-data'],
  components: {},
  data() {
    return {
      user: this.data,
      testUser: this.data,
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
      // const userObj = {};
      return this.$emit('user-data', this.user);
    },
  },
};
</script>
<style scoped>
form {
  width: 400px;
  margin: 8px 0 8px 12px;
  border-radius: 8px;
  padding: 12px 20px 12px;
  background: rgba(59, 65, 75, 0.836);
  font-size: 14px;
  border: 1px solid #b1b1b1;
  /* font-weight: 500; */
}
.form-head {
  display: flex;
  justify-content: space-between;
}
input {
  padding: 5px 12px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
  width: 100%;
  height: 25px;
}
label {
  display: block;
  font-size: 14px;
  margin-bottom: 2px;
  text-align: left;
}
</style>
