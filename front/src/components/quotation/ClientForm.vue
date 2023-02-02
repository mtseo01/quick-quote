<template>
  <form @submit.prevent @change="sendData">
    <div class="form-head">
      <span>수신인</span>
      <button @click="sendClient">검색</button>
    </div>
    <div>
      <input placeholder="상호명" type="text" v-model="client.companyName" />
    </div>
    <div>
      <input
        placeholder="담당자 이름"
        type="text"
        v-model="client.clientName"
      />
    </div>
    <div>
      <input
        placeholder="사업자등록번호"
        type="text"
        v-model="client.companyRegiNum"
      />
    </div>
    <div>
      <input placeholder="이메일" type="text" v-model="client.email" />
    </div>
    <div>
      <input placeholder="전화번호" type="text" v-model="client.telephoneNum" />
    </div>
    <div>
      <input placeholder="주소" type="text" v-model="client.companyAddress" />
    </div>
  </form>
</template>
<script>
// import { getClinet } from '@/api/client';
export default {
  components: {},
  data() {
    return {
      client: {
        companyName: '',
        clientName: '',
        companyRegiNum: '',
        email: '',
        telephoneNum: '',
        companyAddress: '',
        _id: '',
      },

      // logMessage: '',
    };
  },
  computed: {},
  setup() {},
  created() {
    // this.fetch();
  },
  mounted() {},
  unmounted() {},
  methods: {
    sendData() {
      return this.$emit('client-data', this.client);
    },
    // async fetch() {
    //   try {
    //     const clientId = this.$route.params.id;
    //     const { data } = await getClinet(clientId);
    //     this.client = data.doc;
    //     this.logMessage = data.message;
    //   } catch (error) {
    //     this.logMessage = error.response.data.message;
    //   }
    // },
  },
};
</script>
<style scoped>
form {
  width: 400px;
  margin: 8px 12px 8px 0;
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
</style>
