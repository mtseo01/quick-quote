<template>
  <form @submit.prevent>
    <div>
      <input placeholder="상호명(*필수)" type="text" v-model="companyName" />
    </div>
    <div>
      <input placeholder="담당자 이름" type="text" v-model="clientName" />
    </div>
    <div>
      <input
        placeholder="사업자등록번호"
        type="text"
        v-model="companyRegiNum"
      />
    </div>
    <div><input placeholder="이메일" type="text" v-model="email" /></div>
    <div>
      <input placeholder="전화번호" type="text" v-model="telephoneNum" />
    </div>
    <div><input placeholder="주소" type="text" v-model="companyAddress" /></div>

    <base-button mode="large-comfirm" type="submit" @click="submit">{{
      btnName
    }}</base-button>
  </form>
</template>
<script>
export default {
  components: {},
  emits: ['form-data'],
  props: ['fetchedData', 'buttonName'],
  data() {
    return {
      companyName: this.fetchedData.companyName || '', // 필수
      clientName: this.fetchedData.clientName || '',
      companyRegiNum: this.fetchedData.companyRegiNum || '',
      email: this.fetchedData.email || '',
      telephoneNum: this.fetchedData.telephoneNum || '',
      companyAddress: this.fetchedData.companyAddress || '',
      btnName: this.buttonName,
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    submit() {
      const dataObj = {
        companyName: this.companyName,
        clientName: this.clientName,
        companyRegiNum: this.companyRegiNum,
        email: this.email,
        telephoneNum: this.telephoneNum,
        companyAddress: this.companyAddress,
      };
      this.$emit('form-data', dataObj);
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
</style>
