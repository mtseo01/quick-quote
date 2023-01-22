<template>
  <form @submit.prevent>
    <div>
      <span>수신인</span>
      <button @click="sendClient">검색</button>
    </div>
    <div>
      <input
        @input="sendData"
        placeholder="상호명(*필수)"
        type="text"
        v-model="client.companyName"
      />
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
    <div><input placeholder="이메일" type="text" v-model="client.email" /></div>
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
  computed: {
    sendData() {
      return this.$emit('client-data', this.client);
    },
  },
  setup() {},
  created() {
    // this.fetch();
  },
  mounted() {},
  unmounted() {},
  methods: {
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
