<template>
  <div>
    <div>
      <span>견적 금액</span>
      <span>{{ amount }}</span>
    </div>
    <!-- 테이블 -->
    <div class="container-table">
      <table>
        <th>순번</th>
        <th>품목</th>
        <th>수량</th>
        <th>단가</th>
        <th>VAT(%)</th>
        <th>공급가액</th>
        <th>세액</th>
        <th>합</th>
        <th><button @click="addProductList">+</button></th>
        <tr
          @change="sendProductData"
          v-for="(product, i) in productList"
          :key="i"
        >
          <td>{{ i + 1 }}</td>
          <td>
            <input type="text" v-model="product.name" />
          </td>
          <td>
            <input
              @change="calPrice(i)"
              type="text"
              v-model.number="product.quantity"
            />
          </td>
          <td>
            <input
              @change="calPrice(i)"
              type="text"
              v-model.number="product.unitPrice"
            />
          </td>
          <td>
            <select @change="calTax(i)" v-model.number="product.rate">
              <option disabled>선택</option>
              <option>0</option>
              <option>10</option>
            </select>
          </td>
          <td>
            <!-- <input type="text" v-model="product.price" /> -->
            <input type="text" v-model.number="product.price" />
            <!-- {{ calPrice }} -->
          </td>

          <td><input type="text" v-model.number="product.tax" /></td>
          <td>
            <input
              @change="calAmount"
              type="text"
              v-model.number="product.subTotal"
            />
          </td>
          <td><button @click="deleteProductList(i)">-</button></td>
        </tr>
      </table>
      <textarea
        @change="sendEtcData"
        placeholder="비고"
        v-model="note"
        cols="30"
        rows="5"
      ></textarea>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      amount: '',
      productList: [
        {
          name: '',
          // standard: '',
          quantity: 1,
          unitPrice: 1,
          price: 1,
          rate: '',
          tax: 0,
          subTotal: 0,
        },
      ],
      note: '',
    };
  },

  methods: {
    addProductList() {
      this.productList.push({
        name: '',
        quantity: 1,
        unitPrice: 0,
        price: 0,
        tax: 0,
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
    sendEtcData() {
      return this.$emit('note-data', this.note);
    },
    calPrice(i) {
      this.productList[i].price =
        parseInt(this.productList[i].quantity) *
        parseInt(this.productList[i].unitPrice);

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
        result += value.subTotal;
      });
      this.amount = result;
    },
  },
};
</script>
<style scoped>
/* .list-num {
  width: 30px;
}
.product {
  width: 180px;
}
.quantity {
  width: 40px;
}
.price {
  width: 100px;
} */
</style>
