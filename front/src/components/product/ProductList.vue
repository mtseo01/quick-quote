<template>
  <div>
    <table>
      <tr class="head">
        <th class="head-product">Products List</th>
      </tr>
      <tr class="content" v-for="product in fetchProducts" :key="product._id">
        <td>
          <h4>{{ product.productName }}</h4>
          <div class="content-product">
            <div class="content-product-info">
              <p>단가 : {{ product.unitPrice.toLocaleString('ko-KR') }}</p>
              <p>카테고리 : {{ product.category }}</p>
            </div>
            <div>
              <base-button @click="editProduct(product._id)">수정</base-button>
              <base-button mode="cancel" @click="deleteBtn(product._id)"
                >삭제</base-button
              >
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { deleteProduct } from '@/api/product';
export default {
  emits: ['alert-message'],
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  components: {},
  data() {
    return {
      fetchProducts: this.data,
    };
  },
  methods: {
    async deleteBtn(id) {
      try {
        if (confirm('해당 제품을 삭제하시겠습니까?')) {
          const res = await deleteProduct(id);
          // 삭제가 완료되면 fetchProducts 상태를 업데이트하여 리랜더링
          const index = this.fetchProducts.findIndex(
            product => product._id === id,
          );
          this.fetchProducts.splice(index, 1);

          // emit
          const alertObj = {
            alertMessage: res.data.message,
            alertMode: 'success',
          };
          this.$emit('alert-message', alertObj);
        }
      } catch (error) {
        // emit
        const alertObj = {
          alertMessage: error.response.data.message,
          alertMode: 'error',
        };
        this.$emit('alert-message', alertObj);
      }
    },
    editProduct(id) {
      this.$router.push('products/edit/' + id);
    },
  },
};
</script>
<style scoped>
table {
  width: 320px;
  padding: 20px 20px;
  border-radius: 8px;
  text-align: center;
  background: rgba(59, 65, 75, 0.836);
}

table th {
  border-bottom: 1px solid snow;
  padding-bottom: 5px;
}

table .content {
  font-size: 12px;
}
table h4 {
  text-align: left;
  margin-top: 8px;
}

.content-product {
  display: flex;
  justify-content: space-between;
  padding: 3px;
  margin-bottom: 5px;
}
.content-product-info {
  text-align: left;
}
</style>
