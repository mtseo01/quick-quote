<template>
  <base-modal v-if="modal" title="제품 목록" @close="modal = false">
    <template #default>
      <div>
        <p>{{ modalMessage }}</p>
      </div>
      <div
        class="select-item"
        v-for="(item, index) in fetchProducts"
        :key="item._id"
      >
        <h4 @click="selectItem(index)">{{ item.productName }}</h4>
        <div class="content-item-info">
          <p>단가 : {{ item.unitPrice.toLocaleString('ko-KR') }}</p>
        </div>
      </div>
    </template>
  </base-modal>
  <div>
    <!-- 총 견적 금액 -->
    <div class="amount-area">
      <h3>총 견적 금액</h3>
      <h3 id="amount">₩ {{ amount.toLocaleString('ko-KR') }}</h3>
    </div>
    <!-- 테이블 -->
    <div class="container-table">
      <table>
        <th>품목</th>
        <th>수량</th>
        <th>단가</th>
        <th>VAT(%)</th>
        <th>공급가액</th>
        <th>세액</th>
        <th>합</th>
        <th>
          <base-button @click="addProductList">추가</base-button>
        </th>
        <tr
          @change="sendProductData"
          v-for="(product, i) in productList"
          :key="product"
        >
          <!-- 품목 -->
          <td>
            <div class="head-product">
              <input
                class="head-product-input"
                type="text"
                v-model="product.name"
              />
              <base-button @click="fetchData(i)">검색</base-button>
            </div>
          </td>
          <!-- 수량 -->
          <td>
            <input
              class="head-quantity"
              @change="calPrice(i)"
              type="text"
              v-model.number="product.quantity"
            />
          </td>
          <!-- 단가 -->
          <td>
            <input
              class="head-unit-price"
              @change="calPrice(i)"
              type="text"
              v-model.number="product.unitPrice"
            />
          </td>
          <!-- VAT -->
          <td>
            <select
              class="head-rate"
              @change="calTax(i)"
              v-model.number="product.rate"
            >
              <option disabled>선택</option>
              <option>0</option>
              <option>10</option>
            </select>
          </td>
          <!-- 공급가액 -->
          <td>
            <input
              class="head-price"
              type="text"
              v-model.number="product.price"
            />
          </td>
          <!-- 세액 -->
          <td>
            <input class="head-tax" type="text" v-model.number="product.tax" />
          </td>
          <!-- 합계 -->
          <td>
            <input
              class="head-sub-price"
              @change="calAmount"
              type="text"
              v-model.number="product.subTotal"
            />
          </td>
          <td>
            <base-button class="head-delete" @click="deleteProductList(i)">
              제거
            </base-button>
          </td>
        </tr>
      </table>
      <textarea
        @change="sendNoteData"
        placeholder="비고"
        v-model="note"
        cols="30"
        rows="4"
      ></textarea>
    </div>
  </div>
</template>
<script>
import { getProductsAll } from '@/api/product';
export default {
  props: ['productsData', 'amountData', 'noteData'],
  emits: ['product-data', 'note-data'],
  components: {},
  data() {
    return {
      amount: this.amountData,
      productList: this.productsData,
      note: this.noteData,
      modal: false,
      modalMessage: '',
      fetchProducts: [],
      productListIndex: null,
    };
  },

  methods: {
    addProductList() {
      this.productList.push({
        name: '',
        quantity: '',
        unitPrice: '',
        price: '',
        tax: '',
        subTotal: '',
      });
    },

    deleteProductList(index) {
      if (this.productList.length === 1) {
        console.log('더 이상 삭제할 수 없습니다.');
        return 0;
      }
      this.productList.splice(index, 1);
      this.sendProductData;
    },

    sendProductData() {
      return this.$emit('product-data', this.productList, this.amount);
    },
    sendNoteData() {
      return this.$emit('note-data', this.note);
    },
    calPrice(i) {
      if (
        (this.productList[i].unitPrice == '') |
        (this.productList[i].quantity == '')
      ) {
        return false;
      }

      this.productList[i].price =
        this.productList[i].quantity * this.productList[i].unitPrice;

      this.calSubTotal(i);
      this.calAmount();
    },
    calTax(i) {
      if (this.productList[i].rate === '' || this.productList[i].rate === 0) {
        return (this.productList[i].tax = 0);
      }
      this.productList[i].tax =
        this.productList[i].price / this.productList[i].rate;
      this.calSubTotal(i);
      this.calAmount();
    },
    calSubTotal(i) {
      this.productList[i].subTotal =
        this.productList[i].price + this.productList[i].tax;
    },
    calAmount() {
      let result = 0;
      this.productList.forEach(value => {
        result += parseInt(value.subTotal);
      });
      this.amount = result;
    },
    closeModal() {
      this.modal = false;
      this.modalMessage = '';
      this.productListIndex = null;
    },
    async fetchData(i) {
      if (!this.$store.getters.isLogin) {
        this.modalMessage = '로그인이 필요합니다.';
        this.modal = true;
      } else {
        try {
          this.productListIndex = i;
          const res = await getProductsAll();
          this.modalMessage = res.data.message;
          this.fetchProducts = res.data.docs;
          this.modal = true;
        } catch (error) {
          this.modalMessage = error.response.data.message;
          this.modal = true;
          this.productListIndex = null;
        }
      }
    },
    selectItem(index) {
      this.productList[this.productListIndex].name =
        this.fetchProducts[index].productName;
      this.productList[this.productListIndex].unitPrice =
        this.fetchProducts[index].unitPrice;
      this.sendProductData();
      this.productListIndex = null;
      this.modal = false;
    },
  },
};
</script>

<style scoped>
.amount-area {
  display: flex;
  justify-content: space-between;
  margin: 8px 0 8px;
  padding: 12px 20px 12px;
  border-radius: 8px;
  background: rgba(59, 65, 75, 0.836);
  border: 1px solid #b1b1b1;
}

table {
  margin: 8px 0 8px;
  width: 900px;
  padding: 20px 20px;
  border-radius: 8px;
  text-align: center;
  background: rgba(59, 65, 75, 0.836);
  border: 1px solid #b1b1b1;
}

table th {
  border-bottom: 1px solid snow;
  padding-bottom: 5px;
}
table input {
  text-align: right;
}

input {
  padding: 5px 12px;
  margin: 4px 0 4px;
  border: none;
  border-radius: 4px;
  width: 100%;
  height: 25px;
}
select {
  border: none;
  border-radius: 4px;
  width: 100%;
  height: 25px;
}

.head-product {
  display: flex;
  align-items: center;
}

.head-product-input {
  text-align: left;
  width: 210px;
  /* min-width: 35px; */
}

.head-quantity {
  width: 50px;
  /* min-width: 35px; */
}
.head-unit-price {
  width: 120px;
  min-width: 35px;
}
.head-rate {
  width: 50px;
  /* min-width: 35px; */
}
.head-price {
  width: 120px;
  min-width: 35px;
}
.head-tax {
  width: 120px;
  min-width: 35px;
}
.head-sub-price {
  width: 120px;
  min-width: 35px;
}

textarea {
  margin: 8px 0 8px;
  border-radius: 8px;
  padding: 8px;
  width: 100%;
}

.select-item {
  cursor: pointer;
  margin-bottom: 8px;
}
</style>
