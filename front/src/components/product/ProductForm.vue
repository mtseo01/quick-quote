<template>
  <div>
    <base-form>
      <div>
        <label for="">제품명</label>
        <input type="text" v-model="productName" />
      </div>
      <div>
        <label for="">단가(금액)</label>
        <input type="text" v-model.number="unitPrice" />
      </div>
      <div>
        <label for="">카테고리</label>
        <input type="text" v-model="category" />
      </div>
      <div>
        <base-button mode="large-comfirm" @click="clickBtnHandler">
          {{ btnName }}
        </base-button>
      </div>
    </base-form>
  </div>
</template>
<script>
export default {
  emits: ['form-data'],
  props: ['fetchedData', 'buttonName'],
  data() {
    return {
      productName: this.fetchedData.productName || '',
      unitPrice: this.fetchedData.unitPrice || '',
      category: this.fetchedData.category || '',
      productId: this.fetchedData._id || null,
      btnName: this.buttonName,
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    clickBtnHandler() {
      const dataObj = {
        productName: this.productName,
        unitPrice: this.unitPrice,
        category: this.category,
      };
      this.$emit('form-data', dataObj);
    },
  },
};
</script>
<style scoped>
label {
  display: block;
  font-size: 14px;
  margin-bottom: 2px;
  text-align: left;
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
