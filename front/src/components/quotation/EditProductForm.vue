<template>
  <div>
    <div class="amount-area">
      <h3>총 견적 금액</h3>
      <h3 id="amount">₩ {{ amount.toLocaleString('ko-KR') }}</h3>
    </div>
    <!-- 테이블 -->
    <div class="container-table">
      <table>
        <!-- <th>순번</th> -->
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
          <!-- <td class="head-num">{{ i + 1 }}</td> -->
          <td>
            <input class="head-product" type="text" v-model="product.name" />
          </td>
          <td>
            <input
              class="head-quantity"
              @change="calPrice(i)"
              type="text"
              v-model.number="product.quantity"
            />
          </td>
          <td>
            <input
              class="head-unit-price"
              @change="calPrice(i)"
              type="text"
              v-model.number="product.unitPrice"
            />
          </td>
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
          <td>
            <!-- <input type="text" v-model="product.price" /> -->
            <input
              class="head-price"
              type="text"
              v-model.number="product.price"
            />
            <!-- {{ calPrice }} -->
          </td>

          <td>
            <input class="head-tax" type="text" v-model.number="product.tax" />
          </td>
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
export default {
  props: ['productsData', 'amountData', 'noteData'],
  emits: ['product-data', 'note-data'],
  components: {},
  data() {
    return {
      amount: this.amountData,
      productList: this.productsData,
      note: this.noteData,
    };
  },

  methods: {
    addProductList() {
      this.productList.push({
        name: '',
        quantity: 1,
        unitPrice: 1,
        price: 1,
        tax: 0,
        subTotal: 1,
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
  text-align: left;
  width: 250px;
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
</style>
