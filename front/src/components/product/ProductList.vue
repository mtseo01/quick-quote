<template>
  <div>
    <alert-block v-if="alert" :mode="alertMode" @close-alert="closeAlert">
      <p>{{ alertMessage }}</p>
    </alert-block>
    <table>
      <tr class="head">
        <th class="head-product">Products List</th>
      </tr>
      <tr class="content" v-for="product in fetchProducts" :key="product._id">
        <td>
          <h4>{{ product.productName }}</h4>
          <div class="content-product">
            <div class="content-product-info">
              <p>{{ product.unitPrice }}</p>
            </div>
            <div>
              <base-button @click="getProduct(product._id)">수정</base-button>
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
import { getProductsAll } from '@/api/product';
export default {
  components: {},
  data() {
    return {
      alert: false,
      alertMessage: '',
      alertMode: null,
      fetchProducts: [],
    };
  },
  setup() {},
  created() {
    this.fetchData();
  },
  mounted() {},
  unmounted() {},
  methods: {
    async fetchData() {
      try {
        const res = await getProductsAll();
        this.fetchProducts = res.data.docs;
        this.alertMessage = res.data.message;
        this.alert = true;
        this.alertMode = 'success';
      } catch (error) {
        this.alertMessage = error.response.data.message;
        this.alert = true;
        this.alertMode = 'error';
        console.log(error);
      }
    },
    closeAlert() {
      this.alert = false;
      this.alertMessage = '';
      this.alertMode = null;
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
